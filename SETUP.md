# Quick Setup Guide

## Step 1: Install Dependencies

```bash
# From project root
npm install

# Install client dependencies
cd client && npm install && cd ..

# Install server dependencies
cd server && npm install && cd ..
```

## Step 2: Configure Environment Variables

### Create `.env` file in `server` directory:

```bash
cp server/.env.example server/.env
```

### Edit `server/.env` with your values:

```
PORT=5000
NODE_ENV=development
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxx
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

## Step 3: Get Required API Keys

### OpenRouter API Key
1. Go to https://openrouter.ai
2. Sign up or log in
3. Go to Settings → API Keys
4. Create new API key
5. Copy and paste into `OPENROUTER_API_KEY`

### Gmail App Password
1. Go to https://myaccount.google.com/security
2. Enable 2-factor authentication (if not already)
3. Go to App passwords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character password
6. Use it for `EMAIL_PASSWORD`

## Step 4: Run Development Server

```bash
# From project root
npm run dev
```

This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Step 5: Test the Application

1. Open http://localhost:5173 in browser
2. Navigate through pages
3. Test chat feature
4. Try contact form

## Deployment to Vercel

### Prerequisites
- GitHub account with repository
- Vercel account

### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/oladayo-portfolio.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import from GitHub
   - Select your repository
   - Click Deploy

3. **Add Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env`

4. **Deploy**
   - Vercel will auto-deploy on push to main

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm run dev:server
```

### Module Not Found Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### Chat Not Working
- Check OpenRouter API key is correct
- Verify backend is running
- Check browser console for errors
- Ensure CORS is enabled

### Email Not Sending
- Verify Gmail app password (not regular password)
- Check email configuration in server/.env
- Test with different email address

## Project Structure

```
oladayo-portfolio/
├── client/              # React frontend
├── server/              # Express backend
├── package.json         # Root dependencies
├── vercel.json         # Vercel config
├── README.md           # Full documentation
└── SETUP.md            # This file
```

## Key Features

✅ AI-powered chatbot with OpenRouter
✅ Multi-page portfolio with React Router
✅ Data visualizations with Recharts
✅ Beautiful UI with TailwindCSS
✅ Contact form with email integration
✅ Fully responsive design
✅ Production-ready deployment

## Support

For issues or questions:
- Check README.md for detailed documentation
- Review error messages in browser console
- Check server logs in terminal
- Verify all environment variables are set

---

Happy coding! 🚀
