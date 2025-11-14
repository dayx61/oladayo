# Deployment Checklist

## Pre-Deployment

- [ ] All dependencies installed (`npm install` in root, client, and server)
- [ ] Environment variables configured in `server/.env`
- [ ] OpenRouter API key obtained and verified
- [ ] Gmail app password generated and configured
- [ ] Application tested locally (`npm run dev`)
- [ ] All pages accessible and working
- [ ] Chat feature tested with OpenRouter
- [ ] Contact form tested with email
- [ ] No console errors in browser
- [ ] No errors in server terminal
- [ ] Build succeeds (`npm run build`)

## GitHub Setup

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] `.gitignore` includes `node_modules`, `.env`, `dist`, `build`
- [ ] README.md present and complete
- [ ] SETUP.md present with instructions

## Vercel Configuration

- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Project root directory set correctly
- [ ] Build command: `npm run build`
- [ ] Output directory: `client/dist`

## Environment Variables in Vercel

- [ ] `OPENROUTER_API_KEY` - Set to your OpenRouter API key
- [ ] `FRONTEND_URL` - Set to `https://your-domain.vercel.app`
- [ ] `EMAIL_USER` - Set to your Gmail address
- [ ] `EMAIL_PASSWORD` - Set to Gmail app password
- [ ] `NODE_ENV` - Set to `production`

## Post-Deployment

- [ ] Visit deployed URL in browser
- [ ] Test all pages load correctly
- [ ] Test chat feature works
- [ ] Test contact form sends email
- [ ] Check mobile responsiveness
- [ ] Verify no console errors
- [ ] Check Vercel deployment logs for errors
- [ ] Test API endpoints directly
- [ ] Verify CORS is working

## Performance & Security

- [ ] Images optimized
- [ ] No sensitive data in code
- [ ] API keys only in environment variables
- [ ] CORS properly configured
- [ ] Input validation on all forms
- [ ] Error messages don't expose system info
- [ ] SSL certificate valid (automatic with Vercel)
- [ ] No console warnings

## Monitoring

- [ ] Set up Vercel analytics
- [ ] Monitor error logs
- [ ] Check API usage
- [ ] Monitor OpenRouter API usage
- [ ] Set up email alerts for deployment failures

## Maintenance

- [ ] Document deployment process
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Monitor performance metrics
- [ ] Backup important data
- [ ] Plan for scaling if needed

## Troubleshooting During Deployment

### Build Fails
- [ ] Check Node.js version compatibility
- [ ] Verify all dependencies are in package.json
- [ ] Check for TypeScript errors
- [ ] Review build logs in Vercel

### Chat Not Working
- [ ] Verify OpenRouter API key in Vercel env vars
- [ ] Check API endpoint is correct
- [ ] Verify CORS configuration
- [ ] Test API directly with curl/Postman

### Email Not Sending
- [ ] Verify Gmail app password is correct
- [ ] Check EMAIL_USER is set
- [ ] Verify email configuration in server code
- [ ] Check spam folder

### CORS Errors
- [ ] Verify FRONTEND_URL in environment variables
- [ ] Check CORS middleware in server
- [ ] Verify API endpoint URLs

## Rollback Plan

- [ ] Keep previous deployment link
- [ ] Document deployment commands
- [ ] Have backup of working code
- [ ] Know how to revert in Vercel

## Final Verification

- [ ] All features working as expected
- [ ] No broken links
- [ ] All images loading
- [ ] Animations smooth
- [ ] Forms submitting correctly
- [ ] Navigation working
- [ ] Mobile menu working
- [ ] Accessibility features present

## Launch Announcement

- [ ] Update LinkedIn profile with portfolio link
- [ ] Share portfolio link in bio
- [ ] Send to relevant contacts
- [ ] Add to resume/CV
- [ ] Social media posts (if applicable)

---

## Deployment Commands Reference

```bash
# Local testing
npm run dev

# Build for production
npm run build

# Deploy to Vercel (if using Vercel CLI)
vercel

# Deploy to production
vercel --prod
```

## Important URLs

- Portfolio: https://oladayo.vercel.app
- GitHub: [Your GitHub Repo]
- Vercel Dashboard: https://vercel.com/dashboard
- OpenRouter: https://openrouter.ai
- Gmail Settings: https://myaccount.google.com

## Support Contacts

- OpenRouter Support: support@openrouter.ai
- Vercel Support: https://vercel.com/support
- Gmail Support: https://support.google.com/mail

---

Last Updated: [Date]
Deployed By: [Your Name]
Deployment Status: ✅ Live
