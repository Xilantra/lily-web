require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided. Received: " +
      JSON.stringify(contentfulConfig)
  );
}

// starter config
module.exports = {
  siteMetadata: {
    title: "Love, Lily Eatery",
    description:
      "Indulge in handcrafted artisanal pastries, bread, and coffee at Love, Lily Eatery. Visit us today!",
    // keywords: ['keyword1', 'keyword2', 'keyword3'],
  },
  plugins: [
    {
      resolve: `gatsby-theme-landing-page`,
      options: contentfulConfig,
      downloadLocal: true,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Love, Lily Eatery`,
        short_name: `Lily Eatery`,
        start_url: `/today`,
        background_color: `#fbfbfb`,
        theme_color: `#fbfbfb`,
        display: `fullscreen`,
        icon: `src/assets/lovelilyeatery-sm.svg`,
      },
    },
  ],
};
