# GoDaddy Email Integration Setup Guide

This guide explains how to set up the contact form email integration with GoDaddy Professional Email hosting.

## Prerequisites

Before starting, ensure you have:
- ✅ Node.js 18+ installed (required by GoDaddy)
- ✅ GoDaddy Professional Email account set up
- ✅ Your GoDaddy email address and password
- ✅ Next.js 13+ App Router project (already configured)

## Step 1: Install Nodemailer

Your project needs the `nodemailer` package to send emails. Run this command in your project root:

```bash
npm install nodemailer
```

If using yarn:
```bash
yarn add nodemailer
```

Verify installation by checking `package.json` - you should see `"nodemailer": "^x.x.x"` in dependencies.

## Step 2: Configure Environment Variables

Environment variables store sensitive information securely. Never commit them to version control!

### For Local Development

Create a `.env.local` file in your project root:

```
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=587
EMAIL_USER=Info@vmcmedia.in
EMAIL_PASS=your_actual_email_password_here
```

**Important Security Notes:**
- Replace `your_actual_email_password_here` with your actual GoDaddy email password
- Never commit `.env.local` to Git - add it to `.gitignore`
- The `.env.local` file is already in `.gitignore` by default in Next.js projects
- Never share your `.env.local` file with anyone

### For GoDaddy Production Hosting

GoDaddy provides two ways to set environment variables:

#### Option A: Using GoDaddy's Control Panel (Recommended)

1. Log in to your GoDaddy Hosting account
2. Navigate to **Settings** → **Environment Variables** (or similar)
3. Add these environment variables:
   - **EMAIL_HOST**: `smtpout.secureserver.net`
   - **EMAIL_PORT**: `587`
   - **EMAIL_USER**: `Info@vmcmedia.in`
   - **EMAIL_PASS**: Your GoDaddy email password

4. Save and restart your application

#### Option B: Using .env.production File

Create `.env.production` in your project root:

```
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=587
EMAIL_USER=Info@vmcmedia.in
EMAIL_PASS=your_actual_email_password_here
```

**⚠️ Important**: Add `.env.production` to `.gitignore` before committing!

## Step 3: GoDaddy SMTP Settings Reference

These settings are already configured in the API route, but here's the reference:

| Setting | Value | Notes |
|---------|-------|-------|
| SMTP Host | smtpout.secureserver.net | GoDaddy's SMTP server |
| SMTP Port | 587 | Standard TLS port |
| Security | TLS (not SSL) | Use `secure: false` for port 587 |
| Authentication | Required | Use your email account |
| Username | Info@vmcmedia.in | Your GoDaddy email |
| Password | Your email password | Same as email account password |

## Step 4: Test the Integration Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000/contact in your browser

3. Fill out the "Request a Free Audit" form with test data

4. Click "Request Audit"

5. Check:
   - ✅ Success message appears in the UI
   - ✅ Form fields clear after submission
   - ✅ Email arrives in Info@vmcmedia.in inbox within 1-2 minutes

**If it doesn't work:**
- Check browser console (F12) for error messages
- Check terminal/console where you ran `npm run dev` for backend errors
- Verify all environment variables are set correctly
- Ensure you're using the correct password (not the GoDaddy account password, but the email account password)

## Step 5: Deploy to GoDaddy

### Prerequisites for GoDaddy Hosting
- Ensure Node.js support is **enabled** on your GoDaddy hosting (already confirmed in your setup)
- Your application should be built and ready: `npm run build`

### Deployment Steps

1. **Build your project locally:**
   ```bash
   npm run build
   ```

2. **Push to GoDaddy (via FTP, Git, or their upload tool):**
   - Build files in `.next/` folder
   - `package.json` and `package-lock.json`
   - Environment variables configured in GoDaddy's control panel

3. **Install dependencies on GoDaddy:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Verify deployment:**
   - Visit your production domain
   - Test the contact form
   - Verify emails arrive

## Step 6: Troubleshooting

### "Missing environment variables" error
**Solution**: Verify all four variables are set:
- EMAIL_HOST
- EMAIL_PORT
- EMAIL_USER
- EMAIL_PASS

### "Email sending error" or "SMTP Connection Error"
**Common causes:**
1. ❌ **Incorrect password** - GoDaddy email passwords are different from account passwords
2. ❌ **Firewall blocking** - Some networks block port 587. Contact GoDaddy support
3. ❌ **Email account inactive** - Verify your GoDaddy email account is active
4. ❌ **Two-factor authentication** - Disable 2FA for SMTP or use app-specific password

**Solution checklist:**
- Verify password with GoDaddy
- Test SMTP connection with Thunderbird or another client first
- Contact GoDaddy support if still failing

### Emails going to spam
**Solution:**
1. Add your domain to GoDaddy's SPF/DKIM records
2. Verify DMARC settings
3. Contact GoDaddy support for assistance

### Form not submitting
**Solution:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit form and check the API request
4. Look for error messages in the response

## Security Best Practices

✅ **DO:**
- Store passwords in environment variables only
- Use different passwords for development and production
- Rotate passwords regularly
- Keep Node.js updated
- Monitor your email account for unauthorized access
- Implement rate limiting on the API route (optional advanced feature)

❌ **DON'T:**
- Hardcode credentials in code
- Commit `.env.local` or `.env.production` to Git
- Share environment variable files
- Use weak passwords
- Expose API keys in frontend code
- Log sensitive information

## API Route Details

The API route is located at: `app/api/audit/route.js`

**Features:**
- ✅ Validates all required fields
- ✅ Sanitizes user input to prevent XSS attacks
- ✅ Sends formatted HTML + plain text emails
- ✅ Includes timestamps in IST (Indian Standard Time)
- ✅ Sets reply-to address to user's email
- ✅ Error handling without exposing sensitive info
- ✅ Secure SMTP connection (TLS)

**Request format:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9250592505",
  "service": "seo",
  "message": "I need help with SEO"
}
```

**Response format:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "unique-id"
}
```

## Support & Next Steps

1. **Test locally first** before deploying
2. **Keep backups** of your environment variables securely
3. **Monitor email inbox** for form submissions
4. **Set up email forwarding** if needed
5. **Consider setting up auto-replies** for audit requests

For additional help:
- GoDaddy Support: https://www.godaddy.com/help
- Nodemailer Docs: https://nodemailer.com/
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

---

**Last Updated**: January 14, 2026
**Status**: Production Ready ✅
