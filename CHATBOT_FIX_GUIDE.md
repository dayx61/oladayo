# AI Chatbot Fix Guide

## 🔴 Problem
The chatbot is showing: "Sorry, I encountered an error. Please try again later."

## ✅ Solution

The issue is that the **OPENROUTER_API_KEY** environment variable is not set in Vercel. Follow these steps:

## Step 1: Verify Local Setup Works

```bash
# Navigate to project
cd /Users/mangeshraut/CascadeProjects/oladayo-portfolio

# Check if .env file exists in server directory
ls -la server/.env

# If not, create it
cp server/.env.example server/.env

# Edit and add your OpenRouter API key
nano server/.env
```

Your `server/.env` should contain:
```
PORT=5000
NODE_ENV=development
OPENROUTER_API_KEY=sk-or-v1-YOUR_ACTUAL_KEY_HERE
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Step 2: Test Locally

```bash
# Install dependencies if not already done
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..

# Run development server
npm run dev

# Open http://localhost:5173/chat
# Try sending a message to the chatbot
```

If it works locally, proceed to Step 3.

## Step 3: Get OpenRouter API Key

1. Go to https://openrouter.ai
2. Sign up or log in
3. Click your profile → Settings → API Keys
4. Click "Create New API Key"
5. Copy the key (starts with `sk-or-v1-`)

## Step 4: Add to Vercel

1. Go to https://vercel.com/dashboard
2. Click your **oladayo-portfolio** project
3. Click **Settings** (top navigation)
4. Click **Environment Variables** (left sidebar)
5. Click **Add New**

Add these variables:

| Name | Value | Environments |
|------|-------|--------------|
| `OPENROUTER_API_KEY` | `sk-or-v1-xxxxx` | All |
| `FRONTEND_URL` | `https://oladayo.vercel.app` | All |
| `NODE_ENV` | `production` | Production |
| `EMAIL_USER` | `your-email@gmail.com` | All |
| `EMAIL_PASSWORD` | `xxxx-xxxx-xxxx-xxxx` | All |

## Step 5: Redeploy

1. In Vercel dashboard, go to **Deployments**
2. Find the latest deployment
3. Click the **...** menu
4. Click **Redeploy**
5. Wait for build to complete (2-3 minutes)

## Step 6: Test on Vercel

1. Go to https://oladayo.vercel.app/chat
2. Send a message
3. Should get a response from AI

## 🔍 Verify It's Working

### Check Backend Logs
1. Go to Vercel dashboard
2. Click your project
3. Go to **Deployments**
4. Click the latest deployment
5. Scroll to **Build Logs**
6. Look for "OPENROUTER_API_KEY" (should show it's loaded)

### Check Frontend Errors
1. Open https://oladayo.vercel.app/chat
2. Press F12 (Developer Tools)
3. Go to **Console** tab
4. Send a message
5. Look for any error messages

## 🆘 Still Not Working?

### Issue 1: "AI service not configured"
- OPENROUTER_API_KEY is missing in Vercel
- **Fix**: Add it to Vercel environment variables and redeploy

### Issue 2: "Authentication failed"
- API key is invalid or expired
- **Fix**: Generate a new key at https://openrouter.ai/settings/keys

### Issue 3: "Network error"
- Backend not responding
- **Fix**: Check Vercel deployment logs for errors

### Issue 4: Works locally but not on Vercel
- Environment variables not loaded
- **Fix**: 
  1. Verify variable names are EXACT (case-sensitive)
  2. Redeploy after adding variables
  3. Wait 5-10 minutes for changes

## 📋 Quick Checklist

- [ ] OpenRouter account created
- [ ] API key generated
- [ ] `.env` file created in `server/` directory
- [ ] Local chatbot tested and working
- [ ] API key added to Vercel environment variables
- [ ] Project redeployed on Vercel
- [ ] Vercel deployment completed successfully
- [ ] Chatbot tested on Vercel and working

## 🚀 Expected Behavior

When working correctly:
1. You type a message in the chat
2. Loading indicator appears ("Thinking...")
3. AI responds with a message about Oladayo
4. Response appears in chat bubble
5. No errors in console

## 📞 Need Help?

1. **Check Vercel Logs**: https://vercel.com/dashboard → Your Project → Deployments → Latest → Logs
2. **Check Browser Console**: F12 → Console tab
3. **Test API Directly**: Use curl to test the endpoint
4. **Read VERCEL_ENV_SETUP.md**: Detailed environment variable guide

---

**Status**: Follow this guide to fix your chatbot! 🤖

Once fixed, your chatbot will be fully functional and ready to answer questions about Oladayo's background, experience, and any general topics!
