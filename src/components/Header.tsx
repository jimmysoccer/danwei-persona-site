
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'publications', label: 'Publications' },
    { id: 'mentoring', label: 'Mentoring' },
    { id: 'honors', label: 'Honors' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 transition-all duration-300 bg-white/95 text-black backdrop-blur-sm shadow-sm py-3"
    >
      <div className="container max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Danwei Yao</h1>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`transition-colors ${
                    activeSection === link.id
                      ? 'text-blue-500'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation drawer */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button 
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[30vh] rounded-t-xl">
              <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">Navigation</p>
                  <DrawerClose asChild>
                    <button 
                      className="rounded-full p-1 hover:bg-gray-100" 
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </button>
                  </DrawerClose>
                </div>
                <nav className="flex-grow">
                  <ul className="space-y-5 my-4">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className={`block text-lg py-1 px-2 rounded-md transition-colors ${
                            activeSection === link.id
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
