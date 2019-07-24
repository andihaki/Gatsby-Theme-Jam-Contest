module.exports = ({ contentPath = "data", basePath = "/" }) => (
  console.log({ contentPath, basePath }),
  {
    plugins: [
      "gatsby-theme-ui",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath
        }
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `Event`
        }
      }
    ]
  }
);
