const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
    siteMetadata: {
        title: "Gatsby Default Starter",
        siteUrl: `https://enhancv.com`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: path.join(__dirname, `./src/data`),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `imgs`,
                path: path.join(__dirname, `./src/assets/img`),
            },
        },
        // This plugin exposes helper functions for processing
        // images with the NPM package “sharp”. It's used by
        // several other plugins.
        `gatsby-plugin-sharp`,
        // This plugin identifies file nodes that are images and
        // transforms these to create new “ImageSharp” nodes.
        // With them you can resize images and
        // generate responsive image thumbnails.
        `gatsby-transformer-sharp`,
        // This plugin transforms JSON file nodes.
        `gatsby-transformer-json`,

        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                precision: "8",
                includePaths: [
                    path.resolve(__dirname, "./node_modules"),
                    path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets"),
                    path.resolve(__dirname, "./node_modules/layout-grid/sass"),
                    path.resolve(__dirname, "./node_modules/slick-carousel/slick"),
                ],
                postCssPlugins: [
                    autoprefixer({
                        browsers: ["last 2 versions"],
                    }),
                ],
            },
        },

        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                exclude: ["/404"],
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map(edge => {
                        return {
                            url: site.siteMetadata.siteUrl + edge.node.path,
                            changefreq: `daily`,
                            priority: edge.node.path === "/successful-resumes/" ? 1 : 0.7,
                        };
                    }),
            },
        },
    ],
};
