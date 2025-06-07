import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Process from "@/components/sections/process";
import EmailCollection from "@/components/sections/email-collection";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function Landing() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Features />
      <Process />
      <EmailCollection />
      <Testimonials />
      <Footer />
    </div>
  );
}
