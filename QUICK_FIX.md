# 🚀 Quick Fix - AI Chatbot Not Responding

## The Problem
Chatbot shows: "Sorry, I encountered an error. Please try again later."

## The Root Cause
**Missing `OPENROUTER_API_KEY` in Vercel environment variables**

## The 3-Minute Fix

### 1️⃣ Get API Key (1 minute)
```
Go to: https://openrouter.ai/settings/keys
Click: Create New API Key
Copy: The key (starts with sk-or-v1-)
```

### 2️⃣ Add to Vercel (1 minute)
```
Go to: https://vercel.com/dashboard
Select: oladayo-portfolio project
Click: Settings → Environment Variables
Add: OPENROUTER_API_KEY = sk-or-v1-xxxxx
Save
```

### 3️⃣ Redeploy (1 minute)
```
Go to: Deployments tab
Click: Latest deployment → ... menu
Select: Redeploy
Wait: 2-3 minutes
```

## ✅ Done!
Visit https://oladayo.vercel.app/chat and test the chatbot.

---

## If Still Not Working

### Check 1: Verify API Key
```bash
curl -X POST https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"meta-llama/llama-2-7b-chat","messages":[{"role":"user","content":"Hi"}]}'
```
- Should return a response (not 401)

### Check 2: Verify Vercel Logs
1. Go to Vercel dashboard
2. Click project → Deployments → Latest
3. Scroll to Build Logs
4. Look for errors

### Check 3: Test Locally
```bash
cd /Users/mangeshraut/CascadeProjects/oladayo-portfolio
npm run dev
# Visit http://localhost:5173/chat
```

---

## Environment Variables Needed

| Variable | Value | Where |
|----------|-------|-------|
| `OPENROUTER_API_KEY` | `sk-or-v1-xxxxx` | Vercel |
| `FRONTEND_URL` | `https://oladayo.vercel.app` | Vercel |
| `NODE_ENV` | `production` | Vercel |
| `EMAIL_USER` | `your-email@gmail.com` | Vercel |
| `EMAIL_PASSWORD` | `xxxx-xxxx-xxxx-xxxx` | Vercel |

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| "AI service not configured" | Missing API key | Add to Vercel env vars |
| "Authentication failed" | Invalid API key | Generate new key |
| "Network error" | Backend down | Check Vercel logs |
| Works locally, not on Vercel | Env vars not loaded | Redeploy after adding vars |

---

## Detailed Guides

- **Full Setup**: See `VERCEL_ENV_SETUP.md`
- **Troubleshooting**: See `CHATBOT_FIX_GUIDE.md`
- **Diagnostics**: See `DIAGNOSTIC_CHECKLIST.md`

---

**Status**: Follow the 3-minute fix above! 🤖
