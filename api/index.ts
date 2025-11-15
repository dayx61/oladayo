import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import nodemailer from 'nodemailer';

// Load environment variables for serverless
dotenv.config();

const app = express();

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://oladayo.vercel.app',
  process.env.FRONTEND_URL || ''
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    if (/\.vercel\.app$/i.test(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req: any, res: any) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'oladayo-portfolio-api',
    environment: process.env.NODE_ENV || 'production'
  });
});

// Portfolio data (standalone)
const portfolioData = {
  name: 'Oladayo Alabi',
  title: 'IT Service Management & Technical Support | Information Technology Security Operations',
  location: 'Philadelphia, Pennsylvania, United States',
  email: 'alabioladayoibrahim@hotmail.com',
  phone: '+1 267-957-4048',
  linkedin: 'https://www.linkedin.com/in/olaalabi53',
  summary: `As a versatile IT professional with over 7 years of experience in technical support, IT service management, and cybersecurity, I thrive on driving operational excellence, enhancing security frameworks, and delivering seamless user experiences.`,
  skills: [
    'Microsoft Entra ID', 'Microsoft Intune', 'Performance Improvement',
    'IT Service Management', 'Cybersecurity', 'Network Administration',
    'ServiceNow', 'Windows Migration', 'VPN Configuration',
    'Active Directory', 'Incident Management', 'SLA Compliance'
  ],
  experience: [
    {
      company: 'Sectronics',
      position: 'System Admin/Technical Support',
      duration: 'September 2022 - May 2024 (1 year 9 months)',
      highlights: ['Supported Identity and Access management', 'Managed Servicedesk systems']
    },
    {
      company: 'Alibra AI',
      position: 'IT Consultant',
      duration: 'March 2021 - August 2021 (6 months)',
      highlights: ['Led security initiatives', 'Designed cybersecurity training']
    }
  ]
};

// Helper functions
function isGreeting(message: string): boolean {
  const trimmed = message.trim().toLowerCase();
  return ['hi', 'hello', 'hey', 'yo', 'hola', 'howdy'].includes(trimmed);
}

function buildPortfolioContext(): string {
  return `You are an AI assistant representing Oladayo Alabi, an IT professional with 7+ years of experience.

NAME: ${portfolioData.name}
TITLE: ${portfolioData.title}
CONTACT: ${portfolioData.email} | ${portfolioData.phone}
LINKEDIN: ${portfolioData.linkedin}

EXPERIENCE:
${portfolioData.experience.map(exp => `${exp.company} - ${exp.position}: ${exp.highlights.join(', ')}`).join('\n')}

SKILLS: ${portfolioData.skills.join(', ')}

Provide helpful information about Oladayo's background and encourage business connections.`;
}

function generateSmartFallback(message: string): string {
  return `Hello! I'm Oladayo's AI assistant. Here's his profile:

${portfolioData.name} is a ${portfolioData.title} with 7+ years of experience.

Key Skills: ${portfolioData.skills.slice(0, 5).join(', ')} and more

Contact: ${portfolioData.email} | LinkedIn: ${portfolioData.linkedin}`;
}

// Chat endpoint
app.post('/api/chat', async (req: any, res: any) => {
  try {
    const { message, conversationHistory = [], category } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    // Handle greetings locally
    if (isGreeting(message)) {
      return res.json({
        success: true,
        message: `👋 Hey there! I'm Oladayo's AI assistant. I can share his experience, skills, certifications, or help connect you with him. What would you like to know?`,
        source: 'Local responder',
        model: 'local-greeting'
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return res.json({
        success: true,
        message: generateSmartFallback(message),
        source: 'Smart Portfolio Assistant',
        fallback: true
      });
    }

    const systemPrompt = buildPortfolioContext();
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: process.env.AI_MODEL || 'tngtech/deepseek-r1t2-chimera:free',
        messages: messages.map(msg => ({ role: msg.role, content: msg.content })),
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': process.env.FRONTEND_URL || 'https://oladayo.vercel.app',
          'X-Title': 'Oladayo Portfolio AI Assistant',
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    res.json({
      success: true,
      message: response.data.choices[0].message.content,
      source: 'OpenRouter AI',
      model: response.data.model
    });

  } catch (error: any) {
    console.error('Chat error:', error);
    
    // Return fallback response on any error
    const { message } = req.body;
    res.json({
      success: true,
      message: generateSmartFallback(message),
      source: 'Smart Portfolio Assistant',
      fallback: true
    });
  }
});

// Portfolio endpoint
app.get('/api/portfolio', (req: any, res: any) => {
  res.json({
    success: true,
    data: portfolioData
  });
});

// Contact endpoint
app.post('/api/contact', async (req: any, res: any) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // For production, implement actual email sending
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Vercel serverless handler
export default function handler(req: any, res: any) {
  return app(req, res);
}
