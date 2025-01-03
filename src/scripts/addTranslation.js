// scripts/addTranslation.js
const fs = require('fs')
const path = require('path')

const translations = {
  ar: {
    '1. 借款人必须同意平台的条款和条件。': '1. يجب على المقترض الموافقة على شروط وأحكام المنصة.'
  },
  de: {
    '1. 借款人必须同意平台的条款和条件。': '1. Der Kreditnehmer muss den Geschäftsbedingungen der Plattform zustimmen.'
  },
  en: {
    '1. 借款人必须同意平台的条款和条件。': "1. The Borrower must agree to the Platform's terms and conditions."
  },
  es: {
    '1. 借款人必须同意平台的条款和条件。': '1. El prestatario debe aceptar los términos y condiciones de la Plataforma.'
  },
  fr: {
    '1. 借款人必须同意平台的条款和条件。': "1. L'emprunteur doit accepter les termes et conditions de la Plateforme."
  },
  it: {
    '1. 借款人必须同意平台的条款和条件。': '1. Il mutuatario deve accettare i termini e le condizioni della Piattaforma.'
  },
  ja: {
    '1. 借款人必须同意平台的条款和条件。': '1. 借り手はプラットフォームの利用規約に同意しなければならない。'
  },
  ko: {
    '1. 借款人必须同意平台的条款和条件。': '1. 차용인은 플랫폼의 이용약관에 동의해야 합니다.'
  },
  pt: {
    '1. 借款人必须同意平台的条款和条件。': '1. O mutuário deve concordar com os termos e condições da Plataforma.'
  },
  ru: {
    '1. 借款人必须同意平台的条款和条件。': '1. Заёмщик должен согласиться с условиями и положениями Платформы.'
  },
  tr: {
    '1. 借款人必须同意平台的条款和条件。': "1. Borç alan, Platform'un şart ve koşullarını kabul etmelidir."
  },
  vi: {
    '1. 借款人必须同意平台的条款和条件。': '1. Bên vay phải đồng ý với các điều khoản và điều kiện của Nền tảng.'
  },
  zh: {
    '1. 借款人必须同意平台的条款和条件。': '1. 借款人必须同意平台的条款和条件。'
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
