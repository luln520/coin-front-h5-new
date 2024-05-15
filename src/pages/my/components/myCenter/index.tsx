import { useNavigate } from "react-router-dom";
import copy from "copy-to-clipboard";
import { MobileOutlined } from "@ant-design/icons";
import "./index.css";
import { Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { Badge } from "antd";

export default function MyCenter({ userInfo, companyData, loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const inviteType = localStorage.getItem("inviteType");
  const lan = localStorage.getItem("i18n");
  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  return (
    <div className="my-1">
      <div className="my-2">
        <div className="my-3">
          <div className="my-4">
            <img
              alt=""
              src={imageConfig.baseImageUrl + companyData?.companyLogo}
              className="my-5"
            />
          </div>
        </div>
        <div className="my-6">
          <div className="my-7">
            <b className="my-8">
              {`${userInfo?.username}`.replace("undefined", "").split("@")[0]}
            </b>
          </div>
          {inviteType == 1 && (
            <div className="my-9">
              <div className="my-10">
                {translate(getText("邀請代碼"))}:{userInfo?.invit}
              </div>
              <img
                alt=""
                src="/my/copy.svg"
                data-clipboard-text="5293414"
                className="my-11"
                onClick={() => {
                  handleCopy(userInfo?.invit);
                }}
              />
            </div>
          )}
          <div className="my-9">
            <div className="my-10">
              {translate(getText("用户"))} id:{userInfo?.userCode}
            </div>
            <img
              alt=""
              src="/my/copy.svg"
              data-clipboard-text="5293414"
              className="my-11"
              onClick={() => {
                handleCopy(userInfo?.userCode);
              }}
            />
          </div>
          <div className="my-9">
            <div className="my-10">
              {translate(getText("信用評級"))}:{userInfo?.jifen}
            </div>
          </div>
        </div>
        <div
          className="my-12"
          onClick={() => {
            navigate("/chat");
          }}
        >
          <img alt="" src="/my/icon_service.svg" className="my-13" />

          <span className="my-14">
            <Badge count={loginmsg?.userCount} offset={[10, 0]}>
              {translate(getText("服務"))}{" "}
            </Badge>
          </span>
        </div>
      </div>
      <div>
        <img
          alt=""
          src="/my/banner.png"
          className="my-15"
          onClick={() => {
            navigate("/chat");
          }}
        />
      </div>
      <div className="my-16">
        <div role="button" className="my-17">
          <i className="my-18">
            <img alt="" src="/my/jyjl.svg" className="my-19" />
          </i>
          <div
            className="my-20"
            onClick={() => {
              navigate("/jyjl");
            }}
          >
            <span className="my-21">{translate(getText("交易記錄"))}</span>
          </div>
          <i className="my-22"></i>
        </div>
        <div role="button" className="my-17">
          <i className="my-18">
            <img alt="" src="/my/renzheng.svg" className="my-19" />
          </i>
          <div
            className="my-20"
            onClick={() => {
              navigate("/idcardCenter");
            }}
          >
            <span className="my-21">{translate(getText("高級認證"))}</span>
          </div>
          <i className="my-22"></i>
        </div>
        <div role="button" className="my-41">
          <i className="my-42">
            <img alt="" src="/my/securityCenter.svg" className="my-43-2" />
          </i>
          <div
            className="my-44"
            onClick={() => {
              navigate("/securitycenter");
            }}
          >
            <span className="my-45-1">{translate(getText("安全中心"))}</span>
          </div>
          <i className="my-46"></i>
        </div>
        <div role="button" className="my-23">
          <i className="my-24">
            <img alt="" src="/my/message_list.svg" className="my-25" />
          </i>
          <div
            className="my-26"
            onClick={() => {
              navigate("/noice");
            }}
          >
            <span className="my-27">
              {translate(getText("留言列表"))}
              <Badge
                count={loginmsg?.noticeCount ? loginmsg?.noticeCount : 0}
                offset={[8, 0]}
              >
                &nbsp;
              </Badge>
            </span>
          </div>
          <i className="my-28"></i>
        </div>
        <div role="button" className="my-29">
          <i className="my-30">
            <img alt="" src="/my/serve_my.svg" className="my-31" />
          </i>
          <div
            className="my-32"
            onClick={() => {
              navigate("/chat");
            }}
          >
            <span className="my-33">{translate(getText("服務"))}</span>
          </div>
          <i className="my-34"></i>
        </div>
        <div role="button" className="my-35">
          <i className="my-36">
            <img alt="" src="/my/help_my.svg" className="my-37" />
          </i>
          <div
            className="my-38"
            onClick={() => {
              navigate("/help");
            }}
          >
            <span className="my-39">{translate(getText("幫助中心"))}</span>
          </div>
          <i className="my-40"></i>
        </div>
        <div role="button" className="my-41">
          <i className="my-42">
            <img alt="" src="/my/set_my.svg" className="my-43" />
          </i>
          <div
            className="my-44"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <span className="my-45">{translate(getText("設置"))}</span>
          </div>
          <i className="my-46"></i>
        </div>
        {/* <div role="button" className="my-41">
          <i className="my-42">
            <img alt="" src="/my/phone.svg" className="my-43-1" />
          </i>
          <div
            className="my-44"
            onClick={() => {
              navigate("/download");
            }}
          >
            <span className="my-45">App{(lan=='zh'?'':" ")+translate(getText("下載"))}</span>
          </div>
          <i className="my-46"></i>
        </div> */}
      </div>
      <div
        className="my-47"
        onClick={() => {
          localStorage.removeItem("uid");
          localStorage.removeItem("username");
          localStorage.removeItem("x-access-token");
          navigate("/login");
        }}
      >
        <span className="my-48">{translate(getText("登出"))}</span>
      </div>
    </div>
  );
}
