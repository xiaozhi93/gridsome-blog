// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import util from '~/utils/util'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '~/assets/index.scss'
import filters from '~/filters'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.prototype.$util = util
  Vue.use(ElementUI)
  Vue.use(filters)
}
