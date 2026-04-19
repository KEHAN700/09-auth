import Link from 'next/link';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Bogdan Salii</p>
          <p>
            Contact us:
            <Link href="mailto:bogdan28162@gmail.com">
              {' '}
              bogdan28162@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
