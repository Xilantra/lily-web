import React from "react";
import * as styles from "./copy.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  MarkdownText,
  getText,
  Section,
  Heading,
  Container,
} from "gatsby-theme-landing-page";

export default function Copy({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <Container className={styles.container}>
        {content.map((item) => {
          return <CopyContent key={item.id} {...item} />;
        })}
      </Container>
    </Section>
  );
}

function CopyContent({ primaryText, secondaryText, image }) {
  return (
    <>
      <GatsbyImage
        placeholder="blurred"
        image={getImage(image)}
        alt={image.title || getText(primaryText)}
      />
      <MarkdownText {...primaryText} />
      <AsideText {...secondaryText} />
    </>
  );
}

function AsideText(props) {
  return <MarkdownText className={styles.asideText} {...props} />;
}
