
import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export function formatTime(date, format) {
    return dayjs(date).format(format || 'YYYY-MM-DD hh:mm:ss')
}

export function formatMarkdown(content) {
    return md.render(content || '')
}

export default {
    install(Vue) {
        Vue.filter('formatTime', formatTime)
        Vue.filter('formatMarkdown', formatMarkdown)
        Vue.prototype.$formatMarkDown = formatMarkdown
    }
}