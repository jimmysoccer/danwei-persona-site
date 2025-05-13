import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 bg-white/95 text-black backdrop-blur-sm shadow-sm py-3`}
    >
      <div className='container max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center'>
        <h1 className='text-xl md:text-2xl font-bold'>Danwei Yao</h1>
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            <li>
              <a
                href='#publications'
                className={`transition-colors ${
                  activeSection === 'publications'
                    ? 'text-blue-500'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href='#mentoring'
                className={`transition-colors ${
                  activeSection === 'mentoring'
                    ? 'text-blue-500'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Mentoring
              </a>
            </li>
            <li>
              <a
                href='#honors'
                className={`transition-colors ${
                  activeSection === 'honors'
                    ? 'text-blue-500'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Honors
              </a>
            </li>
          </ul>
        </nav>
        <div className='block md:hidden'>
          <button
            className='text-gray-700 hover:text-gray-900'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-10 my-2 right-0 h-full w-32 bg-white shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'white', zIndex: '11' }}
      >
        <button
          className='absolute top-4 left-6 text-gray-700 hover:text-gray-900'
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </button>
        <ul className='my-10 space-y-4 px-6 bg-white'>
          <li>
            <a
              href='#publications'
              className={`block transition-colors ${
                activeSection === 'publications'
                  ? 'text-blue-500'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false); // Close sidebar
              }}
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href='#mentoring'
              className={`block transition-colors ${
                activeSection === 'mentoring'
                  ? 'text-blue-500'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false); // Close sidebar
              }}
            >
              Mentoring
            </a>
          </li>
          <li>
            <a
              href='#honors'
              className={`block transition-colors ${
                activeSection === 'honors'
                  ? 'text-blue-500'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => {
                setIsMobileMenuOpen(false); // Close sidebar
              }}
            >
              Honors
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
