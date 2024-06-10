import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox({ loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div className="optionbox-1">
      <div
        className="optionbox-2"
        onClick={() => {
          navigate("/chatcenter");
        }}
      >
        <div className="optionbox-3">
          <div className="optionbox-4"></div>
          <img
            src="/ICON/1.png"
            
            className="optionbox-5"
          />
        </div>
        <p className="optionbox-6">{translate(getText("在線客服"))}</p>
      </div>
      <div
        className="optionbox-7"
        onClick={() => {
          navigate("/changelanguage");
        }}
      >
        <div className="optionbox-8">
          <div className="optionbox-9"></div>
          <img
            src="/ICON/3.png"
            
            className="optionbox-10"
          />
        </div>
        <p className="optionbox-11">{translate(getText("語言切換"))}</p>
      </div>
    </div>
  );
}
