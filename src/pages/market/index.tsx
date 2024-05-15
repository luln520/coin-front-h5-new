import "./index.css";
import List from "./components/list";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import Tabs from "./components/tabs";
import pako from "pako";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Order from "./components/order";
import { contractApi } from "../../api/contract-api";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import { homeApi } from "../../api/home-api";
import { time } from "console";
import { WSContext } from "../../router/router";
import LockUpCenter2 from "../lockUpCenter2";
import { useParams } from "react-router-dom";

export default function Market() {
  const { t: translate } = useTranslation();
  const uid = localStorage.getItem("uid");
  const [index, setIndex] = useState(2);
  const prarm = useParams();
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [hyorders, sethyorders] = useState([] as any[]);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);

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
  useEffect(() => {
    loadctmarketlistData();
    loadhyorderData();
    const search = window.location.search; // 获取 URL 中的查询字符串，如 "?foo=bar"
    const params = new URLSearchParams(search); // 使用 URLSearchParams 解析查询字符串
    const index = params.get("index"); // 获取参数
    if (index) {
      setIndex(parseInt(index));
    }
  }, []);
  return (
    <div className="page">
      {/* <TopBar title={translate(getText("市場"))} isBack={false} /> */}
      <Tabs index={index} setIndex={setIndex} />
      {(index === 1 || index === 3) && (
        <List
          coinListData={coinListData}
          ctmarketlist={ctmarketlist}
          index={index}
        />
      )}
      {index === 2 && <LockUpCenter2 />}
      {/* {index === 3 && <Order hyorders={hyorders} />} */}
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={2} />
    </div>
  );
}
