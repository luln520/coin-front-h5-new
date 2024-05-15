import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function Tabs({ index, setIndex }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="tradingRecordTabs-1">
      <div className="tradingRecordTabs-2">
        <div
          className={
            index === 1 ? "tradingRecordTabs-3" : "tradingRecordTabs-5"
          }
          onClick={() => {
            setIndex(1);
          }}
        >
          <span className="tradingRecordTabs-4">
            {translate(getText("交易記錄"))}
          </span>
        </div>
        <div
          className={
            index === 2 ? "tradingRecordTabs-3" : "tradingRecordTabs-5"
          }
          onClick={() => {
            setIndex(2);
          }}
        >
          <span className="tradingRecordTabs-6">
            {translate(getText("創新記錄"))}
          </span>
        </div>
      </div>
    </div>
  );
}
