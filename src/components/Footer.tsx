import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
export default function Footer() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  return <footer className="site-footer"><span>© {new Date().getFullYear()} Danwei Yao</span><span>{zh ? '以好奇探索科学，以用心感受生活。' : 'Science, with curiosity. Life, with attention.'}</span><Link to="/photography">{zh ? '再见此刻。↗' : 'Here, again. ↗'}</Link></footer>;
}
