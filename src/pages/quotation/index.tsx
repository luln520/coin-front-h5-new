import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { financeApi } from "../../api/finance-api";
import { kuangjiApi } from "../../api/kuangm-api";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function QuotationCenter() {
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
        backgroundColor: "#e3e6ea",
      }}
    >
      <TopBar title={translate(getText("行情"))} isBack={false} />
      <CenterPage />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={2} />
    </div>
  );
}
