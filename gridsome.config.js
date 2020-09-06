// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'WindflyBlog',
  titleTemplate: '%s - WindflyBlog',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://119.45.51.253:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'site', 'new'],
        singleTypes: [],
      }
    }
  ],
  templates: {
    StrapiPost: [  //首字母大写
      {
        name: 'PostDetail',
        path: '/post/:id',
        component: './src/templates/PostDetail.vue'
      }
    ]
  }
}
