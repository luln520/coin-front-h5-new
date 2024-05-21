import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function RechargeOrderList() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar2
        title={translate(getText("充值明细"))}
        isBack={true}
      />
      <CenterPage />
    </div>
  );
}
