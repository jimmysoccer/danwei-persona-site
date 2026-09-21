import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="site-footer"><span>© {new Date().getFullYear()} Danwei Yao</span><span>Science, with curiosity. Life, with attention.</span><Link to="/photography">Here, again. ↗</Link></footer>;
}
