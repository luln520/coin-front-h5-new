import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function Tabs({ index, setIndex }) {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="tabs-1">
      <div className="tabs-2">
        <div
          className={index === 1 ? "tabs-7" : "tabs-5"}
          onClick={() => {
            setIndex(1);
          }}
        >
          <span className="tabs-4">{translate(getText("合约"))}</span>
        </div>
        <div
          className={index === 2 ? "tabs-7" : "tabs-5"}
          onClick={() => {
            // navigate("/lockUpCenter");
            setIndex(2);
          }}
        >
          <span className="tabs-6">{translate(getText("挖礦"))}</span>
        </div>
        <div
          className={index === 3 ? "tabs-7" : "tabs-5"}
          onClick={() => {
            // navigate("/lever/btc?isPop=1");
            setIndex(3);
          }}
        >
          <span className="tabs-8">{translate(getText("槓桿"))}</span>
        </div>
      </div>
    </div>
  );
}
