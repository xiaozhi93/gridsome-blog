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
  api.loadSource(async ({ addCollection }) => {
    const [res1, res2, res3, res4] = await Promise.all(axiosQuerstList)
    const userCollection = addCollection('User')
    const followersCollection = addCollection('Followers')
    const followingCollection = addCollection('Following')
    const reposCollection = addCollection('repo')
    userCollection.addNode(res1.data)
    followersCollection.addNode(res2.data)
    followingCollection.addNode(res3.data)
    reposCollection.addNode(res4.data)
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
