# Vercel Environment Variables Setup Guide

## 🔑 Critical: Setting Up Environment Variables

The AI chatbot requires proper environment variable configuration in Vercel. Follow these steps carefully.

## Step 1: Get Your OpenRouter API Key

### Create OpenRouter Account
1. Go to https://openrouter.ai
2. Click "Sign Up" or "Log In"
3. Verify your email

### Generate API Key
1. Click your profile icon (top right)
2. Go to **Settings** → **API Keys**
3. Click **"Create New API Key"**
4. Name it (e.g., "Oladayo Portfolio")
5. Copy the key (starts with `sk-or-v1-`)
6. **Keep this safe - you'll need it for Vercel**

## Step 2: Configure Vercel Environment Variables

### Access Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your **oladayo-portfolio** project
3. Click **Settings** (top navigation)
4. Click **Environment Variables** (left sidebar)

### Add Environment Variables

Add each variable exactly as shown:

#### 1. OPENROUTER_API_KEY
- **Name**: `OPENROUTER_API_KEY`
- **Value**: `sk-or-v1-xxxxxxxxxxxxx` (your actual key)
- **Environments**: Select all (Production, Preview, Development)
- Click **Save**

#### 2. FRONTEND_URL
- **Name**: `FRONTEND_URL`
- **Value**: `https://oladayo.vercel.app` (or your custom domain)
- **Environments**: Select all
- Click **Save**

#### 3. NODE_ENV
- **Name**: `NODE_ENV`
- **Value**: `production`
- **Environments**: Production only
- Click **Save**

#### 4. EMAIL_USER (for contact form)
- **Name**: `EMAIL_USER`
- **Value**: `your-email@gmail.com`
- **Environments**: Select all
- Click **Save**

#### 5. EMAIL_PASSWORD (Gmail app password)
- **Name**: `EMAIL_PASSWORD`
- **Value**: `xxxx-xxxx-xxxx-xxxx` (16-char app password)
- **Environments**: Select all
- Click **Save**

## Step 3: Verify Environment Variables

After adding all variables:
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click on it
4. Check the **Build Logs** for any errors
5. Look for "OPENROUTER_API_KEY" in the logs (should show it's loaded)

## Step 4: Redeploy

After adding environment variables:
1. Go to **Deployments**
2. Find the latest deployment
3. Click the **...** menu
4. Select **Redeploy**
5. Wait for build to complete

## 🧪 Testing the Chatbot

### Local Testing (Before Deployment)
```bash
# Make sure .env file is set in server/
cat server/.env

# Should show:
# OPENROUTER_API_KEY=sk-or-v1-xxxxx
# FRONTEND_URL=http://localhost:5173
# etc.

# Run locally
npm run dev

# Test chat at http://localhost:5173/chat
```

### Production Testing (After Deployment)
1. Go to https://oladayo.vercel.app/chat
2. Type a message
3. Should get a response from AI
4. If error, check Vercel logs

## 🔍 Troubleshooting

### Error: "AI service not configured"
**Cause**: `OPENROUTER_API_KEY` not set in Vercel
**Fix**: 
1. Go to Vercel Settings → Environment Variables
2. Verify `OPENROUTER_API_KEY` is added
3. Redeploy the project

### Error: "Authentication failed"
**Cause**: Invalid or expired API key
**Fix**:
1. Go to https://openrouter.ai/settings/keys
2. Generate a new API key
3. Update in Vercel environment variables
4. Redeploy

### Error: "Network error"
**Cause**: Backend not responding or CORS issue
**Fix**:
1. Check Vercel deployment logs
2. Verify `FRONTEND_URL` is correct
3. Check CORS configuration in server

### Chat works locally but not on Vercel
**Cause**: Environment variables not loaded
**Fix**:
1. Verify all variables in Vercel dashboard
2. Check variable names are EXACT (case-sensitive)
3. Redeploy after adding variables
4. Wait 5-10 minutes for changes to propagate

## 📋 Checklist

- [ ] OpenRouter API key created
- [ ] All 5 environment variables added to Vercel
- [ ] Variable names are exactly correct (case-sensitive)
- [ ] All environments selected (Production, Preview, Development)
- [ ] Project redeployed after adding variables
- [ ] Deployment completed successfully
- [ ] Chatbot tested and working
- [ ] No errors in Vercel logs

## 🚨 Important Notes

1. **API Key Security**
   - Never commit `.env` file to GitHub
   - Never share your API key
   - Regenerate if accidentally exposed

2. **Variable Names**
   - Must be EXACT (case-sensitive)
   - `OPENROUTER_API_KEY` (not `openrouter_api_key`)
   - `FRONTEND_URL` (not `frontend_url`)

3. **Deployment**
   - Changes to environment variables require redeployment
   - Wait 5-10 minutes for changes to take effect
   - Check deployment logs for errors

4. **Testing**
   - Test locally first with `.env` file
   - Then test on Vercel after deployment
   - Check browser console for client-side errors
   - Check Vercel logs for server-side errors

## 📞 Support

If chatbot still doesn't work:
1. Check Vercel deployment logs
2. Verify API key is valid at https://openrouter.ai
3. Test API directly with curl:
   ```bash
   curl -X POST https://openrouter.ai/api/v1/chat/completions \
     -H "Authorization: Bearer YOUR_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"meta-llama/llama-2-7b-chat","messages":[{"role":"user","content":"Hello"}]}'
   ```
4. Check CORS headers in response
5. Review server logs in Vercel

---

**Status**: Follow this guide to fix your chatbot! 🤖
