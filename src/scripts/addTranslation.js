// scripts/addTranslation.js
const fs = require('fs')
const path = require('path')

const translations = {
  ar: {
    我已阅读并同意: 'لقد قرأت وأوافق على'
  },
  de: {
    我已阅读并同意: 'Ich habe gelesen und stimme zu'
  },
  en: {
    我已阅读并同意: 'I have read and agree'
  },
  es: {
    我已阅读并同意: 'He leído y acepto'
  },
  fr: {
    我已阅读并同意: "J'ai lu et j'accepte"
  },
  it: {
    我已阅读并同意: 'Ho letto e accetto'
  },
  ja: {
    我已阅读并同意: '読んで同意しました'
  },
  pt: {
    我已阅读并同意: 'Li e concordo'
  },
  tr: {
    我已阅读并同意: 'Okudum ve kabul ediyorum'
  },
  vi: {
    我已阅读并同意: 'Tôi đã đọc và đồng ý'
  },
  zh: {
    我已阅读并同意: '我已阅读并同意'
  }
}

const LOCALES_DIR = path.join(__dirname, '../i18n/locales')

function addTranslation() {
  fs.readdirSync(LOCALES_DIR).forEach((file) => {
    if (file.endsWith('.json')) {
      const lang = file.replace('.json', '')
      const filePath = path.join(LOCALES_DIR, file)

      try {
        const content = fs.readFileSync(filePath, 'utf8')
        const existingTranslations = JSON.parse(content)
        const newTranslations = translations[lang] || {}

        // 只添加不存在的翻译
        const updatedTranslations = {
          ...existingTranslations // 保持现有翻译在前
        }

        // 只添加不存在的新翻译
        Object.entries(newTranslations).forEach(([key, value]) => {
          if (!(key in existingTranslations)) {
            updatedTranslations[key] = value
          }
        })

        fs.writeFileSync(filePath, JSON.stringify(updatedTranslations, null, 2) + '\n', 'utf8')

        console.log(`✅ Successfully updated ${file}`)
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error)
      }
    }
  })
}

addTranslation()
