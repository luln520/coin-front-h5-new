import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function Info({ rzstatus }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const rzs = ["前往驗證", "正在驗證", "已驗證", "前往驗證"];
  return (
    <div className="idcard-1">
      <div
        className="idcard-2"
        onClick={() => {
          if (rzstatus === 2) {
            return;
          }
          navigate("/idcard");
        }}
      >
        <div className="idcard-3">
          <span className="idcard-4">{translate(getText("高級驗證"))}</span>
        </div>
        <div className="idcard-5">
          <span className="idcard-6">{translate(getText(rzs[rzstatus]))}</span>
        </div>
      </div>
      <div className="idcard-7">
        <span className="idcard-8">
          {translate(getText("審核通過後，可提現1500000 USDT"))}
        </span>
        <span className="idcard-9">
          {translate(getText("高級驗證後即可申請VIP權益"))}
        </span>
      </div>
    </div>
  );
}
