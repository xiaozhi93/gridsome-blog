const axios = require('axios')
const axiosQuerstList = [
  axios('https://api.github.com/users/xiaozhi93'),
  axios('https://api.github.com/users/xiaozhi93/followers'),
  axios('https://api.github.com/users/xiaozhi93/following'),
  axios('https://api.github.com/users/xiaozhi93/repos')
]

Promise.all(axiosQuerstList).then(res => {
  const [{ data: userData }, { data: followersData }, { data: followingData }, { data: repoData }] = res
  console.log(userData, repoData)
}).catch(e => {
  console.log(222)
})
// function async fetch() {
//   const [{ data: userData }, { data: followersData }, { data: followingData }, { data: repoData }] = await Promise.all(axiosQuerstList)
//   console.log(userData, followersData, followingData, repoData )
// }
// fetch()

