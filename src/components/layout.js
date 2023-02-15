import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";
import { HomeIcon, TodaysIcon, ContactIcon, LogoFull } from "./svg-icons";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.wrapper}>
        <div className={styles.header}>
          <Link
            to="/"
            activeClassName={styles.active}
            className={styles.navlink}
          >
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
        </div>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <div className={[styles.footerText, styles.footerItem].join(" ")}>
          <div>© {new Date().getFullYear()} Love, Lily Eatery</div>
          <div> (AS0453954-U)</div>
          {/* <a href="https://www.facebook.com/lovelilyeatery" target="_blank" rel="noreferrer">Facebook</a>  &middot;{` `}
          <a href="https://www.instagram.com/lovelilyeatery" target="_blank" rel="noreferrer">Instagram</a> &middot;{` `}
          <a href="https://wa.link/z3imh1" target="_blank" rel="noreferrer">WhatsApp</a> &middot;{` `}
          <a href="https://goo.gl/maps/VdBRyKgmoEUwwzK17" target="_blank" rel="noreferrer">Store</a> */}
        </div>
        <div className={[styles.logo, styles.footerItem].join(" ")}>
          <Link to="/">
            <LogoFull />
          </Link>
        </div>
        <div className={[styles.watermark, styles.footerItem].join(" ")}>
          <a href="https://afiq.me">Digitally baked by Afiq</a>
        </div>
      </footer>
    </div>
  );
}
