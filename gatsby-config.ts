import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `landing-abstract`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: false,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, "gatsby-plugin-tsconfig-paths" ]
};

export default config;
