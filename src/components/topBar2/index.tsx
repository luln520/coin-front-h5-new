import { Divider, Dropdown, DropdownRef } from "antd-mobile";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { changeLanguage, languages } from "../../i18n/i18n";
import { imageConfig } from "../../config/config";

export default function TopBar2({ companyData }) {
  const navigate = useNavigate();
  const dropdownRef = useRef<DropdownRef>();
  const lan = localStorage.getItem("i18n");
  const [language, setLanguages] = useState(lan ? lan : "zh");
  return (
    <div className="topBar2-1">
      <div className="topBar2-2">
        <div className="topBar2-3">
          <div className="topBar2-4">
            <div className="topBar2-5">
              <img
                alt=""
                src={imageConfig.baseImageUrl + companyData?.companyLogoName}
                className="topBar2-6"
              />
            </div>
          </div>
          <div className="topBar2-7"></div>
          <div className="topBar2-8">
            <div className="topBar2-9">
              <div className="topBar2-10">
                <div
                  className="topBar2-11"
                  style={{ color: "black", marginTop: "-2px" }}
                >
                  <Dropdown ref={dropdownRef} closeOnClickAway={true}>
                    <Dropdown.Item
                      key="sorter"
                      title={
                        <span
                          style={{
                            color: "black",
                          }}
                        >
                          {languages[language]}
                        </span>
                      }
                    >
                      <div
                        style={{
                          padding: "12px 20px",
                          overflow: "hidden",
                          overflowY: "scroll",
                        }}
                      >
                        <div className="poup-1">
                          <div
                            className="poup-3"
                            onClick={() => {
                              //setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
                              //西班牙语
                              changeLanguage("es");
                              setLanguages("es");
                            }}
                          >
                            <span className="poup-15">Español</span>
                            {language === "es" && <i className="poup-7"></i>}
                          </div>

                          {/* ///////////////////////////// */}
                          <div
                            className="poup-14"
                            onClick={() => {
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
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
                              // setVisible(false);
                              dropdownRef.current?.close();
                              //葡萄牙语
                              changeLanguage("pt");
                              setLanguages("pt");
                            }}
                          >
                            <span className="poup-15">Português</span>
                            {language === "pt" && <i className="poup-7"></i>}
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
