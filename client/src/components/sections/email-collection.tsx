import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useModal } from "@/contexts/modal-context";

const emailSchema = z.object({
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function EmailCollection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { openConsultationModal } = useModal();
  const { toast } = useToast();

  const form = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: EmailForm) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      toast({
        title: "구독 완료!",
        description: "감사합니다. 곧 유용한 정보를 이메일로 보내드리겠습니다.",
      });
    },
    onError: (error: any) => {
      const message = error.message || "구독 처리 중 오류가 발생했습니다.";
      toast({
        title: "구독 실패",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EmailForm) => {
    subscribeMutation.mutate(data);
  };

  if (showSuccess) {
    return (
      <section id="email-collection" className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <div className="mt-8 p-6 bg-green-500 rounded-xl text-white">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">구독 완료!</h3>
              <p className="text-lg">
                감사합니다. 곧 유용한 정보를 이메일로 보내드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="email-collection" className="py-20 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {" "}
            AI 자동화 상담을 받아보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            지금 이메일을 남기시면 퓨리온 AI 전문가가 상담을 도와드립니다
          </p>

          <form
            action="https://formspree.io/f/xpwrqnjk"
            method="POST"
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                required
                placeholder="이메일 주소를 입력하세요"
                className="px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all border-none"
              />
              <button
                type="button"
                onClick={openConsultationModal}
                className="bg-white text-brand-blue px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                무료 상담 신청
              </button>
            </div>

            <p className="text-blue-200 text-sm mt-4">
              남겨주신 이메일은 오직 상담 목적으로만 사용되며 안전하게
              보호됩니다.
            </p>
          </form>
        </div>
      </div>


    </section>
  );
}
