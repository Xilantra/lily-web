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
      // downloadLocal: true,
      // https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
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
        icon: `src/assets/apple-icon.svg`,
        // icons: [
        //   {
        //     src: "src/assets/favicon.svg",
        //     sizes: "48x48",
        //     type: "image/svg+xml",
        //   },
        //   {
        //     src: "src/assets/apple-icon.svg",
        //     sizes: "500x500",
        //     type: "image/svg+xml",
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-16J36EX1C8", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
