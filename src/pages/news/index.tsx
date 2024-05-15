import "./index.css";
import Optionbox from "./components/optionbox";
import TopBar2 from "../../components/topBar2";
import BottomBar from "../../components/bottomBar";
import Swipper from "./components/swipper";
import pako from "pako";
import Noice from "./components/noice";
import Tabs from "./components/tabs";
import NewsList from "./components/list";
import { useContext, useEffect, useState } from "react";
import { newsApi } from "../../api/news-api";
import { contentApi } from "../../api/content-api";
import { homeApi } from "../../api/home-api";
import Zixunlist from "./components/zixunlist";
import CoinList from "./components/coinList";
import { companyApi } from "../../api/company";
import { LoginMsgContext, WSContext } from "../../router/router";

export default function News() {
  const reader = new FileReader();
  let WS = null;
  const [content, setContent] = useState({} as any);
  const [companyData, setCompanyData] = useState(null as any);
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [loginmsg, setloginmsg] = useContext(LoginMsgContext);
  let coinListDataMap = {} as any;
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);

  const loadContentList = async () => {
    let data = await contentApi.list({ pageNum: 1, pageSize: 1 });
    if (data.ok) {
      data = data.data.records;
      if (data.length >= 1) {
        setContent(data[0]);
      }
    }
  };
  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      const list = data.data.records;
      list.sort((d, e) => d.sort - e.sort);
      setCtmarketlist(list);
    }
  };

  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain();
    if (res.ok) {
      setCompanyData(res.data);
    }
  }
  useEffect(() => {
    initCompany();
    loadContentList();
  }, []);
  useEffect(() => {
    loadctmarketlistData();
  }, []);
  return (
    <div className="page">
      <TopBar2 companyData={companyData} />
      <Swipper companyData={companyData} />
      <Noice content={content} />
      <Optionbox loginmsg={loginmsg}/>
      <Zixunlist coinListData={coinListData} ctmarketlist={ctmarketlist} />
      <CoinList coinListData={coinListData} ctmarketlist={ctmarketlist} />
      {/* <Tabs
        newsTypes={newsTypes}
        newsType={newsType}
        setNewsTypeFnc={setNewsTypeFnc}
      />
      <NewsList news={news} newType={newsType} />
      */}
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={1} />
    </div>
  );
}
