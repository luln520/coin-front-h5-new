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
        <div className="bottomBar-4">
          <div className="bottomBar-5">
            <div className="bottomBar-6">
              <img src="https://www.btexure.vip/static/ICON/home/2.png" className="bottomBar-7" />
            </div>
            <div className="bottomBar-8">首頁</div>
          </div>
        </div>
        <div className="bottomBar-9">
          <div className="bottomBar-10">
            <div className="bottomBar-11">
              <img src="https://www.btexure.vip/static/ICON/home/3.png" className="bottomBar-12" />
            </div>
            <div className="bottomBar-13">行情</div>
          </div>
        </div>
        <div className="bottomBar-14">
          <div className="bottomBar-15">
            <div className="bottomBar-16">
              <img src="https://www.btexure.vip/static/ICON/home/5.png" className="bottomBar-17" />
            </div>
            <div className="bottomBar-18">交易</div>
          </div>
        </div>
        <div className="bottomBar-19">
          <div className="bottomBar-20">
            <div className="bottomBar-21">
              <img src="https://www.btexure.vip/static/ICON/home/15.png" className="bottomBar-22" />
            </div>
            <div className="bottomBar-23">資產</div>
          </div>
        </div>
        <div className="bottomBar-24">
          <div className="bottomBar-25">
            <div className="bottomBar-26">
              <img src="https://www.btexure.vip/static/ICON/home/9.png" className="bottomBar-27" />
            </div>
            <div className="bottomBar-28">我的</div>
          </div>
        </div>
      </div>
      <div className="bottomBar-29"></div>
    </div>
  );
}
