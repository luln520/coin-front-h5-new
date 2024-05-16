import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox2({ loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div className="optionbox2-1">
      <div
        className="optionbox2-2"
        onClick={() => {
          navigate("/rechargelist");
        }}
      >
        <div className="optionbox2-3">
          <span className="optionbox2-4">快捷充幣</span>
          <p className="optionbox2-5">支持</p>
          <p className="optionbox2-6">BTC,USDT,ETH等</p>
        </div>
      </div>
      <div className="optionbox2-7">
        <div className="optionbox2-8">
          <div className="optionbox2-9">
            <div className="optionbox2-10"></div>
            <img
              src="https://www.btexure.vip/static/ICON/home/13.png"
              draggable="true"
              className="optionbox2-11"
            />
          </div>
          <p className="optionbox2-12">期貨交易</p>
        </div>
        <div
          className="optionbox2-13"
          onClick={() => {
            navigate("/helplist");
          }}
        >
          <div className="optionbox2-14">
            <div className="optionbox2-15"></div>
            <img
              src="https://www.btexure.vip/static/ICON/home/14.png"
              draggable="true"
              className="optionbox2-16"
            />
          </div>
          <p className="optionbox2-17">幫助中心</p>
        </div>
      </div>
    </div>
  );
}
