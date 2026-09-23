import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const zh = language === 'zh';
  return <header className="site-header">
    <Link className="wordmark" to="/" onClick={() => setOpen(false)}>Danwei Yao<span className="brand-dot">.</span></Link>
    <div className="header-actions">
      <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label={zh ? '主导航' : 'Main navigation'}>
        <Link to="/about" aria-current={pathname.startsWith('/about') ? 'page' : undefined} onClick={() => setOpen(false)}>{zh ? '关于' : 'About'}</Link>
        <a href="/#research" onClick={() => setOpen(false)}>{zh ? '研究' : 'Research'}</a>
        <a href="/#work" onClick={() => setOpen(false)}>{zh ? '项目' : 'Work'}</a>
        <Link to="/photography" aria-current={pathname.startsWith('/photography') ? 'page' : undefined} onClick={() => setOpen(false)}>{zh ? '摄影' : 'Photography'}</Link>
        <a href="mailto:dyao8@emory.edu" onClick={() => setOpen(false)}>{zh ? '邮件' : 'Email'} <ArrowUpRight size={14}/></a>
      </nav>
      <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={zh ? 'Switch to English' : '切换至中文'}>{zh ? 'EN' : '中文'}</button>
      <button className="menu-toggle" aria-label={open ? (zh ? '关闭导航' : 'Close navigation') : (zh ? '打开导航' : 'Open navigation')} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    </div>
  </header>;
}
