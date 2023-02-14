import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.223 11.641l-.223.22-.224-.22a2.224 2.224 0 00-3.125 0 2.13 2.13 0 000 3.07L12 18l3.349-3.289a2.13 2.13 0 000-3.07 2.225 2.225 0 00-3.126 0z" />
      <path d="M21.707 11.293l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z" />
    </svg>
  );
}

function TodaysIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.648 14.711L11.997 18l3.35-3.289a2.129 2.129 0 000-3.069 2.225 2.225 0 00-3.126 0l-.224.219-.224-.219a2.224 2.224 0 00-3.125 0 2.129 2.129 0 000 3.069z" />
      <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.279 8.833L12 9.112l-.279-.279a2.745 2.745 0 00-3.906 0 2.745 2.745 0 000 3.907L12 16.926l4.186-4.186a2.745 2.745 0 000-3.907 2.746 2.746 0 00-3.907 0z" />
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    </svg>
  );
}

function FbIcons() {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
    </svg>
  );
}

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.header}>
        <Link to="/" activeClassName={styles.active} className={styles.navlink}>
          <HomeIcon /> <span>Home</span>
        </Link>
        <Link
          to="/today"
          activeClassName={styles.active}
          className={styles.navlink}
        >
          <TodaysIcon /> <span>Today</span>
        </Link>
        <Link to="#contact" className={styles.navlink}>
          <ContactIcon /> <span>Contact Us</span>
        </Link>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerText}>
          <span>© {new Date().getFullYear()} Love, Lily Eatery</span>
          {/* <a href="https://www.facebook.com/lovelilyeatery" target="_blank" rel="noreferrer">
            <FbIcons/>
            Facebook</a>  &middot;{` `}
          <a href="https://www.instagram.com/lovelilyeatery" target="_blank" rel="noreferrer">Instagram</a> &middot;{` `}
          <a href="https://wa.link/z3imh1" target="_blank" rel="noreferrer">WhatsApp</a> &middot;{` `}
          <a href="https://goo.gl/maps/VdBRyKgmoEUwwzK17" target="_blank" rel="noreferrer">Store</a> */}
        </div>
        <a href="https://afiq.me">Digitally baked by Afiq</a>
        {/* <Link to="/demo">Demo</Link> */}
      </footer>
    </div>
  );
}
