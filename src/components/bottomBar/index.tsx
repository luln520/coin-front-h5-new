import { Badge } from "antd";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LoginMsgContext } from "../../router/router";
import { getText } from "../../utils/util";
import "./index.css";

export default function BottomBar({ index }) {
  const { t: translate } = useTranslation();
  const [loginmsg, setloginmsg] = useContext(LoginMsgContext);
  const navigate = useNavigate();
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div className="bottomBar-1">
      <div
        className={index === 1 ? "bottomBar-2" : "bottomBar-7"}
        onClick={() => {
          navigate("/homecenter");
        }}
      >
        <div className="bottomBar-3">
          {index !== 1 && (
            <img alt="" src="/tabar/home.png" className="bottomBar-9" />
          )}
          {index === 1 && (
            <img
              alt=""
              src={`/tabar/home${companySkin}.png`}
              className="bottomBar-4"
            />
          )}
        </div>
        <div className="bottomBar-5">
          <span className="bottomBar-6">{translate(getText("主頁"))}</span>
        </div>
      </div>
      <div
        className={index === 2 ? "bottomBar-2" : "bottomBar-7"}
        onClick={() => {
          navigate("/market");
        }}
      >
        <div className="bottomBar-3">
          {index !== 2 && (
            <img alt="" src="/tabar/market.png" className="bottomBar-9" />
          )}
          {index === 2 && (
            <img
              alt=""
              src={`/tabar/market${companySkin}.png`}
              className="bottomBar-4"
            />
          )}
        </div>
        <div className="bottomBar-10">
          <span className="bottomBar-11">{translate(getText("市場"))}</span>
        </div>
      </div>
      <div
        className={index === 3 ? "bottomBar-2" : "bottomBar-7"}
        onClick={() => {
          navigate("/trade/btc");
        }}
      >
        <div className="bottomBar-3">
          {index !== 3 && (
            <img alt="" src="/tabar/trade.png" className="bottomBar-14" />
          )}
          {index === 3 && (
            <img
              alt=""
              src={`/tabar/trade${companySkin}.png`}
              className="bottomBar-4"
            />
          )}
        </div>
        <div className="bottomBar-15">
          <span className="bottomBar-16">{translate(getText("貿易"))}</span>
        </div>
      </div>
      <div
        className={index === 4 ? "bottomBar-2" : "bottomBar-7"}
        onClick={() => {
          navigate("/propertycenter");
        }}
      >
        <div className="bottomBar-3">
          {index !== 4 && (
            <img alt="" src="/tabar/property.png" className="bottomBar-19" />
          )}
          {index === 4 && (
            <img
              alt=""
              src={`/tabar/property${companySkin}.png`}
              className="bottomBar-4"
            />
          )}
        </div>
        <div className="bottomBar-20">
          <span className="bottomBar-21">{translate(getText("資產"))}</span>
        </div>
      </div>
      <div
        className={index === 5 ? "bottomBar-2" : "bottomBar-7"}
        onClick={() => {
          navigate("/mycenter");
        }}
      >
        <Badge
          count={
            (loginmsg?.userCount ? loginmsg?.userCount : 0) +
            (loginmsg?.noticeCount ? loginmsg?.noticeCount : 0)
          }
          offset={[10, 7]}
        >
          <div className="bottomBar-3">
            {index !== 5 && (
              <img alt="" src="/tabar/my.png" className="bottomBar-24" />
            )}
            {index === 5 && (
              <img
                alt=""
                src={`/tabar/my${companySkin}.png`}
                className="bottomBar-4"
              />
            )}
          </div>
        </Badge>
        <div className="bottomBar-25">
          <span className="bottomBar-26">{translate(getText("我的"))}</span>
        </div>
      </div>
    </div>
  );
}
