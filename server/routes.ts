import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriptionSchema } from "@shared/schema";
import { sendContactFormEmail } from "./emailService";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertEmailSubscriptionSchema.parse(req.body);
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(validatedData.email)) {
        return res.status(400).json({ 
          message: "올바른 이메일 주소를 입력해주세요." 
        });
      }

      const subscription = await storage.createEmailSubscription(validatedData);
      
      res.status(201).json({
        message: "구독이 완료되었습니다.",
        subscription: {
          id: subscription.id,
          email: subscription.email,
          subscribedAt: subscription.subscribedAt
        }
      });
    } catch (error: any) {
      if (error.message === "이미 구독된 이메일 주소입니다.") {
        return res.status(409).json({ message: error.message });
      }
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "잘못된 입력 데이터입니다.",
          errors: error.errors 
        });
      }
      
      console.error("Email subscription error:", error);
      res.status(500).json({ 
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." 
      });
    }
  });

  // Get all subscriptions (for admin purposes)
  app.get("/api/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllEmailSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      console.error("Get subscriptions error:", error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  });

  /*
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, company, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: '필수 항목이 누락되었습니다.' });
    }

    try {
      await sendContactFormEmail({ name, email, company, phone, service, message });
      
      return res.status(200).json({ message: '상담 신청이 접수되었습니다. 곧 연락드리겠습니다.' });
    } catch (error: any) {
      console.error('Contact form error:', error);
      
      if (error.message === 'Email service is not configured' || error.message === 'Invalid email service configuration') {
        return res.status(500).json({ 
          message: '이메일 서비스가 설정되지 않았습니다. 관리자에게 문의해주세요.' 
        });
      }
      
      return res.status(500).json({ message: '메일 전송에 실패했습니다. 관리자에게 문의해주세요.' });
    }
  });
  */

  const httpServer = createServer(app);
  return httpServer;
}
