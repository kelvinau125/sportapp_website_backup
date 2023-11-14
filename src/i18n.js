import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import ZH from './locale/zh.json'

function loadLocalMessages () {
  const locales = [{ EN: EN }, { ZH: ZH }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}

export default createI18n({
  locale: 'ZH',
  fallbackLocale: 'EN',
  messages: loadLocalMessages()
})
