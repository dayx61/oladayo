# Oladayo Alabi - Professional Portfolio

A modern, full-stack portfolio website built with React, Node.js, and Vercel featuring an AI-powered chatbot, data visualizations, and comprehensive professional information.

## 🌟 Features

- **Modern UI**: Beautiful gradient design with glass morphism effects using TailwindCSS
- **AI Chatbot**: OpenRouter-powered conversational AI that answers questions about Oladayo's background and any general topics
- **Data Visualizations**: Interactive charts showing career progression, skills proficiency, and role distribution
- **Responsive Design**: Fully mobile-optimized with Tailwind CSS
- **Multi-page Portfolio**: Dedicated pages for Home, About, Experience, Skills, Analytics, Chat, and Contact
- **Email Integration**: Contact form with email notifications
- **CORS Enabled**: Secure backend API with proper CORS configuration
- **Production Ready**: Deployed on Vercel with environment variable management

## 📋 Pages

- **Home**: Hero section with key features and CTAs
- **About**: Professional summary, education, and certifications
- **Experience**: Detailed work history with achievements
- **Skills**: Categorized skills and proficiency levels
- **Analytics**: Career data visualizations and metrics
- **Chat**: AI-powered conversational assistant
- **Contact**: Contact form and direct communication channels

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- TailwindCSS for styling
- Recharts for data visualization
- Lucide React for icons
- Framer Motion for animations
- Axios for API calls

### Backend
- Node.js with Express
- TypeScript
- OpenRouter API for AI
- Nodemailer for email
- CORS for cross-origin requests

### Deployment
- Vercel (Frontend & Backend)
- Environment variables for secrets

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- OpenRouter API key (get from https://openrouter.ai)
- Gmail account with app password (for email notifications)

### Installation

1. **Clone the repository**
```bash
cd /Users/mangeshraut/CascadeProjects/oladayo-portfolio
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install client dependencies**
```bash
cd client
npm install
cd ..
```

4. **Install server dependencies**
```bash
cd server
npm install
cd ..
```

5. **Set up environment variables**

Create `.env` file in the `server` directory:
```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your credentials:
```
PORT=5000
NODE_ENV=development
OPENROUTER_API_KEY=your_openrouter_api_key
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_app_password
```

### Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1: Frontend (runs on http://localhost:5173)
npm run dev:client

# Terminal 2: Backend (runs on http://localhost:5000)
npm run dev:server
```

### Building

Build both frontend and backend:
```bash
npm run build
```

## 📦 Project Structure

```
oladayo-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   └── index.ts       # Main server file
│   ├── tsconfig.json
│   └── package.json
├── package.json           # Root package.json
├── vercel.json           # Vercel deployment config
└── README.md
```

## 🔌 API Endpoints

### Chat
- **POST** `/api/chat`
  - Request: `{ message: string, conversationHistory: Message[], category?: string }`
  - Response: `{ success: boolean, message: string, metadata: { timestamp, category, tokens } }`

### Portfolio Data
- **GET** `/api/portfolio`
  - Response: Portfolio data with experience, skills, certifications

### Contact
- **POST** `/api/contact`
  - Request: `{ name: string, email: string, subject: string, message: string }`
  - Response: `{ success: boolean, message: string }`

### Health Check
- **GET** `/api/health`
  - Response: `{ status: 'ok', timestamp: string }`

## 🌐 Deployment to Vercel

1. **Push to GitHub** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your_github_repo
git push -u origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select the project root directory

3. **Set Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add:
     - `OPENROUTER_API_KEY`: Your OpenRouter API key
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASSWORD`: Your Gmail app password
     - `FRONTEND_URL`: https://your-domain.vercel.app

4. **Deploy**
   - Vercel will automatically deploy on push to main branch

## 📧 Email Setup

To enable contact form emails:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in `EMAIL_PASSWORD` environment variable

## 🔐 Security

- All API keys stored in environment variables
- CORS configured for specific origins
- Input validation on all endpoints
- Error messages sanitized in production

## 📊 AI Chatbot Features

- **Context-Aware**: Remembers conversation history
- **Multi-Topic**: Answers about Oladayo's background and general questions
- **Professional Tone**: Maintains professional communication
- **Metadata Tracking**: Logs token usage and timestamps
- **Error Handling**: Graceful fallbacks for API failures

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js` to change the color scheme

### Content
Update portfolio data in `server/src/index.ts` in the `portfolioData` object

### Styling
Modify `client/src/App.css` for custom animations and styles

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized for all screen sizes

## 🐛 Troubleshooting

### Chat not working
- Verify `OPENROUTER_API_KEY` is set correctly
- Check browser console for CORS errors
- Ensure backend is running on correct port

### Email not sending
- Verify Gmail app password (not regular password)
- Enable "Less secure app access" if needed
- Check spam folder

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf client/.vite`
- Check Node.js version: `node --version` (should be 18+)

## 📝 License

This project is personal and proprietary.

## 👤 Contact

- Email: alabioladayoibrahim@hotmail.com
- Phone: +1 267-957-4048
- LinkedIn: https://www.linkedin.com/in/olaalabi53

---

Built with ❤️ using React, Node.js, and Vercel
# Fresh commit to trigger redeploy
