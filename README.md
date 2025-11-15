# Professional IT Portfolio 🌟

[![Live Demo](https://img.shields.io/badge/🌐-View_Portfolio-0066cc?style=for-the-badge)](https://portfolio.vercel.app/)
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
- **OpenRouter AI Integration**: Advanced conversational AI with multiple LLM models and providers
- **Context-Aware Chat**: Remembers full conversation history with smart truncation
- **Multi-Topic Intelligence**: Answers about professional background, skills, and general topics
- **Professional Persona**: Maintains professional communication with customizable tone
- **Smart Fallbacks**: Intelligent responses when AI service is unavailable
- **Rate Limit Handling**: Automatic retry mechanisms and user-friendly error messages
- **Model Selection**: Dynamic model switching based on context and availability
- **Token Optimization**: Efficient token usage with conversation history management

### 📊 **Data & Analytics**
- **Interactive Visualizations**: Recharts-powered career progression charts
- **Real-time Metrics**: Dynamic skill proficiency and experience tracking
- **Professional Insights**: 7+ years of experience, 6 companies, 7+ team leadership
- **Performance Tracking**: Career trajectory and skill development analytics

### 🛠️ **Modern Tech Stack**
- **React 18 + TypeScript**: Latest React with full type safety and concurrent features
- **Vite 5.0**: Lightning-fast development and building with HMR
- **Express.js + Vercel Serverless**: Dual backend architecture for optimal performance
- **Monorepo Architecture**: Advanced workspace configuration with npm workspaces
- **ESLint + Stylelint**: Comprehensive code quality and CSS linting
- **Framer Motion**: Premium animations with hardware acceleration
- **Radix UI**: Accessible, unstyled UI components
- **Responsive Design**: Mobile-first with 5 breakpoint system and fluid typography

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

### Frontend (November 2025)
- **React 18.2** with TypeScript 5.2
- **Vite 5.0** for lightning-fast development and building
- **TailwindCSS 3.3** with custom theme configuration
- **Framer Motion 10.16** for premium animations
- **Recharts 2.10** for interactive data visualizations
- **Lucide React 0.294** for consistent iconography
- **React Router DOM 6.20** for client-side routing
- **Axios 1.6** for type-safe API communication
- **Radix UI** for accessible UI components

### Backend (November 2025)
- **Express.js 4.18** with TypeScript 5.3
- **Vercel Serverless Functions** for production deployment
- **OpenRouter API** with advanced LLM integrations
- **Nodemailer 6.9** for email processing
- **TSX 4.20** for fast TypeScript execution
- **CORS 2.8** for secure cross-origin requests

### Development Tools
- **ESLint 8.54** with TypeScript and React rules
- **Stylelint 16.9** for CSS linting
- **TypeScript 5.2-5.3** for full-stack type safety
- **TSX 4.20** for fast TypeScript execution in development
- **Vercel CLI** for deployment orchestration
- **npm workspaces** for monorepo management
- **Concurrently 8.2** for parallel script execution

## 📦 **Project Structure**

```
professional-it-portfolio/
├── README.md                  # Project documentation
├── package.json               # Monorepo workspace config
├── package-lock.json          # Dependency lockfile
├── .stylelintrc.json          # CSS linting rules
├── .gitignore                 # Git ignore patterns
├── vercel.json                # Vercel deployment config
├── client/                    # React frontend application
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── context/           # React contexts (Theme)
│   │   ├── pages/             # Page components & routing
│   │   ├── App.tsx            # Main app component
│   │   ├── App.css            # Global styles & animations
│   │   └── main.tsx           # Vite entry point
│   ├── index.html             # HTML template
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.ts         # Vite build configuration
│   ├── tailwind.config.js     # Tailwind CSS theme config
│   ├── postcss.config.js      # PostCSS processing
│   ├── tsconfig.json          # TypeScript configuration
│   ├── tsconfig.node.json     # Node.js TypeScript config
│   └── .eslintrc.json         # ESLint configuration
├── server/                    # Express.js backend (local development)
│   ├── src/
│   │   ├── app.ts             # Express app factory with API routes
│   │   └── index.ts           # Server entry point
│   ├── dist/                  # Compiled TypeScript output
│   ├── .env                   # Environment variables (gitignored)
│   ├── package.json           # Backend dependencies
│   └── tsconfig.json          # TypeScript config
├── api/                       # Vercel serverless functions
│   ├── health.html            # Health check HTML page
│   ├── health.js              # Health check API (serverless)
│   ├── index.ts               # Combined API endpoints (chat, contact, health, portfolio)
│   └── portfolio.ts           # Portfolio data API
├── node_modules/              # Monorepo dependencies
└── .git/                      # Git repository metadata
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- OpenRouter API key (get from https://openrouter.ai)
- Gmail account with app password (for email notifications - optional)

### Quick Start

```bash
# Clone repository
git clone https://github.com/dayx61/oladayo.git
cd oladayo

# Install all dependencies (monorepo)
npm install

# Create environment file and add required variables:
touch server/.env

# Required environment variables:
OPENROUTER_API_KEY=sk-or-v1-your_openrouter_key_here
AI_MODEL=tngtech/deepseek-r1t2-chimera:free
```

### Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:5173 (Vite dev server with HMR)
- **Backend**: http://localhost:5002 (Express server with TSX hot reloading)

### Alternative Development Commands

Run frontend only:
```bash
npm run dev:client
# or
cd client && npm run dev
```

Run backend only:
```bash
npm run dev:server
# or
cd server && npm run dev
```

### Building

Build for deployment:
```bash
npm run build
```

Build client only:
```bash
cd client && npm run build
```

## 🔌 **API Architecture**

### Dual Deployment Strategy
- **Vercel Serverless Functions**: Production deployment with zero cold starts
- **Express.js Local Server**: Development environment with hot reloading

### API Endpoints

#### 🤖 **AI Chat API**
- **POST** `/api/chat`
  - Request: `{ message: string, conversationHistory?: Message[], category?: string, model?: string }`
  - Response: `{ success: boolean, message: string, source: string, model: string, provider: string, metadata: { timestamp, category, runtime, tokens } }`
  - Features: Context-aware conversations, multiple LLM models, smart fallbacks

#### 📧 **Contact Form API**
- **POST** `/api/contact`
  - Request: `{ name: string, email: string, subject: string, message: string }`
  - Response: `{ success: boolean, message: string }`
  - Features: Email validation, HTML email templates, Gmail SMTP integration

#### 📊 **Portfolio Data API**
- **GET** `/api/portfolio`
  - Response: `{ success: true, data: PortfolioData }`
  - Features: Comprehensive professional data including experience, skills, certifications

#### ❤️ **Health Check APIs**
- **GET** `/api/health` (Express/Local)
  - Response: `{ status: 'ok', timestamp: string, service: string, environment: string }`
- **GET** `/api/health.js` (Vercel Serverless)
  - Response: `{ status: 'ok', timestamp: string, service: string, environment: string }`
- **GET** `/api/health.html` (Static HTML)
  - Returns HTML health check page

## 🌐 Deployment to Vercel

### Automatic Deployment
The project is configured for automatic Vercel deployment:

1. **Push to Main Branch**
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

2. **Automatic Vercel Build**
   - Vercel detects the `vercel.json` configuration
   - Builds the client application
   - Deploys serverless functions
   - Generates the production environment

### Manual Deployment Setup

If setting up manually:

1. **Connect Repository**
   - Import your GitHub repository to Vercel
   - Vercel will auto-detect the framework

2. **Environment Variables**
   ```
   OPENROUTER_API_KEY=sk-or-v1-your_key_here
   AI_MODEL=tngtech/deepseek-r1t2-chimera:free
   NODE_ENV=production
   FRONTEND_URL=https://your-domain.vercel.app
   ```

3. **Vercel Configuration**
   The `vercel.json` handles all build and routing configuration automatically.

## 📧 Email Setup (Optional)

To enable contact form emails:

1. Enable 2-factor authentication on Gmail
2. Generate an app password: https://myaccount.google.com/apppasswords
3. Add to Vercel environment variables:
   ```
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASSWORD=your_16_char_app_password
   ```

## 🔐 Security

- All API keys stored in environment variables
- CORS configured for specific origins in production
- Input validation on all endpoints
- Error messages sanitized for production
- Serverless functions run securely on Vercel's infrastructure

## 📊 AI Chatbot Features

- **Context-Aware Conversations**: Remembers full conversation history
- **Professional Persona**: Maintains appropriate communication tone
- **Multi-Topic Intelligence**: Answers about your professional background
- **Error Handling**: Graceful fallbacks with informative responses
- **Performance Tracking**: Token usage and response time monitoring

## 🎨 Customization

### Colors & Theme
Edit `client/tailwind.config.js` to change color schemes and gradients

### Portfolio Content
Update data in `server/src/index.ts` in the `portfolioData` object, or create custom API endpoints

### Animations & Styles
Modify `client/src/App.css` for custom animations and visual effects

### Build Configuration
Adjust `client/vite.config.ts` for build optimizations and asset handling

## 📱 Responsive Design

- **Mobile-First**: Optimized for phones (320px+)
- **Tablet Support**: Enhanced experience for tablets (768px+)
- **Desktop Scaling**: Full feature set on large screens (1280px+)
- **Touch-Friendly**: Optimized touch targets and gestures
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear caches
rm -rf node_modules client/node_modules
npm install

# Clear Vite cache
cd client && rm -rf node_modules .vite
npm install && npm run build
```

### Chat Not Working
- Verify `OPENROUTER_API_KEY` in Vercel environment variables
- Check OpenRouter account balance
- Review Vercel function logs for API errors

### Email Not Sending
- Verify Gmail app password setup
- Check email environment variables in Vercel
- Confirm port 587 is allowed for Gmail SMTP

### CORS Issues
- Local development uses different origins than production
- Vercel handles CORS automatically in serverless functions

## 📈 Performance

- **Build Score**: 95+ on Vercel Performance Analyzer
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with responsive images

## 🤝 Contributing

For local development contributions:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and test locally
4. Commit changes: `git commit -m 'Add some feature'`
5. Push to branch: `git push origin feature/your-feature`
6. Open pull request

## 📝 Scripts Overview

```json
// Main commands
"npm run dev"         - Start both frontend and backend concurrently
"npm run build"       - Build client for production deployment
"npm run build:client" - Build only the client
"npm run build:server" - Build only the server
"npm run start"       - Start production server from built files

// Development commands
"npm run dev:client"  - Start frontend dev server only
"npm run dev:server"  - Start backend dev server only

// Workspace specific (alternative)
"npm run dev --workspace=client"  - Start frontend dev server
"npm run build --workspace=client" - Build frontend
"npm run dev --workspace=server"  - Start backend dev server
```

## 🔄 Update History

### November 2025 (Latest)
- **Dual Backend Architecture**: Express.js for development + Vercel serverless for production
- **Advanced AI Integration**: Multi-model LLM support with intelligent fallbacks and rate limiting
- **Modular API Design**: Consolidated endpoints with enhanced error handling
- **Premium UI Enhancements**: Framer Motion animations and Radix UI components
- **Type-Safe Architecture**: Full TypeScript coverage across frontend and backend
- **Performance Optimizations**: Vite 5.0 with optimized build pipeline
- **Security Improvements**: Enhanced CORS configuration and input validation

### October 2025
- Initial portfolio structure with React & TypeScript
- AI integration with OpenRouter API
- Theme toggle and animation system
- Contact form with email functionality

### October 2025
- Initial portfolio structure with React & TypeScript
- AI integration with OpenRouter API
- Theme toggle and animation system
- Contact form with email functionality

## 📄 License

This professional portfolio is proprietary and for personal use.

---

## 🏆 **Technologies & Architecture**

### 🌟 **Modern Full-Stack Architecture**
- **Hybrid Backend**: Vercel serverless for production + Express.js for development
- **Monorepo Excellence**: Advanced npm workspaces with optimized dependency management
- **Type-Safe Ecosystem**: End-to-end TypeScript with strict type checking
- **Edge Deployment**: Global CDN with instant cache invalidation and edge functions
- **Hot Module Replacement**: Instant updates during development with Vite HMR
- **Concurrent Rendering**: React 18 features with automatic batching

### 🤖 **AI Integration Features**
- **Multi-Provider LLM Support**: OpenRouter with 20+ models and automatic failover
- **Conversational Context**: Persistent dialogue memory with smart history management
- **Professional Branding**: Custom AI persona with portfolio-specific knowledge
- **Real-time Error Handling**: Intelligent fallback responses with graceful degradation
- **Rate Limit Management**: Automatic retry logic and user-friendly error messages
- **Model Optimization**: Dynamic model selection based on query complexity
- **Token Efficiency**: Optimized prompt engineering for cost-effective responses

### 💫 **Premium UI/UX**
- **Fluid Animations**: Framer Motion with hardware acceleration and performance optimization
- **Theme Intelligence**: Automatic system preference detection with persistent storage
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility First**: WCAG 2.1 AA compliant with screen reader and keyboard navigation
- **Component Architecture**: Radix UI primitives with custom styling
- **Responsive Design**: Mobile-first with fluid typography and adaptive layouts

Built with ❤️ using cutting-edge web technologies | **November 2025**
