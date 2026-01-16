# Email API - Complete Implementation Reference

This document provides complete code examples for integrating with the email API.

---

## 📚 Table of Contents

1. Frontend Form Submission (Already Implemented)
2. Advanced Frontend Examples
3. API Testing Examples
4. Backend API Code Structure
5. Extending the API

---

## 1️⃣ Frontend Form Submission (Already Implemented)

### Current Implementation in `src/pages/Contact.tsx`

```typescript
'use client';

import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // Form JSX here...
  );
};

export default Contact;
```

---

## 2️⃣ Advanced Frontend Examples

### Example A: Custom Hook for Form Submission

```typescript
// lib/useAuditForm.ts
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface AuditFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function useAuditForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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

      if (response.ok && data.success) {
        toast({
          title: "Success!",
          description: "Your audit request has been sent. We'll contact you soon!",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        
        return { success: true, messageId: data.messageId };
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send request.",
          variant: "destructive",
        });
        return { success: false, error: data.error };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Network error";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return {
    formData,
    setFormData,
    handleSubmit,
    handleChange,
    isSubmitting,
  };
}

// Usage in component:
// const { formData, handleSubmit, handleChange, isSubmitting } = useAuditForm();
```

### Example B: Async Submission with Retry Logic

```typescript
// lib/submitAuditForm.ts
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

async function submitAuditFormWithRetry(
  formData: AuditFormData,
  retries = 0
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const response = await fetch("/api/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP Error: ${response.status}`);
    }

    return { success: true, messageId: data.messageId };
  } catch (error) {
    if (retries < MAX_RETRIES) {
      // Exponential backoff: 1s, 2s, 4s
      await new Promise(resolve => 
        setTimeout(resolve, RETRY_DELAY * Math.pow(2, retries))
      );
      
      return submitAuditFormWithRetry(formData, retries + 1);
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Usage:
// const result = await submitAuditFormWithRetry(formData);
```

### Example C: Loading and Progress Feedback

```typescript
// components/AuditFormWithProgress.tsx
import { useAuditForm } from '@/lib/useAuditForm';
import { useState } from 'react';

export function AuditFormWithProgress() {
  const { formData, handleSubmit, handleChange, isSubmitting } = useAuditForm();
  const [progress, setProgress] = useState(0);

  const handleSubmitWithProgress = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate progress
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + Math.random() * 30, 90));
    }, 200);

    try {
      await handleSubmit(e);
      setProgress(100);
    } finally {
      clearInterval(interval);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  return (
    <form onSubmit={handleSubmitWithProgress}>
      {/* Form fields */}
      
      {isSubmitting && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white px-4 py-2 rounded-lg disabled:opacity-50"
      >
        {isSubmitting ? `Sending... ${Math.round(progress)}%` : "Request Audit"}
      </button>
    </form>
  );
}
```

---

## 3️⃣ API Testing Examples

### Using cURL (Command Line)

```bash
# Basic test
curl -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9250592505",
    "service": "seo",
    "message": "I need SEO help"
  }'

# Pretty print JSON response
curl -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+91 9250592506",
    "service": "smm",
    "message": "Social media marketing needed"
  }' | jq .

