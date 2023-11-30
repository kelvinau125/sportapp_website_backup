import { createI18n } from "vue-i18n"
import EN from './src/locale/en.json'
import ZH from './src/locale/zh.json'

function loadLocalMessages(){
    const locales = [{EN: EN}, {ZH:ZH}]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale : 'EN',
    fallbackLocale: 'EN',
    messages: loadLocalMessages()
})