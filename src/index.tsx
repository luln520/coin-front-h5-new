import React from 'react'
import * as Sentry from '@sentry/react'
import Fingerprint2 from 'fingerprintjs2'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/router'
import './i18n/i18n'
import { companyApi } from './api/company'
import { imageConfig } from './config/config'
import { changeCompanyData } from './utils/util'
import { onlineApi } from './api/online-api'
import { userApi } from './api/user-api'
import { kuangjiApi } from './api/kuangm-api'
import { localClear } from './utils/local-util'
import { Toast } from 'antd-mobile'

Sentry.init({
  dsn: 'https://f98001269391c4bbabf86c3b78339162@o4508481312063488.ingest.de.sentry.io/4508482496561232',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
//初始化获取公司
async function initCompany() {
  let res = await companyApi.domain()
  if (res.data) {
    //公司id
    localStorage.setItem('companyId', res.data.id)
    localStorage.setItem('title', res.data.companyName)
    localStorage.setItem('inviteType', res.data?.inviteType)
    localStorage.setItem('companySkin', res.data?.companySkin)
    localStorage.setItem('appStatus', res.data?.appStatus)
    localStorage.setItem('c2ctxStatus', res.data?.c2ctxStatus)
    localStorage.setItem('c2cczStatus', res.data?.c2cczStatus)
    localStorage.setItem('pledgeStatus', res.data.pledgeStatus)
    localStorage.setItem('pledgeFee', res.data.pledgeFee)
    changeCompanyData(res.data)
  }
}
//指纹生成
async function fingerMake() {
  Fingerprint2.get(function (components) {
    const values = components.map(function (component, index) {
      if (index === 0) {
        //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
        return component.value.replace(/\bNetType\/\w+\b/, '')
      }
      return component.value
    })
    const murmur = Fingerprint2.x64hash128(values.join(''), 31)
    if (!localStorage.getItem('murmur')) {
      localStorage.setItem('murmur', murmur)
    }
  })
}

//验证token是否失效
async function getUserInfo() {
  let res = await kuangjiApi.pcList({ pageNum: 1, pageSize: 1 })
  if (res.code != 0) {
    Toast.show({ content: 'Please login' })
    localClear()
  }
}

// 定义一个函数来替换文本中的 NaN 为 空格
function replaceNaNWithSpace(element) {
  // 如果当前元素是文本节点，且包含 NaN 字符串，则替换为 空格
  if (element.nodeType === Node.TEXT_NODE && element.nodeValue.includes('NaN')) {
    element.nodeValue = element.nodeValue.replace(/NaN/g, ' ')
  }
  // 如果当前元素是元素节点，则递归遍历其子节点
  else if (element.nodeType === Node.ELEMENT_NODE) {
    for (var i = 0; i < element.childNodes.length; i++) {
      replaceNaNWithSpace(element.childNodes[i])
    }
  }
}
//公司 记载完成后再渲染页面
initCompany()
  .then(() => {
    root.render(<AppRouter></AppRouter>)
  })
  .catch(() => {
    root.render(<AppRouter></AppRouter>)
  })
//指纹
fingerMake()
//有效登陆判断
getUserInfo()
setInterval(() => {
  getUserInfo()
}, 1000 * 60 * 60)

//替换 NaN
setInterval(() => {
  replaceNaNWithSpace(document.body)
}, 1000)
