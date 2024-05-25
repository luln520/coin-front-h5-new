import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { coinApi } from "../../api/coin-api";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function ExtractList() {
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
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar2
        title={translate(getText("出金"))}
        isBack={true}
        mini={"提现明细"}
        miniClick={() => {
          navigate("/extractorderlist");
        }}
      />
      <CenterPage coinList={coinList}/>
    </div>
  );
}
