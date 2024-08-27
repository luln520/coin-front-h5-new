import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";
import { useEffect, useState } from "react";

export default function JYJL() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [pledgeStatus,setPledgeStatus] = useState(0)

  useEffect(()=>{
    setPledgeStatus(Number(localStorage.getItem('pledgeStatus')))
  },[])
  return (
    <div className="page">
      <TopBar title={translate(getText("交易記錄"))} isBack={true} />
      <CenterPage pledgeStatus={pledgeStatus} />
    </div>
  );
}
