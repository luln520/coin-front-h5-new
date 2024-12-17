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
  const [content, setContent] = useState({} as any)
  const [companyData, setCompanyData] = useState(null as any)
  const [coinListData, setCoinListData] = useContext(WSContext)
  const [loginmsg, setloginmsg] = useContext(LoginMsgContext)
  const [ctmarketlist, setCtmarketlist] = useState([] as any[])

  const loadContentList = async () => {
    let data = await contentApi.list({ pageNum: 1, pageSize: 1 })
    if (data.ok) {
      data = data.data.records
      if (data.length >= 1) {
        setContent(data[0])
      }
    }
  }
  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 })
    if (data.ok) {
      const list = data.data.records
      list.sort((d, e) => d.sort - e.sort)
      setCtmarketlist(list)
    }
  }

  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain()
    if (res.ok) {
      setCompanyData(res.data)
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
    <div
      className='page'
      style={{
        backgroundColor: '#f2f2fc'
      }}>
      <HomeTopBar companyData={companyData} />
      <Swipper companyData={companyData} />
      <Noice content={content} />
      <Zixunlist coinListData={coinListData} ctmarketlist={ctmarketlist} />
      <Optionbox loginmsg={loginmsg} />
      <Optionbox2 loginmsg={loginmsg} />
      <Optionbox3 loginmsg={loginmsg} />
      <CoinList coinListData={coinListData} ctmarketlist={ctmarketlist} />
      <div
        style={{
          height: '50px'
        }}></div>
      <BottomBar index={1} />
    </div>
  )
}
