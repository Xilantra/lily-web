import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.header}>
        <Link to="/">Love, Lily Eatery</Link>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <div>
          <Link to="/"> © {new Date().getFullYear()} Love, Lily Eatery</Link>  &middot;{` `}
          <a href="https://www.facebook.com/lovelilyeatery" target="_blank" rel="noreferrer">Facebook</a>  &middot;{` `}
          <a href="https://www.instagram.com/lovelilyeatery" target="_blank" rel="noreferrer">Instagram</a> &middot;{` `}
          <a href="https://wa.me/60123456789" target="_blank" rel="noreferrer">WhatsApp</a> &middot;{` `}
          <a href="https://goo.gl/maps/VdBRyKgmoEUwwzK17" target="_blank" rel="noreferrer">Store</a>
        </div>
        <a href="https://afiq.me">Digitally baked by Afiq</a>
        {/* <Link to="/demo">Demo</Link> */}
      </footer>
    </div>
  );
}
