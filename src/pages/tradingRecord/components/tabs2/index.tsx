import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function Tabs2({ index2, setIndex2 }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="tradingRecordTabs2-1">
      <div className="tradingRecordTabs2-2">
        <div
          className={
            index2 === 1 ? "tradingRecordTabs2-3" : "tradingRecordTabs2-5"
          }
          onClick={() => {
            setIndex2(1);
          }}
        >
          <span className="tradingRecordTabs2-4">{translate(getText("充值"))}</span>
        </div>
        <div
          className={
            index2 === 2 ? "tradingRecordTabs2-3" : "tradingRecordTabs2-5"
          }
          onClick={() => {
            setIndex2(2);
          }}
        >
          <span className="tradingRecordTabs2-6">{translate(getText("提幣"))}</span>
        </div>
      </div>
    </div>
  );
}
