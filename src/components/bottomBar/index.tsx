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
      <div className="bottomBar-2">
        <div className="bottomBar-3"></div>
        <div
          className="bottomBar-4"
          onClick={() => {
            navigate("/homecenter");
          }}
        >
          <div className="bottomBar-5">
            <div className="bottomBar-6">
              {index == 1 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/2.png"
                  className="bottomBar-7"
                />
              )}
              {index != 1 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/1.png"
                  className="bottomBar-7"
                />
              )}
            </div>
            <div className={index == 1 ? "bottomBar-8" : "bottomBar-13"}>
              {translate(getText("首頁"))}
            </div>
          </div>
        </div>
        <div
          className="bottomBar-9"
          onClick={() => {
            navigate("/quotation");
          }}
        >
          <div className="bottomBar-10">
            <div className="bottomBar-11">
              {index == 2 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/4.png"
                  className="bottomBar-7"
                />
              )}
              {index != 2 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/3.png"
                  className="bottomBar-12"
                />
              )}
            </div>
            <div className={index == 2 ? "bottomBar-8" : "bottomBar-13"}>
              {translate(getText("行情"))}
            </div>
          </div>
        </div>
        <div
          className="bottomBar-14"
          onClick={() => {
            navigate("/trade/btc");
          }}
        >
          <div className="bottomBar-15">
            <div className="bottomBar-16">
              {index == 3 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/6.png"
                  className="bottomBar-17"
                />
              )}
              {index != 3 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/5.png"
                  className="bottomBar-17"
                />
              )}
            </div>
            <div className={index == 3 ? "bottomBar-8" : "bottomBar-13"}>
              {translate(getText("交易"))}
            </div>
          </div>
        </div>
        <div
          className="bottomBar-19"
          onClick={() => {
            navigate("/propertycenter");
          }}
        >
          <div className="bottomBar-20">
            <div className="bottomBar-21">
              {index == 4 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/16.png"
                  className="bottomBar-17"
                />
              )}
              {index != 4 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/15.png"
                  className="bottomBar-17"
                />
              )}
            </div>
            <div className={index == 4 ? "bottomBar-8" : "bottomBar-13"}>
              {translate(getText("資產"))}
            </div>
          </div>
        </div>
        <div
          className="bottomBar-24"
          onClick={() => {
            navigate("/mycenter");
          }}
        >
          <div className="bottomBar-25">
            <div className="bottomBar-26">
              {index == 5 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/10.png"
                  className="bottomBar-17"
                />
              )}
              {index != 5 && (
                <img
                  src="https://www.btexure.vip/static/ICON/home/9.png"
                  className="bottomBar-27"
                />
              )}
            </div>
            <div className={index == 5 ? "bottomBar-8" : "bottomBar-13"}>
              {translate(getText("我的"))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
