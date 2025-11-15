import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import nodemailer from 'nodemailer';
dotenv.config();
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://oladayo.vercel.app',
    process.env.FRONTEND_URL || ''
].filter(Boolean);
const isLocalhostOrigin = (origin) => /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
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
function isGreeting(message) {
    const trimmed = message.trim().toLowerCase();
    return ['hi', 'hello', 'hey', 'yo', 'hola', 'howdy'].includes(trimmed) || /^hi[\s!.,]*$/i.test(message) || /^hello[\s!.,]*$/i.test(message);
}
function buildPortfolioContext() {
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
${portfolioData.experience.map(exp => `${exp.company} - ${exp.position} (${exp.duration}): ${exp.highlights.join('; ')}`).join('\n')}

INSTRUCTIONS:
1. When asked about Oladayo, provide accurate information from the profile above
2. Be professional yet friendly in tone
3. For general questions outside the profile, provide helpful information while maintaining professionalism
4. Always encourage connecting via LinkedIn or email for business inquiries
5. Provide concise, clear responses
6. If you don't know something, be honest about it
`;
}
function generateSmartFallback(message, category) {
    const lowerMessage = message.toLowerCase();
    const timestamp = new Date().toISOString();
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('cv') || lowerMessage.includes('resume')) {
        return {
            message: `Here's an overview of Oladayo Alabi's professional background:\n\n📊 **Professional Summary**: Versatile IT Service Management & Technical Support professional with over 7 years of experience.\n\n🏢 **Key Positions**:\n- System Admin/Technical Support at Sectronics (2022-2024)\n- IT Consultant at Alibra AI (2021)\n- IT Service Desk Team Lead at Nigerian Breweries (2019-2021)\n- IT Help Desk Team Lead at TotalEnergies (2017-2019)\n\n🎯 **Core Competencies**:\n${portfolioData.skills.slice(0, 5).join(' • ')} and more\n\n📧 Contact: ${portfolioData.email} | 📱 ${portfolioData.phone}`,
            metadata: {
                category: 'portfolio_overview',
                fallback: true,
                highlights: ['experience', 'background'],
                timestamp
            }
        };
    }
    return {
        message: `Hello! I'm Oladayo's AI assistant. While the AI service is reconnecting, here's a quick profile:\n\n${portfolioData.name} is a ${portfolioData.title} with over 7 years of experience.\n\n**Key Areas of Expertise:**\n• IT Service Management & Technical Support\n• Cybersecurity & Network Administration\n• Microsoft Entra ID & Intune\n• Active Directory & VPN Configuration\n• Incident Management & SLA Compliance\n\n**Contact:** ${portfolioData.email}`,
        metadata: {
            category: 'general_introduction',
            fallback: true,
            helpful_info: true,
            timestamp
        }
    };
}
function sanitizeResponse(text) {
    if (!text)
        return '';
    let sanitized = text.trim();
    const disallowedBlocks = [
        /Is there anything specific about Oladayo[\s\S]*/i,
        /If you'd like (any )?insights[\s\S]*/i,
        /For (IT|professional) inquiries[\s\S]*/i,
        /Feel free to ask about his[\s\S]*/i,
        /You can connect via[\s\S]*/i
    ];
    disallowedBlocks.forEach((pattern) => {
        sanitized = sanitized.replace(pattern, '').trim();
    });
    return sanitized;
}
export function createApp() {
    const app = express();
    const MAX_HISTORY = 6;
    const MAX_MESSAGE_LENGTH = 2000;
    app.use(cors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            if (allowedOrigins.includes(origin))
                return callback(null, true);
            if (isLocalhostOrigin(origin))
                return callback(null, true);
            if (/\.vercel\.app$/i.test(origin))
                return callback(null, true);
            return callback(new Error('Not allowed by CORS'));
        },
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ limit: '10mb', extended: true }));
    app.post('/api/chat', async (req, res) => {
        try {
            const { message, conversationHistory = [], category, model: requestModel } = req.body;
            const trimmedMessage = (message || '').trim();
            if (!trimmedMessage.length) {
                return res.status(400).json({ error: 'Message cannot be empty' });
            }
            const normalizedMessage = trimmedMessage.slice(0, MAX_MESSAGE_LENGTH);
            const recentHistory = conversationHistory.slice(-MAX_HISTORY);
            if (isGreeting(normalizedMessage)) {
                return res.json({
                    success: true,
                    message: `👋 Hey there! I'm Oladayo's AI assistant. I can share his experience, skills, certifications, projects, or help connect you with him. What would you like to know?`,
                    source: 'Local responder',
                    model: 'local-greeting',
                    provider: 'On-device',
                    metadata: {
                        category: category || 'greeting',
                        runtime: { generation_time: 5, latency: 5, tokens_per_second: null },
                        tokens: { prompt: 0, completion: 0, total: 0 }
                    }
                });
            }
            const apiKey = process.env.OPENROUTER_API_KEY;
            if (!apiKey) {
                return res.status(500).json({ error: 'AI service not configured' });
            }
            const systemPrompt = buildPortfolioContext();
            const messages = [
                { role: 'system', content: systemPrompt },
                ...recentHistory,
                { role: 'user', content: normalizedMessage }
            ];
            const model = requestModel || process.env.OPENROUTER_MODEL || process.env.AI_MODEL || 'z-ai/glm-4.5-air:free';
            const temperatureEnv = process.env.AI_TEMPERATURE ? Number(process.env.AI_TEMPERATURE) : undefined;
            const temperature = Number.isFinite(temperatureEnv) ? Number(temperatureEnv) : 0.7;
            const maxTokensEnv = process.env.AI_MAX_TOKENS ? Number(process.env.AI_MAX_TOKENS) : undefined;
            const max_tokens = Number.isFinite(maxTokensEnv) ? Number(maxTokensEnv) : 2000;
            const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
                model,
                messages: messages.map(msg => ({ role: msg.role, content: msg.content })),
                temperature,
                max_tokens,
                top_p: 0.95,
                top_k: 40,
                frequency_penalty: 0.5,
                presence_penalty: 0.1
            }, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'HTTP-Referer': process.env.FRONTEND_URL || 'https://oladayo.vercel.app',
                    'X-Title': 'Oladayo Portfolio AI Assistant',
                    'Content-Type': 'application/json'
                },
                timeout: 30000
            });
            const assistantMessage = response.data.choices[0].message.content?.trim();
            res.json({
                success: true,
                message: assistantMessage,
                source: 'OpenRouter AI',
                model: response.data.model || model,
                provider: response.data.provider || 'Unknown',
                metadata: {
                    timestamp: new Date().toISOString(),
                    category: category || 'portfolio',
                    runtime: response.data.usage,
                    tokens: {
                        prompt: response.data.usage.prompt_tokens,
                        completion: response.data.usage.completion_tokens,
                        total: response.data.usage.total_tokens
                    }
                }
            });
        }
        catch (error) {
            if (error.response?.status === 401) {
                return res.status(401).json({
                    success: false,
                    error: 'Authentication failed',
                    details: 'OPENROUTER_API_KEY is invalid or not configured.',
                    code: 'AUTH_ERROR'
                });
            }
            if (error.response?.status === 429 || error.response?.data?.error?.code === 429) {
                return res.status(429).json({
                    success: false,
                    error: 'Rate limit exceeded',
                    details: 'The AI service is temporarily rate-limited. Please wait 1-2 minutes and try again.',
                    code: 'RATE_LIMIT'
                });
            }
            if (error.response?.status === 402) {
                const { message, category } = req.body;
                const smartResponse = generateSmartFallback(message, category || 'general');
                return res.status(503).json({
                    success: false,
                    error: 'AI Service Temporarily Unavailable',
                    message: sanitizeResponse(smartResponse.message),
                    details: 'The AI service requires credits to operate, but I can still provide valuable information about Oladayo!',
                    code: 'CREDITS_EXHAUSTED',
                    source: 'Smart Portfolio Assistant',
                    fallback: true,
                    metadata: smartResponse.metadata
                });
            }
            res.status(500).json({
                success: false,
                error: 'Failed to get AI response',
                details: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred while processing your request',
                code: 'INTERNAL_ERROR'
            });
        }
    });
    app.get('/api/portfolio', (req, res) => {
        res.json({
            success: true,
            data: portfolioData
        });
    });
    app.post('/api/contact', async (req, res, next) => {
        try {
            const { name, email, subject, message } = req.body;
            if (!name || !email || !subject || !message) {
                return res.status(400).json({ error: 'All fields are required' });
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Invalid email address' });
            }
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            });
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
        }
        catch (error) {
            console.error('Contact error:', error);
            next(error);
        }
    });
    app.get('/api/health', (req, res) => {
        res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });
    app.use((err, req, res, next) => {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            error: process.env.NODE_ENV === 'production'
                ? 'Internal server error'
                : err.message
        });
    });
    app.use((req, res) => {
        res.status(404).json({ error: 'Endpoint not found' });
    });
    return app;
}
//# sourceMappingURL=app.js.map