import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function HelpInfo() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar
        title={translate(getText("資產中的折合金額為什麼會產生變化？"))}
        isBack={true}
      />
      <CenterPage />
    </div>
  );
}
