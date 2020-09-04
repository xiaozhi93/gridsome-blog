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
    const [{ data: userData }, { data: followersData }, { data: followingData }, { data: repoData }] = await Promise.all(axiosQuerstList)
    const userCollection = addCollection('User')
    const followersCollection = addCollection('Followers')
    const followingCollection = addCollection('Following')
    const reposCollection = addCollection('repo')
    userCollection.addNode(userData)
    followersCollection.addNode(followersData)
    followingCollection.addNode(followingData)
    reposCollection.addNode(repoData)
    // (res2.data || []).forEach(item => {
    //   followersCollection.addNode(item)
    // })
    // (res3.data || []).forEach(item => {
    //   followingCollection.addNode(item)
    // })
    // (res4.data || []).forEach(item => {
    //   reposCollection.addNode(item)
    // })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
