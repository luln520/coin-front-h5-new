import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/user-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import Info from "./components/info";

export default function IdcardCenter() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [userInfo, setUserInfo] = useState({});
  const [rzstatus, setRzstatus] = useState(0);

  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfo(data.data);
      setRzstatus(data.data?.rzstatus);
    }
  };
  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("身份驗證"))} isBack={true} />
      <Info rzstatus={rzstatus}/>
    </div>
  );
}
