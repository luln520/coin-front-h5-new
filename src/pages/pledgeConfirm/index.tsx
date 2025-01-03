import { Toast } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { coinApi } from "../../api/coin-api";
import { financeApi } from "../../api/finance-api";
import { huobiApi } from "../../api/huobi";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { WSContext } from "../../router/router";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";
import { pledgeLng } from "../../api/pledge";
import { pledgeBackPayCoin } from "../../api/pledgeback";

export default function Recharge() {
  const [coinList, setCoinList] = useState([] as any[]);
  const uid = localStorage.getItem("uid");
  const [index, setIndex] = useState(1);
  const [use, setUse] = useState({} as any);
  const { t: translate } = useTranslation();
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [coinPriceData, setcoinPriceData] = useState({} as any);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const param = useParams();
  const [pledgeNum, setPledgeNum] = useState(0);
  const [leftNum, setLeftNum] = useState(0);
  //加载种类
  const loadCoinData = async () => {
    const data = await coinApi.list();
    if (data.ok) {
      setCoinList(data.data);
      //设置使用
      for (const item of data.data) {
        if (param?.id == item.id) {
          setUse(item);
          //加载价格
          if (item.name != "usdt") {
            loadCoinPriceData(item.name);
          }
        }
      }
    }
  };
  //加载价格
  const loadCoinPriceData = async (name) => {
    const data = await huobiApi.getPrice(name);
    console.log(data)
    if (data.status == "ok") {
      setcoinPriceData(data.data[0]);
    }
  };

  //发送
  const sendRecharge = async (sendData) => {
    sendData.uid = uid;
    const data = await pledgeBackPayCoin(sendData);
    if (data.ok) {
      Toast.show({ content: translate(getText("提交成功，等待審核")) });
      setPledgeNum(0)
    } else {
      Toast.show({ content: data.msg });
    }
  };
  
  const getpledgeLng = async () => {
    pledgeLng({uid}).then(resp=>{
      if(resp.data){
        setPledgeNum(resp.data.num)
        setLeftNum(resp.data.leftNum)
      }
    })
  }
  useEffect(() => {
    loadCoinData();
    getpledgeLng()
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar
        title={translate(getText("還款")) + `(${use?.name?.toUpperCase()})`}
        isBack={true}
      />
      <CenterPage
        coinList={coinList}
        sendRecharge={sendRecharge}
        use={use}
        setUse={setUse}
        coinPriceData={coinPriceData}
        pledgeNum={pledgeNum}
        leftNum={leftNum}
      />
    </div>
  );
}
