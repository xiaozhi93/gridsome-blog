// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // https://api.github.com/users/GitHub-Laziji
  // https://api.github.com/user?access_token=96066f7ef7920cfaeb083bb11ea0836ae2737174
  // https://api.github.com/users/GitHub-Laziji/repos?page=1&per_page=5
  // https://api.github.com/users/GitHub-Laziji/gists?page=1&per_page=5
  // https://api.github.com/users/GitHub-Laziji/followers?page=1&per_page=9
  // https://api.github.com/users/GitHub-Laziji/following?page=1&per_page=9
  // https://api.github.com/users/GitHub-Laziji/gists?page=1&per_page=1
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
