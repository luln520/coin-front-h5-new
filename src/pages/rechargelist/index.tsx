import "./index.css";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import Tabs from "./components/tabs";
import pako from "pako";
import { useState } from "react";
import { useEffect } from "react";
import Center from "./components/center";
import { financeApi } from "../../api/finance-api";
import { Toast } from "antd-mobile";
import { coinApi } from "../../api/coin-api";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";

export default function RechargeList() {
  const [coinList, setCoinList] = useState([] as any[]);
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  //加载种类
  const loadCoinData = async () => {
    const data = await coinApi.list();
    if (data.ok) {
      //排序
      data.data.sort(function (a, b) {
        return a.sort - b.sort;
      });
      setCoinList(data.data);
    }
  };

  useEffect(() => {
    loadCoinData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("充值"))} isBack={true} />
      <Center />
      <Tabs coinList={coinList} />
      <div style={{ height: "70px" }}></div>
      <BottomBar index={4} />
    </div>
  );
}
