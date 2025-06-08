import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  } catch (error) {
    console.error('SendGrid API key validation failed:', error);
  }
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not configured');
    // Log the form data for manual follow-up
    console.log('Contact form submission (API key missing):', formData);
    throw new Error('Email service is not configured');
  }

  if (!process.env.SENDGRID_API_KEY.startsWith('SG.')) {
    console.error('Invalid SendGrid API key format. API key must start with "SG."');
    // Log the form data for manual follow-up
    console.log('Contact form submission (invalid API key):', formData);
    throw new Error('Invalid email service configuration');
  }

  const { name, email, company, phone, service, message } = formData;

  const serviceNames: Record<string, string> = {
    'content-automation': '콘텐츠 자동화',
    'web-app-dev': '웹앱 개발',
    'marketing': '마케팅 자동화',
    'data-analytics': '데이터 분석',
    'customer-support': '고객 지원',
    'security': '보안 솔루션',
    'custom': '맞춤형 상담'
  };

  const htmlContent = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>상담 신청서</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb; }
        .field-label { font-weight: 600; color: #374151; margin-bottom: 5px; display: block; }
        .field-value { color: #111827; }
        .message-box { background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; white-space: pre-wrap; }
        .footer { background: #f9fafb; padding: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>상담 신청서</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">퓨리온 AI 웹사이트에서 새로운 상담 요청이 접수되었습니다</p>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="field-label">이름</span>
                <div class="field-value">${name}</div>
            </div>
            
            ${company ? `
            <div class="field">
                <span class="field-label">회사명</span>
                <div class="field-value">${company}</div>
            </div>
            ` : ''}
            
            <div class="field">
                <span class="field-label">이메일</span>
                <div class="field-value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
            </div>
            
            ${phone ? `
            <div class="field">
                <span class="field-label">연락처</span>
                <div class="field-value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
            </div>
            ` : ''}
            
            ${service ? `
            <div class="field">
                <span class="field-label">관심 서비스</span>
                <div class="field-value">${serviceNames[service] || service}</div>
            </div>
            ` : ''}
            
            <div class="field">
                <span class="field-label">문의 내용</span>
                <div class="message-box">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>이 이메일은 퓨리온 AI 웹사이트의 상담 신청서를 통해 자동으로 발송되었습니다.</p>
            <p style="font-size: 12px; color: #9ca3af; margin-top: 10px;">발송 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
        </div>
    </div>
</body>
</html>`;

  const textContent = `
상담 신청서

이름: ${name}
이메일: ${email}
${company ? `회사명: ${company}\n` : ''}${phone ? `연락처: ${phone}\n` : ''}${service ? `관심 서비스: ${serviceNames[service] || service}\n` : ''}
문의 내용:
${message}

---
이 이메일은 퓨리온 AI 웹사이트의 상담 신청서를 통해 자동으로 발송되었습니다.
발송 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
  `.trim();

  const mailOptions = {
    to: 'manager@puritechlab.com',
    from: {
      email: 'noreply@purionlab.com', // Using verified domain
      name: '퓨리온 AI'
    },
    replyTo: email,
    subject: `[상담 신청] ${name}님의 요청`,
    text: `
🧾 [상담 신청서]

📌 이름: ${name}
📧 이메일: ${email}
🏢 회사명: ${company || '미입력'}
📱 연락처: ${phone || '미입력'}
🔍 관심 서비스: ${service || '미선택'}

💬 문의 내용:
${message}
    `,
    html: htmlContent,
  };

  try {
    await sgMail.send(mailOptions);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    throw error;
  }
}