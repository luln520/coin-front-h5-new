import "./index.css";
import TradeTop from "./components/tradeTop";
import BottomBar from "../../components/bottomBar";
import TradeTabs from "./components/tradeTabs";
import MaoYi from "./components/maoyi";
import MingXi from "./components/mingxi";
import MingLing from "./components/mingling";
import JianJie from "./components/jianjie";
import { useContext, useEffect, useState } from "react";
import KLine from "./components/kline";
import CoinPopup from "./components/popup";
import DaoJiShi from "./components/daojishi";
import { useParams } from "react-router-dom";
import pako from "pako";
import { contractApi } from "../../api/contract-api";
import { financeApi } from "../../api/finance-api";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import { homeApi } from "../../api/home-api";
import TopBar3 from "../../components/topBar3";
import { WSContext } from "../../router/router";
import { companyApi } from "../../api/company";
import { setTimeout } from "timers/promises";
import { Button, CenterPopup, Space, Toast, Divider } from "antd-mobile";
import { userApi } from "../../api/user-api";
export default function Trade() {
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  // const [changeDaoJiShi, setChangeDaoJiShi] = useState(false);
  const [daojishi, setDaojis] = useState(60);
  const [sendData, setSendData] = useState({});
  const [index, setIndex] = useState(3);
  const [isShow, setIsShow] = useState(false);
  const [nowTab, setNowTab] = useState("");
  const [successOrderNo, setsuccessOrderNo] = useState("");
  const [hysetInfo, setHysetInfo] = useState({});
  const [userInfo, setuserInfo] = useState([] as any[]);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const param = useParams();
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [userInfoData, setUserInfoData] = useState({});
  const [hyorders, sethyorders] = useState([] as any[]);
  let timer: any;
  const [companyData, setCompanyData] = useState({} as any);
  //贸易
  const [type, setType] = useState(1);
  //倒计时显示
  const [visible, setVisible] = useState(false);
  //预期收益
  const [yqsy, setyqsy] = useState(0);
  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain();
    if (res.ok) {
      setCompanyData(res.data);
    }
  }

  //用户信息
  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfoData(data.data);
    }
  };
  //加载数 据
  const loadhyorderData = async () => {
    const data = await contractApi.gethyorder({ uid });
    if (data.ok) {
      sethyorders(data.data);
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

  //加载数 据
  const loadUserCoinData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //合约设置
  const loadhysetInfoData = async () => {
    const data = await contractApi.hysetInfo();
    if (data.ok) {
      let hysetInfoT = data.data;
      let hyTimes = hysetInfoT?.hyTime.split(",");
      let hyTzeds = hysetInfoT?.hyTzed.split(",");
      let hyYkbls = hysetInfoT?.hyYkbl.split(",");
      for (let index = 0; index < hyTimes.length; index++) {
        let hyTime = hyTimes[index];
        let hyTzed = hyTzeds[index];
        let hyYkbl = hyYkbls[index];
        hyTimes[index] = parseInt(hyTime);
        hyTzeds[index] = parseInt(hyTzed);
        hyYkbls[index] = parseInt(hyYkbl);
      }
      hysetInfoT.hyTime = hyTimes;
      hysetInfoT.hyTzed = hyTzeds;
      hysetInfoT.hyYkbl = hyYkbls;
      setHysetInfo(hysetInfoT);
    }
  };

  //下单
  const buyCoin = async (dataInfo) => {
    dataInfo.uid = uid;
    const time = dataInfo.ctime * 60;
    setDaojis(time);
    setSendData(dataInfo);
    const data = await contractApi.creatorder(dataInfo);
    if (data.ok) {
      Toast.show({ content: data.msg });
      //设置成功orderno
      setsuccessOrderNo(data.data);
      //开始倒计时
      // setChangeDaoJiShi(true);
      setIndex(1);
      setVisible(true);
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  const loadData = async () => {
    loadUserCoinData();
    loadhyorderData();
  };
  useEffect(() => {
    initCompany();
    setIndex(1);
  }, []);
  useEffect(() => {
    setNowTab(param.name);
  }, [param]);

  useEffect(() => {
    loadhyorderData();
    // setChangeDaoJiShi(false);
  }, [index]);
  useEffect(() => {
    loadhysetInfoData();
    loadctmarketlistData();
    loadData();
    timer = setInterval(() => {
      loadData();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [nowTab]);
  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <TopBar3
        title={translate(getText("期權"))}
        onCall={() => {
          setIsShow(true);
        }}
        nowTab={nowTab}
      />
      <TradeTop setIsShow={setIsShow} nowTab={nowTab} />
      <TradeTabs index={index} setIndex={setIndex} />
      {isShow && (
        <CoinPopup
          isShow={isShow}
          setIsShow={setIsShow}
          coinListData={coinListData}
          ctmarketlist={ctmarketlist}
          index={1}
        />
      )}
      <div
        style={{
          margin: "0 3vw",
        }}
      >
        <div
          style={{
            display: index === 1 ? "" : "none",
            width: "100%",
          }}
        >
          {/* <KLine nowTab={nowTab} loadNowData={setKInfo} /> */}
          {index === 1 && (
            <KLine nowTab={nowTab} setIndex={setIndex} setType={setType} />
          )}
        </div>
        {index === 2 && <JianJie nowTab={nowTab} ctmarketlist={ctmarketlist} />}
        {index === 3 && (
          <MaoYi
            type={type}
            setyqsy={setyqsy}
            setType={setType}
            nowTab={nowTab}
            userInfo={userInfo}
            hysetInfo={hysetInfo}
            buyCoin={buyCoin}
          />
        )}
        {/* {index === 3 && changeDaoJiShi && (
          <DaoJiShi
            daojis={daojishi}
            nowTab={nowTab}
            sendData={sendData}
            hysetInfo={hysetInfo}
            companyData={companyData}
            setChangeDaoJiShi={setChangeDaoJiShi}
          />
        )} */}
        {index === 4 && <MingLing hyorders={hyorders} nowTab={nowTab} />}
        {index === 5 && <MingXi hyorders={hyorders} nowTab={nowTab} />}
      </div>
      <div
        style={{
          height: "50px",
        }}
      ></div>
      {/* 倒计时 */}
      <CenterPopup
        visible={visible}
        destroyOnClose={true}
        onMaskClick={() => {
          setVisible(false);
        }}
      >
        <DaoJiShi
          userInfo={userInfoData}
          yqsy={yqsy}
          setVisible={setVisible}
          coinListData={coinListData}
          daojis={daojishi}
          nowTab={nowTab}
          sendData={sendData}
          hysetInfo={hysetInfo}
          companyData={companyData}
          successOrderNo={successOrderNo}
        />
      </CenterPopup>
      <BottomBar index={3} />
    </div>
  );
}
