import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import ContentAutomation from "@/pages/content-automation";
import WebAppDev from "@/pages/web-app-dev";
import Marketing from "@/pages/marketing";
import DataTools from "@/pages/data-tools";
import Support from "@/pages/support";
import Security from "@/pages/security";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/content-automation" component={ContentAutomation} />
      <Route path="/web-app-dev" component={WebAppDev} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/data-tools" component={DataTools} />
      <Route path="/support" component={Support} />
      <Route path="/security" component={Security} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
            <p className="text-gray-600">요청하신 페이지가 존재하지 않습니다.</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
