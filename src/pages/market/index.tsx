import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { financeApi } from "../../api/finance-api";
import { kuangjiApi } from "../../api/kuangm-api";
import BottomBar from "../../components/bottomBar";
import { getText } from "../../utils/util";
import TopBar from "./components/topbar";
import TopBuy from "./components/topbuy";
import TopText from "./components/topText";

export default function MarketCenter() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const prarm = useParams();
  const [userCoinInfo, setuserCoinInfo] = useState({});
  const { t: translate } = useTranslation();
  useEffect(() => {}, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#1b1d23",
      }}
    >
      <TopBar />
      <TopText />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <TopBuy />
      <BottomBar index={1} />
    </div>
  );
}
