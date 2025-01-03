// scripts/addTranslation.js
const fs = require('fs')
const path = require('path')

const translations = {
  ar: {
    '贷款人：': 'المُقرض:'
  },
  de: {
    '贷款人：': 'Darlehensgeber:'
  },
  en: {
    '贷款人：': 'Lender:'
  },
  es: {
    '贷款人：': 'Prestamista:'
  },
  fr: {
    '贷款人：': 'Prêteur:'
  },
  it: {
    '贷款人：': 'Prestatore:'
  },
  ja: {
    '贷款人：': '貸主：'
  },
  pt: {
    '贷款人：': 'Credor:'
  },
  tr: {
    '贷款人：': 'Borç Veren:'
  },
  vi: {
    '贷款人：': 'Bên Cho Vay:'
  },
  zh: {
    '贷款人：': '贷款人：'
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
