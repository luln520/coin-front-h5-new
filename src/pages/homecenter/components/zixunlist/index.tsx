import { useNavigate } from 'react-router-dom'
import { useMemo, memo } from 'react'
import { imageConfig } from '../../../../config/config'
import './index.css'

// 提取计算涨跌幅的逻辑
const calculatePriceChange = (close, open) => {
  if (!close || !open || isNaN(close) || isNaN(open)) return '--'
  const change = ((close - open) / open) * 100
  return isNaN(change) ? '--' : change.toFixed(2)
}

// 价格格式化
const formatPrice = (price) => {
  if (!price || isNaN(price)) return '--'
  return price.toString()
}

// 将单个币种项提取为独立组件
const CoinItem = memo(({ coinData, symbol, onItemClick }) => {
  if (!symbol) return null

  const close = Number(coinData?.close)
  const open = Number(coinData?.open)
  const isValidData = !isNaN(close) && !isNaN(open)
  const isPositive = isValidData ? close > open : false
  const priceChange = calculatePriceChange(close, open)

  return (
    <div
      className={isValidData ? (isPositive ? 'zixunlist-5' : 'zixunlist-35') : 'zixunlist-35'}
      onClick={() => {
        if (symbol && onItemClick) onItemClick()
      }}>
      <h1 className='zixunlist-6'>
        {(symbol || '').toUpperCase()}
        <span className='zixunlist-7'>/USDT</span>
      </h1>
      <h1 className='zixunlist-8'>{formatPrice(close)}</h1>
      <small className='zixunlist-9'>
        {isValidData && isPositive ? '+' : ''}
        {priceChange}%
      </small>
    </div>
  )
})

export default function Zixunlist({ coinListData = {}, ctmarketlist = [] }) {
  const navigate = useNavigate()

  // 使用useMemo缓存logo映射
  const logoMap = useMemo(() => {
    if (!Array.isArray(ctmarketlist)) return {}

    return ctmarketlist.reduce((acc, market) => {
      if (market?.coinname && market?.logo) {
        acc[market.coinname] = `${imageConfig?.baseImageUrl || ''}${market.logo}`
      }
      return acc
    }, {})
  }, [ctmarketlist])

  // 使用useMemo缓存列表渲染
  const coinList = useMemo(() => {
    if (!Array.isArray(ctmarketlist)) return null

    return ctmarketlist
      .map((ctmarket) => {
        if (!ctmarket?.coinname) return null

        const symbol = ctmarket.coinname
        return (
          <CoinItem
            key={symbol}
            symbol={symbol}
            coinData={coinListData?.[symbol] || {}}
            onItemClick={() => {
              if (symbol) navigate(`/trade/${symbol}`)
            }}
          />
        )
      })
      .filter(Boolean) // 过滤掉空值
  }, [coinListData, ctmarketlist, navigate])

  // 如果没有数据，显示空状态
  if (!ctmarketlist?.length) {
    return (
      <div className='zixunlist-1'>
        <div className='zixunlist-2'>
          <div className='zixunlist-3'>
            <div className='zixunlist-4'>暂无数据</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='zixunlist-1'>
      <div className='zixunlist-2'>
        <div className='zixunlist-3'>
          <div className='zixunlist-4'>{coinList}</div>
        </div>
      </div>
    </div>
  )
}
