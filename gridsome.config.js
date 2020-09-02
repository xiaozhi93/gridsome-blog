// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'WindflyBlog',
  titleTemplate: '%s - WindflyBlog',
  plugins: [
    // {
    //   use: `gridsome-source-github-api`,
    //   options: {
    //     // token: required by the GitHub API
    //     token: someString,

    //     // GraphQLquery: defaults to a search query
    //     graphQLQuery: anotherString,

    //     // variables: defaults to variables needed for a search query
    //     variables: someObject
    //   }
    // },
    // {
    //   use: '@gridsome/source-strapi',
    //   options: {
    //     apiURL: 'http://119.45.51.253:1337',
    //     queryLimit: 1000, // Defaults to 100
    //     contentTypes: ['post', 'news'],
    //     singleTypes: [],
    //     // Possibility to login with a Strapi user,
    //     // when content types are not publicly available (optional).
    //     loginData: {
    //       identifier: '',
    //       password: ''
    //     }
    //   }
    // }
  ]
}
