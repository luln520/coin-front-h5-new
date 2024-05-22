import { Toast } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { financeApi } from "../../api/finance-api";
import { homeApi } from "../../api/home-api";
import { kuangjiApi } from "../../api/kuangm-api";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import { LoginMsgContext, WSContext } from "../../router/router";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function QuotationCenter() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const prarm = useParams();
  const [userCoinInfo, setuserCoinInfo] = useState({});
  const { t: translate } = useTranslation();
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);

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
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#e3e6ea",
      }}
    >
      <TopBar title={translate(getText("行情"))} isBack={false} />
      <CenterPage coinListData={coinListData} ctmarketlist={ctmarketlist} />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={2} />
    </div>
  );
}
