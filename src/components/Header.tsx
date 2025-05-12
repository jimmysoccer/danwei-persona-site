
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          Shan Chen (陈山)
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#publications" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Publications
              </a>
            </li>
            <li>
              <a 
                href="#mentoring" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Mentoring
              </a>
            </li>
            <li>
              <a 
                href="#honors" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Honors
              </a>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden">
          <button className="text-gray-700 hover:text-gray-900">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
