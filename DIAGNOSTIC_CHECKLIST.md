# Chatbot Diagnostic Checklist

Use this checklist to diagnose and fix the chatbot issue.

## 🔍 Local Environment Check

### 1. Check if `.env` file exists
```bash
ls -la /Users/mangeshraut/CascadeProjects/oladayo-portfolio/server/.env
```
- [ ] File exists
- [ ] If not, run: `cp server/.env.example server/.env`

### 2. Check `.env` file contents
```bash
cat /Users/mangeshraut/CascadeProjects/oladayo-portfolio/server/.env
```
Should show:
```
PORT=5000
NODE_ENV=development
OPENROUTER_API_KEY=sk-or-v1-xxxxx
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```
- [ ] `OPENROUTER_API_KEY` is set
- [ ] `OPENROUTER_API_KEY` starts with `sk-or-v1-`
- [ ] All other variables are set

### 3. Test API key validity
```bash
curl -X POST https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/llama-2-7b-chat",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```
- [ ] Returns a valid response (not 401 error)
- [ ] If 401, API key is invalid

## 🧪 Local Testing

### 4. Start development server
```bash
cd /Users/mangeshraut/CascadeProjects/oladayo-portfolio
npm run dev
```
- [ ] Frontend starts on http://localhost:5173
- [ ] Backend starts on http://localhost:5000
- [ ] No errors in terminal

### 5. Test backend health
```bash
curl http://localhost:5000/api/health
```
- [ ] Returns: `{"status":"ok","timestamp":"..."}`
- [ ] If error, backend is not running

### 6. Test chat endpoint locally
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello",
    "conversationHistory": [],
    "category": "general"
  }'
```
- [ ] Returns a valid response
- [ ] Response contains `"message"` field
- [ ] If error, check server logs

### 7. Test chatbot in browser
1. Open http://localhost:5173/chat
2. Type a message
3. Press send
- [ ] Message appears in chat
- [ ] Loading indicator shows
- [ ] AI response appears
- [ ] No errors in browser console (F12)

## 🌐 Vercel Environment Check

### 8. Check Vercel environment variables
1. Go to https://vercel.com/dashboard
2. Click **oladayo-portfolio** project
3. Click **Settings** → **Environment Variables**
- [ ] `OPENROUTER_API_KEY` is listed
- [ ] `FRONTEND_URL` is listed
- [ ] `NODE_ENV` is set to `production`
- [ ] `EMAIL_USER` is listed
- [ ] `EMAIL_PASSWORD` is listed

### 9. Verify variable values
- [ ] `OPENROUTER_API_KEY` starts with `sk-or-v1-`
- [ ] `FRONTEND_URL` is `https://oladayo.vercel.app`
- [ ] All variables have correct values

### 10. Check deployment status
1. Go to **Deployments** tab
2. Click latest deployment
- [ ] Status shows "Ready"
- [ ] Build completed successfully
- [ ] No build errors in logs

## 🔄 Redeployment

### 11. Redeploy after environment changes
1. Go to **Deployments**
2. Find latest deployment
3. Click **...** menu
4. Click **Redeploy**
- [ ] Deployment started
- [ ] Wait 2-3 minutes for completion
- [ ] Check build logs for errors

### 12. Wait for propagation
- [ ] Wait 5-10 minutes after redeployment
- [ ] Environment variables take time to propagate

## 🧪 Production Testing

### 13. Test chatbot on Vercel
1. Go to https://oladayo.vercel.app/chat
2. Type a message
3. Press send
- [ ] Message appears
- [ ] Loading indicator shows
- [ ] AI response appears
- [ ] No errors in console (F12)

### 14. Check Vercel logs
1. Go to Vercel dashboard
2. Click project → Deployments → Latest
3. Scroll to **Build Logs**
- [ ] No errors in build logs
- [ ] `OPENROUTER_API_KEY` is loaded
- [ ] No "undefined" environment variables

### 15. Check browser console
1. Open https://oladayo.vercel.app/chat
2. Press F12 → Console
3. Send a message
- [ ] No red error messages
- [ ] No CORS errors
- [ ] No "Cannot find module" errors

## 🆘 Troubleshooting

### If Step 5 fails (API key invalid)
- [ ] Go to https://openrouter.ai/settings/keys
- [ ] Generate a new API key
- [ ] Update in `server/.env`
- [ ] Update in Vercel environment variables
- [ ] Redeploy

### If Step 6 fails (Chat endpoint error)
- [ ] Check server logs for error message
- [ ] Verify API key is correct
- [ ] Check if backend is running
- [ ] Verify CORS configuration

### If Step 7 fails (Chat not working locally)
- [ ] Check browser console for errors
- [ ] Check server logs for errors
- [ ] Verify `.env` file is loaded
- [ ] Restart development server

### If Step 13 fails (Chat not working on Vercel)
- [ ] Check Vercel deployment logs
- [ ] Verify environment variables are set
- [ ] Redeploy the project
- [ ] Wait 5-10 minutes
- [ ] Clear browser cache (Ctrl+Shift+Delete)

## ✅ Success Indicators

When everything is working:
- ✅ Chatbot responds to messages
- ✅ No error messages in console
- ✅ Loading indicator appears while thinking
- ✅ Responses are relevant to Oladayo's background
- ✅ Multiple messages work in conversation
- ✅ Works on both local and Vercel

## 📋 Summary

| Step | Component | Status |
|------|-----------|--------|
| 1-3 | Local Environment | ✓ |
| 4-7 | Local Testing | ✓ |
| 8-10 | Vercel Setup | ✓ |
| 11-12 | Redeployment | ✓ |
| 13-15 | Production Testing | ✓ |

---

**Next Steps**:
1. Follow this checklist step by step
2. Mark each item as complete
3. If any step fails, refer to troubleshooting section
4. Once all steps pass, chatbot is fully functional!

**Need Help?**
- Check CHATBOT_FIX_GUIDE.md for detailed instructions
- Check VERCEL_ENV_SETUP.md for environment variable guide
- Review server logs in Vercel dashboard
- Check browser console for client-side errors
