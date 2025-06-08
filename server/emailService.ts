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
    throw new Error('Email service is not configured');
  }

  if (!process.env.SENDGRID_API_KEY.startsWith('SG.')) {
    console.error('Invalid SendGrid API key format. API key must start with "SG."');
    throw new Error('Invalid email service configuration');
  }

  const { name, email, company, phone, service, message } = formData;

  // Create HTML email content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        상담 신청서
      </h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">이름:</td>
            <td style="padding: 8px 0; color: #111827;">${name}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">회사명:</td>
            <td style="padding: 8px 0; color: #111827;">${company}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">이메일:</td>
            <td style="padding: 8px 0; color: #111827;">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">연락처:</td>
            <td style="padding: 8px 0; color: #111827;">${phone}</td>
          </tr>
          ` : ''}
          ${service ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">관심 서비스:</td>
            <td style="padding: 8px 0; color: #111827;">${service}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #374151; margin-bottom: 10px;">문의 내용:</h3>
        <div style="background-color: #ffffff; border: 1px solid #e5e7eb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
        <p>이 이메일은 퓨리온 AI 웹사이트의 상담 신청서를 통해 자동으로 발송되었습니다.</p>
        <p>발송 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
      </div>
    </div>
  `;

  // Create plain text version
  const textContent = `
상담 신청서

이름: ${name}
${company ? `회사명: ${company}\n` : ''}이메일: ${email}
${phone ? `연락처: ${phone}\n` : ''}${service ? `관심 서비스: ${service}\n` : ''}
문의 내용:
${message}

---
이 이메일은 퓨리온 AI 웹사이트의 상담 신청서를 통해 자동으로 발송되었습니다.
발송 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
  `;

  const mailOptions = {
    to: 'manager@puritechlab.com',
    from: {
      email: 'noreply@puritechlab.com',
      name: '퓨리온 AI'
    },
    replyTo: email,
    subject: `[상담 신청] ${name}님의 요청이 도착했습니다`,
    text: textContent,
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