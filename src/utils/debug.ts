// src/utils/debug.ts
export function initVConsole() {
  // 检查 URL 参数
  const debugFromUrl = /debug=true/.test(window.location.href)
  const debugOffFromUrl = /debug=false/.test(window.location.href)

  // 如果 URL 带 debug=true，开启调试
  if (debugFromUrl) {
    localStorage.setItem('debug_mode', 'true')
  }
  // 如果 URL 带 debug=false，关闭调试
  if (debugOffFromUrl) {
    localStorage.removeItem('debug_mode')
  }

  const needVConsole = debugFromUrl || (localStorage.getItem('debug_mode') === 'true' && !debugOffFromUrl)

  if (needVConsole && !window.__VCONSOLE__) {
    // 防止重复初始化
    import('vconsole').then((VConsole) => {
      new VConsole.default()
    })
  }
}

// 可选：提供开关方法
export const debugUtils = {
  enable: () => {
    localStorage.setItem('debug_mode', 'true')
    window.location.reload()
  },
  disable: () => {
    localStorage.removeItem('debug_mode')
    window.location.reload()
  },
  toggle: () => {
    if (localStorage.getItem('debug_mode') === 'true') {
      debugUtils.disable()
    } else {
      debugUtils.enable()
    }
  }
}
