# Email Integration - Quick Setup Checklist ✅

Complete these steps to get your email integration working.

## 📋 Pre-Flight Checklist

### Step 1: Install Dependencies (⏱️ 1-2 minutes)
- [ ] Run: `npm install nodemailer`
- [ ] Verify in `package.json`: `"nodemailer": "^x.x.x"`

### Step 2: Create Environment Variables (⏱️ 2 minutes)
- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Fill in your GoDaddy email password
- [ ] Verify `.env.local` is in `.gitignore` (already should be)

```bash
# Copy example
cp .env.local.example .env.local

# Edit with your password
# Windows: notepad .env.local
# Mac/Linux: nano .env.local
```

### Step 3: Verify API Route (⏱️ 1 minute)
- [ ] Check file exists: `app/api/audit/route.js`
- [ ] File should have ~200 lines
- [ ] Contains Nodemailer import and transporter setup

### Step 4: Verify Contact Form Update (⏱️ 1 minute)
- [ ] Check `src/pages/Contact.tsx` updated
- [ ] Has `isSubmitting` state
- [ ] Has `handleSubmit` with fetch to `/api/audit`
- [ ] Button shows "Sending..." when `isSubmitting`

### Step 5: Test Locally (⏱️ 5 minutes)
- [ ] Run: `npm run dev`
- [ ] Navigate to: `http://localhost:3000/contact`
- [ ] Fill test form with valid data
- [ ] Click "Request Audit"
- [ ] See success toast message
- [ ] Check form clears
- [ ] **IMPORTANT**: Check your email inbox for the test message

### Step 6: Check Email Receipt (⏱️ 2 minutes)
- [ ] Login to Info@vmcmedia.in (or your GoDaddy email)
- [ ] Look for email with subject: "New Free Audit Request from [Your Name]"
- [ ] Verify all form data appears in email
- [ ] Check "Reply-To" is your test email address

---

## 🔧 Troubleshooting Quick Fixes

### Problem: "Missing environment variables" error

**Solution**: 
```bash
# Check .env.local exists
dir .env.local

# Check content
type .env.local

# Required variables:
# EMAIL_HOST=smtpout.secureserver.net
# EMAIL_PORT=587
# EMAIL_USER=Info@vmcmedia.in
# EMAIL_PASS=your_password
```

### Problem: "Email sending error"

**Causes & Solutions**:
1. ❌ Wrong password
   - Get from: GoDaddy > Email > Manage Account > Password reset
   - NOT your GoDaddy main account password
   
2. ❌ Service not running
   - Restart dev server: `npm run dev`
   - Check console for errors

3. ❌ Network/Firewall issue
   - Contact GoDaddy support
   - Check port 587 not blocked

### Problem: Form not submitting / API not responding

**Solution**:
1. Open DevTools: Press `F12`
2. Click "Network" tab
3. Submit form
4. Look for `/api/audit` request
5. Check response status and body
6. Report the error message

### Problem: Email goes to spam

**Solution**:
- Add SPF/DKIM records to your domain (GoDaddy > DNS)
- Wait 24-48 hours for changes to propagate
- Check email headers for DKIM/SPF status

---

## 📦 Files Provided

| File | Purpose | Status |
|------|---------|--------|
| `app/api/audit/route.js` | Backend API route | ✅ Created |
| `src/pages/Contact.tsx` | Updated form component | ✅ Updated |
| `.env.local.example` | Environment variable template | ✅ Updated |
| `GODADDY_EMAIL_SETUP.md` | Full setup guide | ✅ Created |
| `FRONTEND_FORM_EXAMPLE.md` | Frontend implementation details | ✅ Created |
| `QUICK_SETUP_CHECKLIST.md` | This file | ✅ Created |

---

## 🚀 Deployment to GoDaddy

When ready for production:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Set environment variables in GoDaddy Control Panel:**
   - Dashboard → Settings → Environment Variables
   - Add all 4 variables

3. **Deploy:**
   - Upload `.next/`, `public/`, `package.json`
   - Run `npm install` on server
   - Run `npm start`

4. **Test production:**
   - Visit yourdomain.com/contact
   - Submit test form
   - Verify email arrives

---

## ✨ Key Features Implemented

✅ **Secure SMTP Connection**
- TLS encryption (port 587)
- Credentials in environment variables only
- No sensitive data in frontend

✅ **Proper Form Validation**
- Required field checks
- Email format validation
- Input sanitization

✅ **User Experience**
- Loading state on button
- Success/error messages
- Form auto-clears on success

✅ **Email Content**
- HTML and plain text versions
- Professional formatting
- Timestamp in IST
- Reply-to set to user's email

✅ **Error Handling**
- Graceful failure messages
- Doesn't expose backend errors
- Logs helpful debug info

✅ **Production Ready**
- No credentials in code
- Proper HTTP status codes
- CORS support
- Input validation

---

## 📞 Support Resources

| Issue | Resource |
|-------|----------|
| GoDaddy Email Help | https://www.godaddy.com/help/add-professional-email-1009 |
| Nodemailer Docs | https://nodemailer.com/about/ |
| Next.js API Routes | https://nextjs.org/docs/app/building-your-application/routing/route-handlers |
| Email Best Practices | https://www.godaddy.com/help/about-email-authentication-868 |

---

## 🎯 Success Criteria

You'll know it's working when:

- ✅ Form submits without errors
- ✅ Button shows "Sending..." state
- ✅ Success toast appears after submission
- ✅ Form fields clear automatically
- ✅ Email arrives in inbox within 1-2 minutes
- ✅ Email contains all submitted data
- ✅ Subject line is: "New Free Audit Request from [Name]"
- ✅ Reply-To is user's email address
- ✅ Email formatting looks professional

---

## 📝 Next Steps (Optional)

After successful implementation:

1. **Add rate limiting** - Prevent spam submissions
2. **Add reCAPTCHA** - Additional spam protection
3. **Send confirmation email** - To user confirming receipt
4. **Add email templates** - For consistent branding
5. **Set up auto-replies** - For user expectations
6. **Monitor submissions** - Track leads/metrics

---

**Status**: 🟢 Ready to Deploy  
**Last Updated**: January 14, 2026  
**Difficulty**: Beginner (15-20 minutes total setup time)
