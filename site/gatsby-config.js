module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-events",
      options: {
        contentPath: "events", // folder source of data
        basePath: "/events" // url in browser
      }
    }
  ]
};
