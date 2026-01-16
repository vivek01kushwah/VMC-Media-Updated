# Frontend Form Submission Example

This document shows how the contact form submits data to the backend API.

## Implementation Already Done ✅

Your contact form in `src/pages/Contact.tsx` has been updated with:

1. **Form State Management**: Tracks all form fields
2. **API Integration**: Sends data to `/api/audit`
3. **Loading State**: Shows "Sending..." while processing
4. **Error Handling**: Displays success/error messages
5. **Form Reset**: Clears fields after successful submission

## Current Implementation

### Form Submission Code

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Success!",
        description: "Your audit request has been sent. We'll contact you soon!",
      });
      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      toast({
        title: "Error",
        description: data.error || "Failed to send request. Please try again.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    toast({
      title: "Error",
      description: "Failed to send request. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Form Data Structure

The form captures and sends:

```typescript
interface FormData {
  fullName: string;      // Required
  email: string;         // Required (validated as email)
  phone: string;         // Optional
  service: string;       // Optional (dropdown)
  message: string;       // Required (project details)
}
```

### Services/Dropdown Options

```typescript
const services = [
  { value: "seo", label: "SEO Services" },
  { value: "smm", label: "Social Media Marketing" },
  { value: "ppc", label: "Google Ads & PPC" },
  { value: "web", label: "Website Development" },
  { value: "branding", label: "Branding & Design" },
  { value: "other", label: "Other" },
];
```

## API Request Flow

```
User submits form
    ↓
handleSubmit() called
    ↓
fetch("/api/audit", {
  method: "POST",
  body: formData
})
    ↓
API Route validates data
    ↓
Send email via GoDaddy SMTP
    ↓
Return response { success: true/false }
    ↓
Show success/error toast
    ↓
Clear form (on success)
```

## Example: Manual API Call (for testing)

If you want to test the API directly using cURL or Postman:

### Using cURL

```bash
curl -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9250592505",
    "service": "seo",
    "message": "I need help with SEO optimization"
  }'
```

### Using JavaScript (Browser Console)

```javascript
const testFormData = {
  fullName: "John Doe",
  email: "john@example.com",
  phone: "+91 9250592505",
  service: "seo",
  message: "I need help with SEO optimization"
};

fetch("/api/audit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(testFormData),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Using Postman

1. Create a new POST request
2. URL: `http://localhost:3000/api/audit`
3. Go to "Body" tab → Select "raw" → Select "JSON"
4. Paste:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9250592505",
  "service": "seo",
  "message": "I need help with SEO optimization"
}
```
5. Click Send

### Expected Success Response

```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "unique-message-id"
}
```

### Expected Error Response

```json
{
  "success": false,
  "error": "Missing required fields"
}
```

## Error Handling Examples

### Missing Required Fields
**Status**: 400  
**Response**: `{ "success": false, "error": "Missing required fields" }`

### Invalid Email Format
**Status**: 400  
**Response**: `{ "success": false, "error": "Invalid email format" }`

### SMTP Connection Failed
**Status**: 500  
**Response**: `{ "success": false, "error": "Failed to send email. Please try again later." }`

## Testing Checklist

- [ ] Form validates required fields before sending
- [ ] Email field is validated as proper email format
- [ ] Form shows "Sending..." button state while processing
- [ ] Success message appears after submission
- [ ] Form fields clear after successful submission
- [ ] Error message appears if submission fails
- [ ] Email arrives in Info@vmcmedia.in within 1-2 minutes
- [ ] Email contains all form data properly formatted
- [ ] Reply-To is set to user's email address
- [ ] Subject line shows: "New Free Audit Request from [Name]"

## Production Considerations

### Rate Limiting (Optional Future Enhancement)

Consider implementing rate limiting to prevent abuse:

```typescript
// Example: Limit to 5 submissions per hour per IP
const submissions = new Map();

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  
  if (!submissions.has(ip)) {
    submissions.set(ip, []);
  }
  
  const times = submissions.get(ip).filter(t => now - t < 3600000); // 1 hour
  
  if (times.length >= 5) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }
  
  times.push(now);
  submissions.set(ip, times);
  
  // ... rest of submission logic
}
```

### CORS Headers (If Frontend is on Different Domain)

If your frontend is hosted on a different domain than your API, configure CORS:

```typescript
export async function OPTIONS(request) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_APP_URL || '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
```

## Troubleshooting Frontend Issues

### Form not submitting
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab - look for `/api/audit` request
4. Verify response status and body

### Button shows "Sending..." forever
1. Check Network tab in DevTools
2. See if API request completed
3. Check API response status
4. Look for console errors

### Toast notification not showing
1. Verify `useToast` hook is imported
2. Check if UI library supports toast notifications
3. Look for console errors

### Email not received
1. Check spam folder
2. Verify email address in form (no typos)
3. Check GoDaddy email account is active
4. Check server logs for SMTP errors
5. Verify environment variables are set correctly

## Files Modified/Created

✅ **Created**: `app/api/audit/route.js` - Backend API route  
✅ **Updated**: `src/pages/Contact.tsx` - Form submission logic  
✅ **Updated**: `.env.local.example` - Environment variable template  
✅ **Created**: `GODADDY_EMAIL_SETUP.md` - Setup documentation  
✅ **Created**: `FRONTEND_FORM_EXAMPLE.md` - This file  

---

**Status**: Production Ready ✅  
**Last Updated**: January 14, 2026
