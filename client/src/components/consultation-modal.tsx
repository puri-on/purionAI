import { useState, useEffect } from "react";
import { X, Rocket, Building, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  // Handle ESC key press and body scroll prevention
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scrolling when modal is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = originalOverflow;
      };
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "상담 신청 완료",
        description: "상담 신청이 접수되었습니다. 곧 연락드리겠습니다.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
      });
      onClose();
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "오류 발생",
        description: "상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "필수 항목 누락",
        description: "이름, 이메일, 문의 내용을 모두 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="모달 닫기"
      />
      
      {/* Modal Container */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] mx-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-full"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                <h2 id="modal-title" className="text-2xl font-bold">무료 상담 신청</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="mt-2 opacity-90">
              AI 자동화 솔루션에 대해 전문가와 상담받아보세요
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    이름 *
                  </span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    이메일 *
                  </span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@company.com"
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    회사명
                  </span>
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="(주)회사명"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    연락처
                  </span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-1234-5678"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                관심 서비스
              </label>
              <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="서비스를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="content-automation">콘텐츠 자동화</SelectItem>
                  <SelectItem value="web-app-dev">웹앱 개발</SelectItem>
                  <SelectItem value="marketing">마케팅 자동화</SelectItem>
                  <SelectItem value="data-analytics">데이터 분석</SelectItem>
                  <SelectItem value="customer-support">고객 지원</SelectItem>
                  <SelectItem value="security">보안 솔루션</SelectItem>
                  <SelectItem value="custom">맞춤형 상담</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                문의 내용 *
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="궁금한 점이나 요청사항을 자유롭게 입력해주세요. 예: 견적 요청, 기능 문의 등"
                className="w-full"
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                취소
              </Button>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {contactMutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    전송 중...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    상담 신청하기
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}