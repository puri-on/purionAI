import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const emailSchema = z.object({
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function EmailCollection() {
  const [showSuccess, setShowSuccess] = useState(false);
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
              <p className="text-lg">감사합니다. 곧 유용한 정보를 이메일로 보내드리겠습니다.</p>
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
            AI 자동화 인사이트를 받아보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            최신 AI 트렌드와 자동화 기술 정보를 이메일로 전달해드립니다
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="이메일 주소를 입력하세요"
                          className="px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-blue-100 text-left" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={subscribeMutation.isPending}
                  className="bg-white text-brand-blue px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribeMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      처리중...
                    </>
                  ) : (
                    "구독하기"
                  )}
                </Button>
              </div>
              
              <p className="text-blue-200 text-sm mt-4">
                언제든지 구독을 취소할 수 있습니다. 개인정보는 안전하게 보호됩니다.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
