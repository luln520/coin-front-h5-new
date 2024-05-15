import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";

export default function PageRegister({
  doEditpassword,
  areas,
  sendSMS,
  show60,
  setShow60,
  companyData,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [isPhone, setIsPhone] = useState(false);
  const [area, setArea] = useState({} as any);
  const [passwordType1, setPasswordType1] = useState(true);
  const [passwordType2, setPasswordType2] = useState(true);
  const [passwordType3, setPasswordType3] = useState(true);
  const [passwordType4, setPasswordType4] = useState(true);
  const dropdownRef = useRef<DropdownRef>();
  const [time, setTime] = useState(60);
  const lan = localStorage.getItem("i18n");
  const inviteType = localStorage.getItem("inviteType");
  let timeTemp = 60;
  let timer;

  //发送数据
  const [sendData, setSendData] = useState({
    type: 2,
    username: "",
    password: "",
    repassword: "",
    regcode: "",
    invit: "",
    area: areas[0],
  });
  //切换选项
  const changeType = (type: number) => {
    setSendData({
      type: type,
      username: "",
      password: "",
      repassword: "",
      regcode: "",
      invit: "",
      area: areas[0],
    });
  };

  //修改数据
  const updateSendData = (e) => {
    const name = e.target.name;
    setSendData({
      ...sendData,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    setArea(areas[0]);
  }, [areas]);

  useEffect(() => {
    if (show60) {
      timer = setInterval(() => {
        if (timeTemp <= 1) {
          timeTemp = 60;
        }
        timeTemp = timeTemp - 1;
        setTime(timeTemp);
        if (timeTemp === 1) {
          setShow60(false);
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => {
      // clearInterval(timer);
      // setShow60(false);
    };
  }, [show60]);

  return (
    <>
      <div className="register-1">
        <div className="register-2">
          <i className="register-3"></i>
        </div>
        <div className="register-4">
          <div className="register-5">
            <img
              alt=""
              src={imageConfig.baseImageUrl + companyData?.companyLogoName}
              className="register-6"
            />
          </div>
        </div>
        <div className="register-7">
          <div className="register-8">
            <div className="register-9">
              <div className="register-10">
                <div
                  className={!isPhone ? "register-13" : "register-11"}
                  onClick={() => {
                    setIsPhone(false);
                    setPasswordType1(true);
                    setPasswordType2(true);
                    setPasswordType3(true);
                    setPasswordType4(true);
                    changeType(2);
                  }}
                >
                  <span className="register-14">
                    {translate(getText("電子郵件验证"))}
                  </span>
                </div>
                <div
                  className={isPhone ? "register-13" : "register-11"}
                  onClick={() => {
                    setIsPhone(true);
                    setPasswordType1(true);
                    setPasswordType2(true);
                    setPasswordType3(true);
                    setPasswordType4(true);
                    changeType(1);
                  }}
                >
                  <span className="register-12">
                    {translate(getText("手機號碼验证"))}
                  </span>
                </div>
                <div className="register-15"></div>
              </div>
            </div>
            {/* 邮箱注册 */}
            {!isPhone && (
              <div className="register-16">
                <div role="tabpanel" className="register-17"></div>
                <div role="tabpanel" className="register-18">
                  <div className="register-19">
                    <div className="register-20">
                      <div className="register-21">
                        <div className="register-22">
                          <i className="register-23"></i>
                        </div>
                        <div className="register-24">
                          <div className="register-25">
                            <input
                              type="text"
                              name="username"
                              value={sendData.username}
                              placeholder={translate(
                                getText("請輸入您的電子郵件")
                              )}
                              className="register-26"
                              onChange={updateSendData}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="register-27">
                        <div className="register-28">
                          <i className="register-29"></i>
                        </div>
                        <div className="register-30">
                          <div className="register-31">
                            <input
                              type="text"
                              name="regcode"
                              value={sendData.regcode}
                              placeholder={translate(getText("請輸入驗證碼"))}
                              className="register-32"
                              onChange={updateSendData}
                            />
                            <div className="register-33">
                              <button
                                className="register-34"
                                onClick={() => {
                                  if (show60) {
                                    return;
                                  }
                                  const data = { ...sendData };
                                  data.area = area?.internationalAreaCode;
                                  sendSMS(data);
                                }}
                              >
                                <div className="register-35">
                                  <span className="register-36">
                                    {!show60 &&
                                      translate(getText("發送驗證碼"))}
                                    {show60 && `${time}s`}
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="register-37">
                        <div className="register-38">
                          <i className="register-39"></i>
                        </div>
                        <div className="register-40">
                          <div className="register-41">
                            <input
                              type={passwordType1 && "password"}
                              name="password"
                              value={sendData.password}
                              placeholder={translate(getText("請輸入密碼"))}
                              className="register-42"
                              onChange={updateSendData}
                            />
                            <div
                              onClick={() => {
                                setPasswordType1(!passwordType1);
                              }}
                            >
                              <i
                                className={
                                  passwordType1 ? "iconEyeClose" : "iconEyeOpen"
                                }
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="register-45">
                        <div className="register-46">
                          <i className="register-47"></i>
                        </div>
                        <div className="register-48">
                          <div className="register-49">
                            <input
                              type={passwordType2 && "password"}
                              name="repassword"
                              value={sendData.repassword}
                              placeholder={translate(getText("請輸入密碼"))}
                              className="register-50"
                              onChange={updateSendData}
                            />
                            <div
                              onClick={() => {
                                setPasswordType2(!passwordType2);
                              }}
                            >
                              <i
                                className={
                                  passwordType2 ? "iconEyeClose" : "iconEyeOpen"
                                }
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* {inviteType == 1 && (
                        <div className="register-53">
                          <div className="register-54">
                            <i className="register-55"></i>
                          </div>
                          <div className="register-56">
                            <div className="register-57">
                              <input
                                type="text"
                                name="invit"
                                value={sendData.invit}
                                placeholder={translate(getText("請輸入邀請碼"))}
                                className="register-58"
                                onChange={updateSendData}
                              />
                            </div>
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* 手机号 */}
            {isPhone && (
              <div className="registerPhone-1">
                <div role="tabpanel" className="registerPhone-2">
                  <div className="registerPhone-3">
                    <div className="registerPhone-4">
                      <div className="registerPhone-5">
                        <div
                          style={{
                            height: "30px",
                            marginTop: "-10px",
                            width: "70px",
                          }}
                        >
                          <Dropdown ref={dropdownRef} closeOnClickAway={true}>
                            <Dropdown.Item
                              key="sorter"
                              title={`+ ${area && area?.internationalAreaCode}`}
                            >
                              <div
                                style={{
                                  padding: "12px 20px",
                                  height: "300px",
                                  overflow: "hidden",
                                  overflowY: "scroll",
                                }}
                              >
                                {areas.map((data) => (
                                  <div
                                    key={data.id}
                                    onClick={() => {
                                      setArea(data);
                                      dropdownRef.current?.close();
                                    }}
                                  >
                                    {localStorage.getItem("i18n") == "zh"
                                      ? data.nameZh
                                      : data.nameEn}
                                    <span
                                      style={{
                                        float: "right",
                                        marginRight: "30px",
                                      }}
                                    >
                                      +{data.internationalAreaCode}
                                    </span>
                                    <Divider />
                                  </div>
                                ))}
                              </div>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                        <div className="registerPhone-15">
                          <div className="registerPhone-16">
                            <input
                              type="text"
                              name="username"
                              value={sendData.username}
                              placeholder={translate(getText("請輸入電話號碼"))}
                              className="registerPhone-17"
                              onChange={updateSendData}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="registerPhone-18">
                        <div className="registerPhone-19">
                          <i className="registerPhone-20"></i>
                        </div>
                        <div className="registerPhone-21">
                          <div className="registerPhone-22">
                            <input
                              type="text"
                              name="regcode"
                              value={sendData.regcode}
                              placeholder={translate(getText("請輸入驗證碼"))}
                              className="registerPhone-23"
                              onChange={updateSendData}
                            />
                            <div className="registerPhone-24">
                              <button
                                className="registerPhone-25"
                                onClick={() => {
                                  if (show60) {
                                    return;
                                  }
                                  const data = { ...sendData };
                                  if (data.type === 1) {
                                    data.area = area?.internationalAreaCode;
                                  }
                                  sendSMS(data);
                                }}
                              >
                                <div className="registerPhone-26">
                                  <span className="registerPhone-27">
                                    {!show60 &&
                                      translate(getText("發送驗證碼"))}
                                    {show60 && `${time}s`}
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="registerPhone-28">
                        <div className="registerPhone-29">
                          <i className="registerPhone-30"></i>
                        </div>
                        <div className="registerPhone-31">
                          <div className="registerPhone-32">
                            <input
                              type={passwordType3 && "password"}
                              name="password"
                              value={sendData.password}
                              placeholder={translate(getText("請輸入密碼"))}
                              className="registerPhone-33"
                              onChange={updateSendData}
                            />
                            <div
                              onClick={() => {
                                setPasswordType3(!passwordType3);
                              }}
                            >
                              <i
                                className={
                                  passwordType3 ? "iconEyeClose" : "iconEyeOpen"
                                }
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="registerPhone-36">
                        <div className="registerPhone-37">
                          <i className="registerPhone-38"></i>
                        </div>
                        <div className="registerPhone-39">
                          <div className="registerPhone-40">
                            <input
                              type={passwordType4 && "password"}
                              name="repassword"
                              value={sendData.repassword}
                              placeholder={translate(getText("請輸入密碼"))}
                              className="registerPhone-41"
                              onChange={updateSendData}
                            />
                            <div
                              onClick={() => {
                                setPasswordType4(!passwordType4);
                              }}
                            >
                              <i
                                className={
                                  passwordType4 ? "iconEyeClose" : "iconEyeOpen"
                                }
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* {inviteType == 1 && (
                        <div className="registerPhone-44">
                          <div className="registerPhone-45">
                            <i className="registerPhone-46"></i>
                          </div>
                          <div className="registerPhone-47">
                            <div className="registerPhone-48">
                              <input
                                type="text"
                                name="invit"
                                value={sendData.invit}
                                placeholder={translate(getText("請輸入邀請碼"))}
                                className="registerPhone-49"
                                onChange={updateSendData}
                              />
                            </div>
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="register-59"
            onClick={() => {
              const data = { ...sendData };
              if (data.type === 1) {
                data.area = area?.internationalAreaCode;
              }
              data.phoneEmail=data.username;
              doEditpassword(data);
            }}
          >
            <div className="register-60">
              <span className="register-61">
                {translate(getText("更改密碼"))}
              </span>
            </div>
          </button>
        </div>
        <div className="register-62">
          {/* <span className="register-63">{translate(getText("已注册"))}？</span>
          <span
            className="register-64"
            onClick={() => {
              navigate("/login");
            }}
          >
            {translate(getText("去登入"))}
          </span> */}

          {/* <span
            className="register-64"
            style={{
              float: "right",
            }}
            onClick={() => {
              navigate("/download");
            }}
          >
            App{(lan == "zh" ? "" : " ") + translate(getText("下載"))}
          </span> */}
        </div>
      </div>
    </>
  );
}
