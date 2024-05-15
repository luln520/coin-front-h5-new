import { init } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { contractApi } from "../../api/contract-api";
import { financeApi } from "../../api/finance-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import Tabs from "./components/tabs";
import TradingRecordCenter from "./components/tradingRecordCenter";
import TradTradingRecordCenterCX from "./components/tradTradingRecordCenterCX";

export default function TradingRecord() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [index, setIndex] = useState(1);
  const [index2, setIndex2] = useState(1);
  const uid = localStorage.getItem("uid");
  const [txList, setTxList] = useState([] as any[]);
  const [czList, setCzList] = useState([] as any[]);
  const [hyorders, sethyorders] = useState([] as any[]);
  const param = useParams();

  //加载提现信息
  const loadListPcpagesData = async () => {
    const data = await financeApi.listPcpage({ uid });
    if (data.ok) {
      setTxList(data.data);
    }
  };

  //加载充值信息
  const loadListRechargeData = async () => {
    const data = await financeApi.listRecharge({ uid });
    if (data.ok) {
      setCzList(data.data);
    }
  };
  //加载数 据
  const loadhyorderData = async () => {
    const data = await contractApi.gethyorder({ uid });
    if (data.ok) {
      sethyorders(data.data);
    }
  };
  const initTabs = () => {
    const type = param?.type;
    if (parseInt(type) == 2) {
      setIndex2(2);
    } else if (parseInt(type) == 3) {
      setIndex(2);
    }
  };
  useEffect(() => {
    loadListPcpagesData();
    loadListRechargeData();
    loadhyorderData();
    initTabs();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "white",
      }}
    >
      <TopBar title={translate(getText("交易記錄"))} isBack={true} />
      <Tabs index={index} setIndex={setIndex} />
      {index === 1 && (
        <TradingRecordCenter
          index2={index2}
          setIndex2={setIndex2}
          txList={txList}
          czList={czList}
        />
      )}
      {index === 2 && <TradTradingRecordCenterCX hyorders={hyorders} />}
    </div>
  );
}
