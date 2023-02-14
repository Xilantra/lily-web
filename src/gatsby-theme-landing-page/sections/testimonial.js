import React from "react";
import * as styles from "./testimonial.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  MarkdownText,
  getText,
  // Section,
  Heading,
} from "gatsby-theme-landing-page";

export default function Testimonial({ heading, secondaryHeading, content }) {
  return (
    <>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          {content.map((item) => (
            <TestimonialContent {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

function TestimonialContent({ primaryText, secondaryText, avatar }) {
  if (!primaryText) return;

  return (
    <div className={styles.testimonial}>
      <MarkdownText as="blockquote" className={styles.quote} {...primaryText} />
      <div className={styles.author}>
        {avatar && (
          <div className={styles.avatar}>
            <GatsbyImage
              placeholder="blurred"
              image={getImage(avatar)}
              alt={avatar.title || getText(primaryText)}
            />
          </div>
        )}
        <MarkdownText
          as="cite"
          className={styles.authorInfo}
          {...secondaryText}
        />
      </div>
    </div>
  );
}
