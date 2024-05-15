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
      <div className="optionbox-2">
        <span
          className="optionbox-3"
          onClick={() => {
            navigate("/rechargelist");
          }}
        >
          <div className="optionbox-4">
            <div className="optionbox-5">
              <img
                src={`/home/tb1_${companySkin}.png`}
                className="optionbox-6"
              />
            </div>
            <div className="optionbox-7">
              <span className="optionbox-8">{translate(getText("訂金"))}</span>
            </div>
          </div>
        </span>

        <span
          className="optionbox-9"
          onClick={() => {
            navigate("/extractlist");
          }}
        >
          <div className="optionbox-10">
            <div className="optionbox-11">
              <img
                src={`/home/tb2_${companySkin}.png`}
                className="optionbox-6"
              />
            </div>
            <div className="optionbox-13">
              <span className="optionbox-14">{translate(getText("提取"))}</span>
            </div>
          </div>
        </span>

        <span
          className="optionbox-15"
          onClick={() => {
            navigate("/market?index=1");
          }}
        >
          <div className="optionbox-16">
            <div className="optionbox-17">
              <img
                src={`/home/tb3_${companySkin}.png`}
                className="optionbox-6"
              />
            </div>
            <div className="optionbox-19">
              <span className="optionbox-20">{translate(getText("合约"))}</span>
            </div>
          </div>
        </span>

        <span
          className="optionbox-21"
          onClick={() => {
            navigate("/lockUpCenter");
          }}
        >
          <div className="optionbox-22">
            <div className="optionbox-23">
              <img
                src={`/home/tb4_${companySkin}.png`}
                className="optionbox-6"
              />
            </div>
            <div className="optionbox-25">
              <span className="optionbox-26">{translate(getText("挖礦"))}</span>
            </div>
          </div>
        </span>

        <span
          className="optionbox-27"
          onClick={() => {
            navigate("/chat");
          }}
        >
          <div className="optionbox-28">
            <div className="optionbox-29">
              <Badge count={loginmsg?.userCount}>
                <img
                  src={`/home/tb5_${companySkin}.png`}
                  className="optionbox-6"
                />
              </Badge>
            </div>
            <div className="optionbox-31">
              <span className="optionbox-32">
                {translate(getText("在線客服"))}
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
