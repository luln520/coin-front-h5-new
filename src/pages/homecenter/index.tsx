import { useContext, useEffect, useState } from 'react'
import { companyApi } from '../../api/company'
import { contentApi } from '../../api/content-api'
import { homeApi } from '../../api/home-api'
import BottomBar from '../../components/bottomBar'
import HomeTopBar from '../../components/homeTopBar'
import { LoginMsgContext, WSContext } from '../../router/router'
import CoinList from './components/coinList'
import Noice from './components/noice'
import Optionbox from './components/optionbox'
import Optionbox2 from './components/optionbox2'
import Optionbox3 from './components/optionbox3'
import Swipper from './components/swipper'
import Zixunlist from './components/zixunlist'
import './index.css'

export default function HomeCenter() {
  const [content, setContent] = useState({})
  const [companyData, setCompanyData] = useState(null)
  const [coinListData] = useContext(WSContext) // 移除未使用的 setCoinListData
  const [loginmsg] = useContext(LoginMsgContext) // 移除未使用的 setloginmsg
  const [ctmarketlist, setCtmarketlist] = useState([])

  const loadContentList = async () => {
    try {
      const data = await contentApi.list({ pageNum: 1, pageSize: 1 })
      if (data?.ok && data?.data?.records) {
        const records = data.data.records
        if (Array.isArray(records) && records.length > 0) {
          setContent(records[0] || {})
        }
      }
    } catch (error) {
      console.error('Failed to load content:', error)
    }
  }

  const loadctmarketlistData = async () => {
    try {
      const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 })
      if (data?.ok && data?.data?.records) {
        const list = data.data.records
        if (Array.isArray(list)) {
          const sortedList = [...list].sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0))
          setCtmarketlist(sortedList)
        }
      }
    } catch (error) {
      console.error('Failed to load market list:', error)
    }
  }

  const initCompany = async () => {
    try {
      const res = await companyApi.domain()
      if (res?.ok && res?.data) {
        setCompanyData(res.data)
      }
    } catch (error) {
      console.error('Failed to load company data:', error)
    }
  }

  useEffect(() => {
    initCompany()
    loadContentList()
  }, [])

  useEffect(() => {
    loadctmarketlistData()
  }, [])

  return (
    <div className='page' style={{ backgroundColor: '#f2f2fc' }}>
      <HomeTopBar companyData={companyData} />
      <Swipper companyData={companyData} />
      <Noice content={content} />
      <Zixunlist coinListData={coinListData || []} ctmarketlist={ctmarketlist} />
      <Optionbox loginmsg={loginmsg} />
      <Optionbox2 loginmsg={loginmsg} />
      <Optionbox3 loginmsg={loginmsg} />
      <CoinList coinListData={coinListData || []} ctmarketlist={ctmarketlist} />
      <div style={{ height: '50px' }} />
      <BottomBar index={1} />
    </div>
  )
}
