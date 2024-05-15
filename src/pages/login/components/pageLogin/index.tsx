import { Popup } from "antd-mobile";
import {
  SafetyOutlined,
  MessageOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "../../../../i18n/i18n";
import { useTranslation, Trans } from "react-i18next";
import "./index.css";
import { changeLanguage, languages } from "../../../../i18n/i18n";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { Badge } from "antd";

export default function PageLogin({ doLogin, companyData, nologinmsg }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const appStatus = localStorage.getItem("appStatus");
  const [language, setLanguages] = useState(lan ? lan : "zh");
  const [passwordType, setPasswordType] = useState(true);
  const [loginData, setLoginData] = useState<any>({
    username: "",
    password: "",
  });
  return (
    <>
      <div className="loginbox-1">
        <div className="loginbox-2">
          <img
            alt=""
            src={imageConfig.baseImageUrl + companyData?.companyLogoName}
            className="loginbox-3"
          />
        </div>
        <div className="loginbox-4">
          <div className="loginbox-5">
            <div className="loginbox-6">
              <div className="loginbox-7">
                <div className="loginbox-8">
                  <input
                    type="text"
                    value={loginData.username}
                    placeholder={translate(
                      getText("請輸入您的電話號碼/電子郵件")
                    )}
                    className="loginbox-9"
                    onChange={(e) => {
                      setLoginData({ ...loginData, username: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="loginbox-10">
              <div className="loginbox-11">
                <div className="loginbox-12">
                  <input
                    type={passwordType && "password"}
                    value={loginData.password}
                    placeholder={translate(getText("請輸入密碼"))}
                    className="loginbox-13"
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value });
                    }}
                  />
                  <div
                    onClick={() => {
                      setPasswordType(!passwordType);
                    }}
                  >
                    <i
                      className={passwordType ? "iconEyeClose" : "iconEyeOpen"}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="loginbox-16"
            onClick={() => {
              doLogin(loginData);
            }}
          >
            {translate(getText("登錄"))}
          </div>
          <div className="loginbox-17">
            <div className="loginbox-18">
              <span
                className="loginbox-19"
                onClick={() => {
                  navigate("/register");
                }}
              >
                {translate(getText("快速註冊"))}
              </span>
              {appStatus == 1 && (
                <span
                  className="loginbox-19"
                  style={{
                    float: "right",
                  }}
                  onClick={() => {
                    navigate("/download");
                  }}
                >
                  App{(lan == "zh" ? "" : " ") + translate(getText("下載"))}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="loginbox-20">
          <div className="loginbox-21">{translate(getText("初始設定"))}</div>
        </div>
        <div className="loginbox-22">
          {/* <div
            className="loginbox-23"
            onClick={() => {
              setVisible(true);
            }}
          >
            <img alt="" src="/loginbox/yuyan.svg" className="loginbox-24" />
            <span className="loginbox-25">{translate(getText("語言"))}</span>
          </div> */}
          <div
            className="loginbox-27"
            onClick={() => {
              setVisible(true);
            }}
          >
            <GlobalOutlined
              className="loginbox-28"
              style={{
                color: "rgb(124, 124, 124)",
                fontSize: 16,
              }}
            />
            <span className="loginbox-29"> {translate(getText("語言"))} </span>
          </div>
          <span className="loginbox-26"></span>
          <div
            className="loginbox-27"
            onClick={() => {
              navigate("/murmurChat");
            }}
          >
            <Badge count={nologinmsg?.userCount} offset={[8, 0]}>
              <MessageOutlined
                className="loginbox-28"
                style={{
                  color: "rgb(124, 124, 124)",
                  fontSize: 16,
                }}
              />
            </Badge>
            <span className="loginbox-29">
              {translate(getText("在線客服"))}
            </span>
          </div>
          <span className="loginbox-26"></span>
          <div
            className="loginbox-27"
            onClick={() => {
              navigate("/reloadPassword");
            }}
          >
            <SafetyOutlined
              className="loginbox-28"
              style={{
                color: "rgb(124, 124, 124)",
                fontSize: 16,
              }}
            />
            <span className="loginbox-29">
              {translate(getText("更改密碼"))}
            </span>
          </div>
        </div>
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{ minHeight: "40vh" }}
      >
        <div className="poup-1">
          <div className="poup-2">{translate(getText("切換語言"))}</div>
          <div
            className="poup-3"
            onClick={() => {
              setVisible(false);
              //英语
              changeLanguage("en");
              setLanguages("en");
            }}
          >
            <span className="poup-4">English</span>
            {language === "en" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-5"
            onClick={() => {
              setVisible(false);
              //繁体中文
              changeLanguage("zh");
              setLanguages("zh");
            }}
          >
            <span className="poup-6">繁体中文</span>
            {language === "zh" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-8"
            onClick={() => {
              setVisible(false);
              //阿拉伯语
              changeLanguage("ar");
              setLanguages("ar");
            }}
          >
            <span className="poup-9">اللغة العربية</span>
            {language === "ar" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-10"
            onClick={() => {
              setVisible(false);
              //日语
              changeLanguage("ja");
              setLanguages("ja");
            }}
          >
            <span className="poup-11">日本語</span>
            {language === "ja" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-12"
            onClick={() => {
              setVisible(false);
              //越南语
              changeLanguage("vi");
              setLanguages("vi");
            }}
          >
            <span className="poup-13">Tiếng Việt</span>
            {language === "vi" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-14"
            onClick={() => {
              setVisible(false);
              //西班牙语
              changeLanguage("es");
              setLanguages("es");
            }}
          >
            <span className="poup-15">Español</span>
            {language === "es" && <i className="poup-7"></i>}
          </div>
          {/* #################### */}

          <div
            className="poup-14"
            onClick={() => {
              setVisible(false);
              //德语
              changeLanguage("de");
              setLanguages("de");
            }}
          >
            <span className="poup-15">Deutsch</span>
            {language === "de" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-14"
            onClick={() => {
              setVisible(false);
              //法语
              changeLanguage("fr");
              setLanguages("fr");
            }}
          >
            <span className="poup-15">Français</span>
            {language === "fr" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-14"
            onClick={() => {
              setVisible(false);
              //意大利语
              changeLanguage("it");
              setLanguages("it");
            }}
          >
            <span className="poup-15">Italiano</span>
            {language === "it" && <i className="poup-7"></i>}
          </div>
          <div
            className="poup-14"
            onClick={() => {
              setVisible(false);
              //葡萄牙语
              changeLanguage("pt");
              setLanguages("pt");
            }}
          >
            <span className="poup-15">Português</span>
            {language === "pt" && <i className="poup-7"></i>}
          </div>
        </div>
      </Popup>
    </>
  );
}
