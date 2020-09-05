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
// access_token=21e7ff4de75b422c57211f4923a20ae09dad5540
module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const [{ data: userData }, { data: followersData }, { data: followingData }, { data: repoData }] = await Promise.all(axiosQuerstList)
    console.log(followersData.length, followingData.length, repoData.length)
    const userCollection = addCollection('User')
    const followersCollection = addCollection('Followers')
    const followingCollection = addCollection('Following')
    const reposCollection = addCollection('repo')
    userCollection.addNode(userData)
    followersData.forEach(item => {
      followersCollection.addNode(item)
    })
    followingData.forEach(item => {
      followingCollection.addNode(item)
    })
    repoData.forEach(item => {
      reposCollection.addNode(item)
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
