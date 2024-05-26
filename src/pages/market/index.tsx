import { Toast } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { companyApi } from "../../api/company";
import { contractApi } from "../../api/contract-api";
import { financeApi } from "../../api/finance-api";
import { homeApi } from "../../api/home-api";
import { kuangjiApi } from "../../api/kuangm-api";
import { userApi } from "../../api/user-api";
import BottomBar from "../../components/bottomBar";
import { WSContext } from "../../router/router";
import { getText } from "../../utils/util";
import CoinPopup from "./components/popup";
import TopBar from "./components/topbar";
import TopBuy from "./components/topbuy";
import TopText from "./components/topText";

export default function MarketCenter() {
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
        hyTimes[index] = hyTime;
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
    //时间转化
    const time = convertToSeconds(dataInfo?.ctime);
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
        backgroundColor: "#1b1d23",
      }}
    >
      <TopBar />
      <TopText setIsShow={setIsShow} nowTab={nowTab} />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <TopBuy />
      {/* 弹出框 */}
      <CoinPopup
        isShow={isShow}
        setIsShow={setIsShow}
        coinListData={coinListData}
        ctmarketlist={ctmarketlist}
        index={1}
      />
      <BottomBar index={3} />
    </div>
  );
}
