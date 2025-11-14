# Getting Started - Oladayo Portfolio

Welcome! This guide will walk you through setting up and deploying your portfolio.

## 📋 Prerequisites

Before starting, ensure you have:
- Node.js 18+ installed ([download](https://nodejs.org))
- npm or yarn package manager
- Git installed ([download](https://git-scm.com))
- GitHub account (for deployment)
- Vercel account ([sign up](https://vercel.com))

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
# Navigate to project directory
cd /Users/mangeshraut/CascadeProjects/oladayo-portfolio

# Install all dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Install server dependencies  
cd server && npm install && cd ..
```

### 2. Set Up Environment Variables
```bash
# Copy example file
cp server/.env.example server/.env

# Edit the file with your credentials
nano server/.env
```

Add these values:
```
PORT=5000
NODE_ENV=development
OPENROUTER_API_KEY=your_key_here
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### 3. Run Locally
```bash
npm run dev
```

Visit http://localhost:5173 in your browser! 🎉

## 🔑 Getting API Keys

### OpenRouter API Key (for AI Chatbot)

1. Go to https://openrouter.ai
2. Click "Sign Up" or "Log In"
3. Navigate to Settings → API Keys
4. Click "Create New API Key"
5. Copy the key (starts with `sk-or-v1-`)
6. Paste into `OPENROUTER_API_KEY` in `.env`

### Gmail App Password (for Contact Form)

1. Go to https://myaccount.google.com/security
2. Enable 2-factor authentication (if not already enabled)
3. Go back to Security
4. Scroll to "App passwords"
5. Select "Mail" and "Windows Computer"
6. Google will generate a 16-character password
7. Copy and paste into `EMAIL_PASSWORD` in `.env`

## 🧪 Testing Locally

### Test Chat Feature
1. Go to http://localhost:5173/chat
2. Type a message
3. Should get a response from AI

### Test Contact Form
1. Go to http://localhost:5173/contact
2. Fill in the form
3. Should receive email at configured address

### Test All Pages
- Home: http://localhost:5173
- About: http://localhost:5173/about
- Experience: http://localhost:5173/experience
- Skills: http://localhost:5173/skills
- Analytics: http://localhost:5173/analytics
- Chat: http://localhost:5173/chat
- Contact: http://localhost:5173/contact

## 📦 Building for Production

```bash
# Build both frontend and backend
npm run build

# This creates:
# - client/dist/ (frontend build)
# - server/dist/ (backend build)
```

## 🌐 Deploying to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/oladayo-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Click "Import"

### Step 3: Configure Build Settings

Vercel should auto-detect:
- **Framework**: React
- **Build Command**: `npm run build`
- **Output Directory**: `client/dist`

If not, set them manually.

### Step 4: Add Environment Variables

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add each variable:
   - `OPENROUTER_API_KEY` = your OpenRouter key
   - `FRONTEND_URL` = `https://your-domain.vercel.app`
   - `EMAIL_USER` = your Gmail
   - `EMAIL_PASSWORD` = your app password
   - `NODE_ENV` = `production`

### Step 5: Deploy

Click "Deploy" button. Vercel will build and deploy automatically!

Your portfolio will be live at: `https://your-project-name.vercel.app`

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] Chat feature works
- [ ] Contact form sends emails
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Images load correctly
- [ ] Navigation works

## 🔧 Troubleshooting

### "Cannot find module" errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### Port 5000 already in use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm run dev:server
```

### Chat not working
- Check OpenRouter API key is correct
- Verify backend is running
- Check browser console for errors
- Test API: `curl http://localhost:5000/api/health`

### Email not sending
- Verify Gmail app password (not regular password)
- Check EMAIL_USER is set correctly
- Verify 2FA is enabled on Gmail
- Check spam folder

### Build fails on Vercel
- Check Node.js version (should be 18+)
- Verify all dependencies in package.json
- Check for TypeScript errors
- Review Vercel build logs

## 📚 Documentation

- **README.md** - Full documentation
- **SETUP.md** - Detailed setup guide
- **PROJECT_SUMMARY.md** - Project overview
- **DEPLOYMENT_CHECKLIST.md** - Deployment steps

## 🎯 Next Steps

1. ✅ Complete local setup
2. ✅ Test all features
3. ✅ Get API keys
4. ✅ Deploy to Vercel
5. ✅ Share portfolio link
6. ✅ Update LinkedIn
7. ✅ Monitor performance

## 💡 Tips

- **Customize Content**: Edit portfolio data in `server/src/index.ts`
- **Change Colors**: Modify `client/tailwind.config.js`
- **Update Styling**: Edit `client/src/App.css`
- **Add More Pages**: Create new files in `client/src/pages/`

## 🆘 Need Help?

1. Check the documentation files
2. Review error messages carefully
3. Check browser console (F12)
4. Check server terminal output
5. Verify environment variables are set

## 📞 Contact Information

Your contact details are already in the portfolio:
- Email: alabioladayoibrahim@hotmail.com
- Phone: +1 267-957-4048
- LinkedIn: https://www.linkedin.com/in/olaalabi53

## 🎉 You're All Set!

Your portfolio is ready to showcase your professional achievements. Good luck! 🚀

---

**Questions?** Refer to the detailed documentation files in the project root.

**Ready to deploy?** Follow the Vercel deployment steps above.

**Want to customize?** Check the documentation for styling and content customization.
