import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {year} {profile.name}. Built with React.</span>
        <span className="footer__note">Designed &amp; developed from scratch — no templates.</span>
      </div>
    </footer>
  );
}
