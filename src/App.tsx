import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Photography from './pages/Photography';
import NotFound from './pages/NotFound';
function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = pathname.startsWith('/photography') ? 'Where the Light Found Me | Danwei Yao' : pathname.startsWith('/about') ? 'About | Danwei Yao' : 'Danwei Yao | AI for Life Science';
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <BrowserRouter><PageEffects/><Routes><Route path="/" element={<Index/>}/><Route path="/about" element={<About/>}/><Route path="/photography" element={<Photography/>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter>;
}
