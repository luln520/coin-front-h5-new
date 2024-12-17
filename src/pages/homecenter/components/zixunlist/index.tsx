import { useNavigate } from 'react-router-dom'
import { imageConfig } from '../../../../config/config'
import './index.css'

export default function Zixunlist({ coinListData, ctmarketlist }) {
  const navigate = useNavigate()
  const getNodes = () => {
    const nodes = []
    let coinListDataTemp = coinListData
    for (let index = 0; index < ctmarketlist.length; index++) {
      const ctmarket = ctmarketlist[index]
      const key = ctmarket.coinname
      nodes.push(
        <div
          className={coinListData[key]?.close > coinListData[key]?.open ? 'zixunlist-5' : 'zixunlist-35'}
          onClick={() => {
            navigate(`/trade/${key}`)
          }}>
          <h1 className='zixunlist-6'>
            {key.toUpperCase()}
            <span className='zixunlist-7'>/USDT</span>
          </h1>
          <h1 className='zixunlist-8'>{coinListData[key]?.close ? coinListData[key]?.close : '--'}</h1>
          <small className='zixunlist-9'>
            {coinListData[key]?.close < coinListData[key]?.open ? '' : '+'}
            {coinListData[key]?.close &&
              (((coinListData[key]?.close - coinListData[key]?.open) / coinListData[key]?.open) * 100).toFixed(2)}
            %
          </small>
        </div>
      )
    }
    return nodes
  }

  const getLogo = (name) => {
    let logo = ''
    for (const ctmarket of ctmarketlist) {
      if (name == ctmarket.coinname) {
        logo = imageConfig.baseImageUrl + ctmarket.logo
        break
      }
    }
    return logo
  }
  return (
    <div className='zixunlist-1'>
      <div className='zixunlist-2'>
        <div className='zixunlist-3'>
          <div className='zixunlist-4'>{getNodes()}</div>
        </div>
      </div>
    </div>
  )
}
