import { useState } from "react";
import { Menu, X } from "lucide-react";
import ConsultationModal from "@/components/consultation-modal";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu when opening modal
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-brand-blue font-inter">
              퓨리온 AI
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-brand-blue transition-colors">
                서비스
              </a>
              <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">
                연락처
              </a>
              <button 
                onClick={openModal}
                className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors"
              >
                무료 상담
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a 
                href="#features" 
                className="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                서비스
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                연락처
              </a>
              <button 
                onClick={openModal}
                className="block w-full text-left px-3 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-dark transition-colors"
              >
                무료 상담
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
}
