import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Photography from './pages/Photography';
import NotFound from './pages/NotFound';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
function PageEffects() {
  const { pathname, hash } = useLocation();
  const { language } = useLanguage();
  useEffect(() => {
    document.title = pathname.startsWith('/photography')
      ? (language === 'zh' ? '光曾照见我 | Danwei Yao' : 'Where the Light Found Me | Danwei Yao')
      : pathname.startsWith('/about')
        ? (language === 'zh' ? '关于我 | Danwei Yao' : 'About | Danwei Yao')
        : (language === 'zh' ? 'Danwei Yao | 生命科学人工智能' : 'Danwei Yao | AI for Life Science');
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, language]);
  return null;
}
export default function App() {
  return <LanguageProvider><BrowserRouter><PageEffects/><Routes><Route path="/" element={<Index/>}/><Route path="/about" element={<About/>}/><Route path="/photography" element={<Photography/>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter></LanguageProvider>;
}
