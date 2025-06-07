import { users, emailSubscriptions, type User, type InsertUser, type EmailSubscription, type InsertEmailSubscription } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createEmailSubscription(subscription: InsertEmailSubscription): Promise<EmailSubscription>;
  getEmailSubscription(email: string): Promise<EmailSubscription | undefined>;
  getAllEmailSubscriptions(): Promise<EmailSubscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private emailSubscriptions: Map<number, EmailSubscription>;
  private emailsByAddress: Map<string, EmailSubscription>;
  private currentUserId: number;
  private currentEmailId: number;

  constructor() {
    this.users = new Map();
    this.emailSubscriptions = new Map();
    this.emailsByAddress = new Map();
    this.currentUserId = 1;
    this.currentEmailId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEmailSubscription(insertSubscription: InsertEmailSubscription): Promise<EmailSubscription> {
    // Check if email already exists
    const existing = this.emailsByAddress.get(insertSubscription.email);
    if (existing) {
      throw new Error("이미 구독된 이메일 주소입니다.");
    }

    const id = this.currentEmailId++;
    const subscription: EmailSubscription = {
      id,
      email: insertSubscription.email,
      subscribedAt: new Date(),
      isActive: true,
    };
    
    this.emailSubscriptions.set(id, subscription);
    this.emailsByAddress.set(subscription.email, subscription);
    return subscription;
  }

  async getEmailSubscription(email: string): Promise<EmailSubscription | undefined> {
    return this.emailsByAddress.get(email);
  }

  async getAllEmailSubscriptions(): Promise<EmailSubscription[]> {
    return Array.from(this.emailSubscriptions.values());
  }
}

export const storage = new MemStorage();