# With verbose output (shows headers)
curl -v -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"test@example.com","message":"Test"}'
```

### Using Node.js

```javascript
// test/testAuditAPI.js
async function testAuditAPI() {
  const testData = {
    fullName: "Test User",
    email: "test@example.com",
    phone: "+91 9250592505",
    service: "ppc",
    message: "Testing the API",
  };

  try {
    const response = await fetch("http://localhost:3000/api/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    console.log("Status:", response.status);
    console.log("Response:", result);
    
    if (result.success) {
      console.log("✅ Email sent successfully!");
      console.log("Message ID:", result.messageId);
    } else {
      console.log("❌ Error:", result.error);
    }
  } catch (error) {
    console.error("Test failed:", error);
  }
}

testAuditAPI();

// Run: node test/testAuditAPI.js
```

### Using Postman

1. **Create New Request**
   - Method: `POST`
   - URL: `http://localhost:3000/api/audit`

2. **Headers Tab**
   - Key: `Content-Type`
   - Value: `application/json`

3. **Body Tab**
   - Select: `raw`
   - Select: `JSON`
   - Paste:
   ```json
   {
     "fullName": "Postman Tester",
     "email": "postman@test.com",
     "phone": "+91 9250592505",
     "service": "branding",
     "message": "Testing from Postman"
   }
   ```

4. **Click Send**
5. **View Response** in the "Response" section

### Using Python

```python
# test_audit_api.py
import requests
import json
from datetime import datetime

def test_audit_api():
    url = "http://localhost:3000/api/audit"
    
    payload = {
        "fullName": "Python Tester",
        "email": "python@test.com",
        "phone": "+91 9250592505",
        "service": "web",
        "message": f"Testing at {datetime.now().isoformat()}"
    }
    
    headers = {
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.post(url, json=payload, headers=headers, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.json().get("success"):
            print("✅ Email sent successfully!")
        else:
            print("❌ Email failed to send")
            
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_audit_api()

# Run: python test_audit_api.py
```

---

## 4️⃣ Backend API Code Structure

### File: `app/api/audit/route.js`

```javascript
// ============================================
// EMAIL API ROUTE - app/api/audit/route.js
// ============================================

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// 1. ENVIRONMENT VARIABLES
const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
}

// 2. NODEMAILER TRANSPORTER
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 5000,
  socketTimeout: 5000,
});

// 3. VERIFY TRANSPORTER
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Connection Ready');
  }
});

// 4. HELPER FUNCTIONS
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateEmailHTML(formData) {
  const { fullName, email, phone, service, message } = formData;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: white; padding: 30px; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 3px solid #0066cc; padding-bottom: 10px;">
          🎯 New Free Audit Request Received
        </h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #0066cc;">Full Name:</strong>
          <p style="margin: 5px 0 15px 0; color: #555;">${escapeHtml(fullName)}</p>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #0066cc;">Email Address:</strong>
          <p style="margin: 5px 0 15px 0; color: #555;">
            <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
          </p>
        </div>

        ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Phone Number:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">
              <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>
            </p>
          </div>
        ` : ''}

        ${service ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Interested In:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">${escapeHtml(service)}</p>
          </div>
        ` : ''}

        <div style="margin-bottom: 15px;">
          <strong style="color: #0066cc;">Project Details:</strong>
          <p style="margin: 5px 0 15px 0; color: #555; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

        <div style="background: #f0f7ff; padding: 15px; border-radius: 5px;">
          <p style="margin: 0; color: #666; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
        </div>
      </div>
    </div>
  `;
}

// 5. POST HANDLER
export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email
    const htmlContent = generateEmailHTML({ fullName, email, phone, service, message });
    
    const mailOptions = {
      from: `VMC Media Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Free Audit Request from ${fullName}`,
      html: htmlContent,
      text: `${fullName} requested an audit. Email: ${email}. Message: ${message}`,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);

    console.log('Email sent:', result.messageId);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        messageId: result.messageId,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// 6. OPTIONS HANDLER (CORS)
export async function OPTIONS(request) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
```

---

## 5️⃣ Extending the API

### Example: Send Confirmation Email to User

```javascript
// Enhancement: Auto-reply to user
async function sendConfirmationEmail(userEmail, userName) {
  const mailOptions = {
    from: `VMC Media Website <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: "We've Received Your Audit Request!",
    html: `
      <h2>Hi ${escapeHtml(userName)},</h2>
      <p>Thank you for requesting a free audit from VMC Media!</p>
      <p>We've received your submission and will review it shortly.</p>
      <p>Our team will contact you within 24 business hours.</p>
      <br>
      <p>Best regards,<br>VMC Media Team</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

// Usage in POST handler:
// await sendConfirmationEmail(email, fullName);
```

### Example: Add Email Notifications to Multiple Recipients

```javascript
// Send to multiple team members
const recipients = [
  process.env.EMAIL_USER,
  process.env.EMAIL_SECONDARY_USER, // Additional email
];

mailOptions.to = recipients.join(',');
```

### Example: Add Database Logging

```javascript
// Log submission to database
import { db } from '@/lib/db';

export async function POST(request) {
  // ... existing code ...

  // After sending email
  await db.auditRequest.create({
    fullName,
    email,
    phone,
    service,
    message,
    submittedAt: new Date(),
    status: 'pending',
  });
}
```

---

## 📞 Quick Reference

| Feature | Location | Status |
|---------|----------|--------|
| API Route | `app/api/audit/route.js` | ✅ Implemented |
| Frontend Form | `src/pages/Contact.tsx` | ✅ Implemented |
| Environment Setup | `.env.local` | ⏳ User Setup |
| Documentation | `GODADDY_EMAIL_SETUP.md` | ✅ Complete |
| Testing | `test/` (user creates) | ⏳ User Test |

---

**Status**: 🟢 Complete and Production-Ready  
**Last Updated**: January 14, 2026
