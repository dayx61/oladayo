# Oladayo Alabi - Professional Portfolio 🌟

[![Live Demo](https://img.shields.io/badge/🌐-View_Portfolio-0066cc?style=for-the-badge)](https://oladayo.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=flat)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=flat)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=flat)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat)](https://tailwindcss.com/)

A cutting-edge, full-stack portfolio website showcasing modern web technologies with AI-powered features, dark/light theme switching, premium animations, and comprehensive professional information.

## ✨ **Key Features & Technologies**

### 🎨 **Premium Design System**
- **Dark/Light Theme Toggle**: Seamless switching between themes with persistent preferences
- **Rainbow Animations**: Dynamic color-changing effects throughout the UI
- **Glass Morphism**: Modern backdrop blur effects with premium glass elements
- **Gradient Aesthetics**: Multi-color gradients with premium accent colors
- **Smooth Transitions**: 300ms cubic-bezier animations for all interactions

### 🤖 **AI-Powered Features**
- **OpenRouter AI Integration**: Advanced conversational AI with GPT models
- **Context-Aware Chat**: Remembers full conversation history
- **Multi-Topic Intelligence**: Answers about professional background and general topics
- **Professional Persona**: Maintains professional communication tone
- **Error Resilience**: Graceful fallbacks and retry mechanisms

### 📊 **Data & Analytics**
- **Interactive Visualizations**: Recharts-powered career progression charts
- **Real-time Metrics**: Dynamic skill proficiency and experience tracking
- **Professional Insights**: 7+ years of experience, 6 companies, 7+ team leadership
- **Performance Tracking**: Career trajectory and skill development analytics

### 🛠️ **Modern Tech Stack**
- **React 18 + TypeScript**: Latest React with full type safety
- **Vite 5.4**: Lightning-fast development and building (2x faster than create-react-app)
- **Node.js 18+ with Express**: Backend runtime with efficient server architecture
- **Monorepo Architecture**: Proper workspace configuration with npm workspaces
- **ESLint + Stylelint**: Comprehensive code quality and CSS linting
- **Responsive Design**: Mobile-first with 5 breakpoint system

### 🌟 **Advanced Interactions**
- **Micro-interactions**: Hover effects, scaling, and smooth transforms
- **Loading States**: Professional loading indicators and skeleton screens
- **Error Boundaries**: Graceful error handling with fallbacks
- **Form Validation**: Dynamic validation with real-time feedback
- **Accessibility**: WCAG-compliant design with keyboard navigation

### 💻 **Developer Experience**
- **Hot Module Replacement**: Instant updates during development
- **Type-Safe APIs**: Full TypeScript interfaces for backend integration
- **Workspace Scripts**: Optimized npm scripts for monorepo management
- **Linting Configuration**: Custom ESLint and Stylelint rules
- **Clean Project Structure**: Organized directories with proper separation

## 📋 Pages

- **Premium Home**: Hero section with stats, feature showcase, and interactive animations
- **About**: Professional summary, education, and certifications
- **Experience**: Detailed work history with achievements (7+ years, 6 companies)
- **Skills**: Categorized skills and proficiency levels
- **Analytics**: Career data visualizations and performance metrics
- **AI Chat**: Conversational assistant powered by advanced LLM
- **Contact**: Contact form and direct communication channels

## 🛠️ **Tech Stack & Versions**

### Frontend (Nov 2025)
- **React 18.3** with TypeScript 5.6
- **Vite 5.4.21** for optimal build performance
- **TailwindCSS 3.4** with custom theme configuration
- **Recharts 2.13** for interactive data visualizations
- **Lucide React 0.468** for consistent iconography
- **Axios 1.7** for type-safe API communication

### Backend (Nov 2025)
- **Node.js 24.9** with latest LTS features
- **Express 4.21** with modern middleware
- **OpenRouter API** with GPT-4 integration
- **Nodemailer 6.9** for email processing
- **TypeScript 5.6** for full-stack type safety

### Development Tools
- **ESLint 9.15** with TypeScript rules
- **Stylelint 16.9** for CSS linting
- **Vercel CLI** for deployment orchestration
- **npm workspaces** for monorepo management

## 📦 **Project Structure**

```
oladayo-portfolio/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── context/           # React contexts (Theme)
│   │   ├── pages/             # Page components (Home, About, etc.)
│   │   ├── App.tsx            # Main app component
│   │   ├── App.css            # Global styles & animations
│   │   └── main.tsx           # Vite entry point
│   ├── public/                # Static assets
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.ts         # Build configuration
│   ├── tailwind.config.js     # Custom colors & themes
│   └── tsconfig.json          # TypeScript configuration
├── server/                     # Express backend
│   ├── src/
│   │   └── index.ts           # Main server & API routes
│   ├── dist/                  # Compiled JavaScript
│   ├── package.json           # Backend dependencies
│   └── tsconfig.json          # TypeScript config
├── .stylelintrc.json         # CSS linting rules
├── package.json              # Monorepo workspace config
├── vercel.json               # Vercel deployment config
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- OpenRouter API key (get from https://openrouter.ai)
- Gmail account with app password (for email notifications)

### Quick Start

```bash
# Clone repository
cd oladayo-portfolio

# Install all dependencies (monorepo)
npm install

# Create environment file and add required variables:
touch server/.env

# Required environment variables:
# OPENROUTER_API_KEY=your_openrouter_api_key_here
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASSWORD=your_app_password_here
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

## 🔌 **API Endpoints**

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

## 🐛 Common Issues

- **Chat not working**: Check `OPENROUTER_API_KEY` in server/.env
- **Email not sending**: Verify Gmail app password creation
- **Build errors**: Clear node_modules and reinstall

## 📝 License

This project is personal and proprietary.

## 👤 Contact

- Email: alabioladayoibrahim@hotmail.com
- Phone: +1 267-957-4048
- LinkedIn: https://www.linkedin.com/in/olaalabi53

---

## 🏆 **Technologies & Advancements**

**November 2025** | **Full-Stack Modern Web Development**

### 🌟 **Latest Innovations**
- **React 18.3** concurrent features with Suspense & Transitions
- **TypeScript 5.6** with advanced type inference
- **Node.js 24.9** latest LTS with performance improvements
- **Vite 5.4** supercharged build tool (2x faster)
- **TailwindCSS 3.4** with enhanced responsive design
- **OpenRouter AI** multi-modal LLM integration
- **Vercel Platform** serverless deployment & edge functions

### 🎯 **Modern Engineering Practices**
- **Monorepo Architecture** with npm workspaces
- **Hot Module Replacement** for instant development
- **Type-Safe APIs** end-to-end TypeScript coverage
- **Accessibility First** WCAG 2.1 AA compliance
- **Performance Optimized** Core Web Vitals focused
- **SEO Ready** with meta tags & schema markup

### 💫 **Advanced Features**
- **Theme Intelligence** automatic dark/light mode
- **AI Conversational** context-aware chat experience
- **Real-time Data** interactive analytics dashboard
- **Progressive Enhancement** works without JavaScript
- **Offline Capable** service worker implementation

---

Built with ❤️ and cutting-edge technologies by [@olaalabi](https://github.com/olaalabi) | 2025
