// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const axiosQuerstList = [
  axios('https://api.github.com/users/xiaozhi93'),
  axios('https://api.github.com/users/xiaozhi93/followers'),
  axios('https://api.github.com/users/xiaozhi93/following'),
  axios('https://api.github.com/users/xiaozhi93/repos')
]
module.exports = function (api) {
  // https://api.github.com/users/GitHub-Laziji
  // https://api.github.com/user?access_token=96066f7ef7920cfaeb083bb11ea0836ae2737174
  // https://api.github.com/users/GitHub-Laziji/repos?page=1&per_page=5
  // https://api.github.com/users/GitHub-Laziji/gists?page=1&per_page=5
  // https://api.github.com/users/GitHub-Laziji/followers?page=1&per_page=9
  // https://api.github.com/users/GitHub-Laziji/following?page=1&per_page=9
  // https://api.github.com/users/GitHub-Laziji/gists?page=1&per_page=1
  api.loadSource(async ({ addCollection }) => {
    const [res1, res2, res3, res4] = await Promise.all(axiosQuerstList)
    console.log(res1, '1111111')
    const userCollection = addCollection('User')
    const followersCollection = addCollection('Followers')
    const followingCollection = addCollection('Following')

    userCollection.addNode(res1.data)
    followersCollection.addNode(res2.data)
    followingCollection.addNode(res3.data)
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
