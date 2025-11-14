import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://oladayo.vercel.app',
    process.env.FRONTEND_URL || ''
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Types
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
  category?: string;
}

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Portfolio data
const portfolioData = {
  name: 'Oladayo Alabi',
  title: 'IT Service Management & Technical Support | Information Technology Security Operations',
  location: 'Philadelphia, Pennsylvania, United States',
  email: 'alabioladayoibrahim@hotmail.com',
  phone: '+1 267-957-4048',
  linkedin: 'https://www.linkedin.com/in/olaalabi53',
  summary: `As a versatile IT professional with over 7 years of experience in technical support, IT service management, and cybersecurity, I thrive on driving operational excellence, enhancing security frameworks, and delivering seamless user experiences.`,
  skills: [
    'Microsoft Entra ID',
    'Microsoft Intune',
    'Performance Improvement',
    'IT Service Management',
    'Cybersecurity',
    'Network Administration',
    'ServiceNow',
    'Windows Migration',
    'VPN Configuration',
    'Active Directory',
    'Incident Management',
    'SLA Compliance'
  ],
  certifications: [
    'SAP ERP Essential Training',
    'IBM Predictive Analytics Specialist',
    'CISA Cert Prep: 5 Information Asset Protection for IS Auditors',
    'CISA Cert Prep: 4 IT Operations, Maintenance, and Service Delivery for IS Auditors',
    'CISA Cert Prep: 3 Information Technology Life Cycle for IS Auditors'
  ],
  experience: [
    {
      company: 'Sectronics',
      position: 'System Admin/Technical Support',
      duration: 'September 2022 - May 2024 (1 year 9 months)',
      location: 'Cypress, Texas, United States',
      highlights: [
        'Supported Identity and Access management and User account lifecycle management',
        'Managed Servicedesk and Ticketing systems'
      ]
    },
    {
      company: 'Alibra AI',
      position: 'IT Consultant',
      duration: 'March 2021 - August 2021 (6 months)',
      location: 'Ibadan, Oyo, Nigeria',
      highlights: [
        'Led initiatives to bolster security posture by 90%',
        'Designed gamified cybersecurity training reducing phishing susceptibility from 80% to 20%',
        'Introduced secure dual-location access systems with MFA',
        'Executed comprehensive IT security overhaul with VPN deployment'
      ]
    },
    {
      company: 'Nigerian Breweries Plc',
      position: 'IT Service Desk Team Lead',
      duration: 'December 2019 - March 2021 (1 year 4 months)',
      location: 'Nigeria',
      highlights: [
        'Reduced incident resolution times by 50%',
        'Launched "First Aid for IT Devices" program',
        'Achieved 99% customer satisfaction rating',
        'Managed patch management across 1,500+ devices'
      ]
    },
    {
      company: 'TotalEnergies',
      position: 'IT Help Desk Team Lead',
      duration: 'January 2017 - December 2019 (3 years)',
      location: 'Nigeria',
      highlights: [
        'Led IT support operations for 800+ users',
        'Managed team of seven including interns',
        'Contributed to Office 365 migration',
        'Led Windows 7 to Windows 10 migration for 1,500 PCs'
      ]
    }
  ]
};

// Helper function to build context for AI
function buildPortfolioContext(): string {
  return `
You are an AI assistant representing Oladayo Alabi, an IT professional with 7+ years of experience.

PROFILE INFORMATION:
Name: ${portfolioData.name}
Title: ${portfolioData.title}
Location: ${portfolioData.location}
Email: ${portfolioData.email}
Phone: ${portfolioData.phone}
LinkedIn: ${portfolioData.linkedin}

SUMMARY:
${portfolioData.summary}

KEY SKILLS:
${portfolioData.skills.join(', ')}

CERTIFICATIONS:
${portfolioData.certifications.join(', ')}

EXPERIENCE HIGHLIGHTS:
${portfolioData.experience.map(exp => 
  `${exp.company} - ${exp.position} (${exp.duration}): ${exp.highlights.join('; ')}`
).join('\n')}

INSTRUCTIONS:
1. When asked about Oladayo, provide accurate information from the profile above
2. Be professional yet friendly in tone
3. For general questions outside the profile, provide helpful information while maintaining professionalism
4. Always encourage connecting via LinkedIn or email for business inquiries
5. Provide concise, clear responses
6. If you don't know something, be honest about it
`;
}

// AI Chat endpoint
app.post('/api/chat', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message, conversationHistory = [], category } = req.body as ChatRequest;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('OPENROUTER_API_KEY not configured');
      return res.status(500).json({ error: 'AI service not configured' });
    }

    // Build conversation with context
    const systemPrompt = buildPortfolioContext();
    
    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory,
      { role: 'user' as const, content: message }
    ];

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'meta-llama/llama-2-7b-chat',
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 0.9,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': process.env.FRONTEND_URL || 'https://oladayo.vercel.app',
          'X-Title': 'Oladayo Portfolio',
          'Content-Type': 'application/json'
        }
      }
    );

    const assistantMessage = response.data.choices[0].message.content;

    res.json({
      success: true,
      message: assistantMessage,
      metadata: {
        timestamp: new Date().toISOString(),
        category: category || 'general',
        tokens: {
          prompt: response.data.usage.prompt_tokens,
          completion: response.data.usage.completion_tokens,
          total: response.data.usage.total_tokens
        }
      }
    });
  } catch (error: any) {
    console.error('Chat error:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      return res.status(401).json({ 
        error: 'Authentication failed. API key may be invalid.',
        details: 'OPENROUTER_API_KEY is not properly configured'
      });
    }
    
    if (error.response?.status === 429) {
      return res.status(429).json({ 
        error: 'Rate limited. Please try again later.' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to get AI response',
      details: error.message 
    });
  }
});

// Portfolio data endpoint
app.get('/api/portfolio', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: portfolioData
  });
});

// Contact endpoint
app.post('/api/contact', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, subject, message } = req.body as ContactRequest;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Configure email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: portfolioData.email,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    res.json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Contact error:', error);
    next(error);
  }
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
