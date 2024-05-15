import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import SettingPage from "./components/settingPage";

export default function Setting() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="page">
      <TopBar title={translate(getText("設置"))} isBack={true} />
      <SettingPage />
    </div>
  );
}
