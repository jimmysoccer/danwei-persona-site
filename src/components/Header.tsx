import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <header className="site-header">
    <Link className="wordmark" to="/" onClick={() => setOpen(false)}>Danwei Yao<span className="brand-dot">.</span></Link>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      <Link to="/about" aria-current={pathname.startsWith('/about') ? 'page' : undefined} onClick={() => setOpen(false)}>About</Link>
      <a href="/#research" onClick={() => setOpen(false)}>Research</a>
      <a href="/#work" onClick={() => setOpen(false)}>Work</a>
      <Link to="/photography" aria-current={pathname.startsWith('/photography') ? 'page' : undefined} onClick={() => setOpen(false)}>Photography</Link>
      <a href="mailto:dyao8@emory.edu" onClick={() => setOpen(false)}>Email <ArrowUpRight size={14}/></a>
    </nav>
  </header>;
}
