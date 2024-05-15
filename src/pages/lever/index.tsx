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
import { useLocation, useParams } from "react-router-dom";
import pako from "pako";
import { contractApi } from "../../api/contract-api";
import { financeApi } from "../../api/finance-api";
import { leverApi } from "../../api/lever-api";
import { Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import { homeApi } from "../../api/home-api";
import TopBar3 from "../../components/topBar3";
import { WSContext } from "../../router/router";
export default function Lever() {
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  const [changeDaoJiShi, setChangeDaoJiShi] = useState(false);
  const [daojishi, setDaojis] = useState(60);
  const [sendData, setSendData] = useState({});
  const [index, setIndex] = useState(3);
  const [isShow, setIsShow] = useState(false);
  const [nowTab, setNowTab] = useState("");
  const [hysetInfo, setHysetInfo] = useState({});
  const [userInfo, setuserInfo] = useState([] as any[]);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const [leverorders, setleverorders] = useState([] as any[]);
  const [leverSet1, setLeverSet1] = useState([] as any[]);
  const [leverSet2, setLeverSet2] = useState([] as any[]);
  const [leverage, setLeverage] = useState([] as any[]);
  const location = useLocation();
  const param = useParams();
  let timer: any;
  const [hyorders, sethyorders] = useState([] as any[]);
  const [coinListData, setCoinListData] = useContext(WSContext);
  //贸易
  const [type, setType] = useState(1);

  //加载用户资产
  const loadUserCoinData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //平仓
  const closeorder = async (lid) => {
    const data = await leverApi.closeorder({ uid, lid });
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };
  //订单信息
  const loadLeverListData = async () => {
    const data = await leverApi.list({ uid, pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setleverorders(data.data.records);
    }
  };
  //市场信息
  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      const list = data.data.records;
      list.sort((d, e) => d.sort - e.sort);
      setCtmarketlist(list);
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

  //加载倍数
  const getTwLeverage = async () => {
    const data = await leverApi.getTwLeverage({
      symbol: `${nowTab.toUpperCase()}/USDT`,
    });
    if (data.ok) {
      setLeverage(data.data);
    }
  };

  //加载上下限制
  const getTwLeverSet = async (type) => {
    const data = await leverApi.getTwLeverSet({
      symbol: `${nowTab.toUpperCase()}/USDT`,
      type,
    });
    if (data.ok) {
      if (type === 1) {
        setLeverSet1(data.data);
      }
      if (type === 2) {
        setLeverSet2(data.data);
      }
    }
  };

  //下单
  const buyCoin = async (dataInfo) => {
    dataInfo.uid = uid;
    const data = await leverApi.creatorder(dataInfo);
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  const loadData = async () => {
    loadUserCoinData();
    loadLeverListData();
  };

  const loadSetData = async () => {
    getTwLeverage();
    getTwLeverSet(1);
    getTwLeverSet(2);
    loadhysetInfoData();
    loadctmarketlistData();
  };

  useEffect(() => {
    setNowTab(param?.name);
  }, [param]);

  useEffect(() => {
    loadLeverListData();
    setChangeDaoJiShi(false);
  }, [index]);

  useEffect(() => {
    loadData();
    setIndex(1);
    timer = setInterval(() => {
      loadData();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    loadSetData();
  }, [nowTab]);

  useEffect(() => {
    //判断是否弹窗
    const pop = location.search.replace("?isPop=", "");
    if (pop == "1") {
      setIsShow(true);
    }
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <TopBar3
        title={translate(getText("槓桿"))}
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
          index={2}
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
          {/* <KLine nowTab={nowTab} loadNowData={loadNowData} /> */}
          {index === 1 && (
            <KLine nowTab={nowTab} setIndex={setIndex} setType={setType} />
          )}
        </div>
        {index === 2 && <JianJie nowTab={nowTab} ctmarketlist={ctmarketlist} />}
        {index === 3 && !changeDaoJiShi && (
          <MaoYi
            type={type}
            setType={setType}
            nowTab={nowTab}
            userInfo={userInfo}
            leverSet1={leverSet1}
            leverSet2={leverSet2}
            leverage={leverage}
            hysetInfo={hysetInfo}
            buyCoin={buyCoin}
          />
        )}
        {index === 4 && (
          <MingLing
            hyorders={leverorders}
            nowTab={nowTab}
            closeorder={closeorder}
          />
        )}
        {index === 5 && <MingXi hyorders={leverorders} nowTab={nowTab} />}
      </div>
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={3} />
    </div>
  );
}
