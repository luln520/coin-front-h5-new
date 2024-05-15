import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";

export default function PageRegister({
  doRegister,
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
  const appStatus = localStorage.getItem("appStatus");
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
    <div id="registercenter" class="registercenter-1">
      <div class="registercenter-2">
        <div class="registercenter-3">
          <div class="registercenter-4"></div>
          <div class="registercenter-5">
            <div
              class={isPhone ? "registercenter-6" : "registercenter-8"}
              onClick={() => {
                setIsPhone(true);
              }}
            >
              <span class="registercenter-7">手機註冊</span>
            </div>
            <div
              class={!isPhone ? "registercenter-6" : "registercenter-8"}
              onClick={() => {
                setIsPhone(false);
              }}
            >
              <span class="registercenter-9">郵箱註冊</span>
            </div>
          </div>
          <div class="registercenter-10">
            <div class="registercenter-11">
              <div class="registercenter-12"></div>
              <img
                src="https://www.btexure.vip/static/img/kf.png"
                draggable="true"
                class="registercenter-13"
              />
            </div>
          </div>
          {/* 手机 */}
          {isPhone && (
            <div class="registercenter-14">
              <ul class="registercenter-15">
                <li class="registercenter-16">
                  <div class="registercenter-17">
                    <div class="registercenter-18">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type=""
                        class="registercenter-20"
                        placeholder="請輸入手機號碼"
                      />
                    </div>
                  </div>
                </li>
                <li class="registercenter-21">
                  <div class="registercenter-22">
                    <div class="registercenter-23">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type=""
                        class="registercenter-25"
                        placeholder="請輸入驗證碼"
                      />
                    </div>
                  </div>
                  <div class="registercenter-26">
                    <div canvas-id="imgcanvas" class="registercenter-27">
                      <canvas
                        width="360"
                        height="135"
                        class="registercenter-28"
                      ></canvas>
                      <div class="registercenter-29"></div>
                      <div class="registercenter-30">
                        <div class="registercenter-31">
                          <div class="registercenter-32"></div>
                        </div>
                        <div class="registercenter-33">
                          <div class="registercenter-34"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="registercenter-35">
                  <div class="registercenter-36">
                    <div class="registercenter-37">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type="password"
                        class="registercenter-39"
                        placeholder="請輸入密碼"
                      />
                    </div>
                  </div>
                  <div class="registercenter-40">
                    <div class="registercenter-41"></div>
                    <img
                      src="https://www.btexure.vip/static/img/login_btn_eye_close.png"
                      draggable="true"
                      class="registercenter-42"
                    />
                  </div>
                </li>
                <li class="registercenter-43">
                  <div class="registercenter-44">
                    <div class="registercenter-45">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type="password"
                        class="registercenter-47"
                        placeholder="請輸入密碼"
                      />
                    </div>
                  </div>
                  <div class="registercenter-48">
                    <div class="registercenter-49"></div>
                    <img
                      src="https://www.btexure.vip/static/img/login_btn_eye_close.png"
                      draggable="true"
                      class="registercenter-50"
                    />
                  </div>
                </li>
                <li class="registercenter-51">
                  <div class="registercenter-52">
                    <div class="registercenter-53">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type=""
                        class="registercenter-55"
                        placeholder="請輸入邀請碼(必填)"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {/* 邮箱 */}
          {!isPhone && (
            <div class="registercenter-14">
              <ul class="registercenter-15">
                <li class="registercenter-16">
                  <div class="registercenter-17-1">
                    <div class="registercenter-18">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type=""
                        class="registercenter-20"
                        placeholder="請輸入郵件地址"
                      />
                    </div>
                  </div>
                </li>
                <li class="registercenter-21">
                  <div class="registercenter-22">
                    <div class="registercenter-23">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type=""
                        class="registercenter-25"
                        placeholder="請輸入驗證碼"
                      />
                    </div>
                  </div>
                  <div class="registercenter-26">
                    <div canvas-id="imgcanvas" class="registercenter-27">
                      <canvas
                        width="360"
                        height="135"
                        class="registercenter-28"
                      ></canvas>
                      <div class="registercenter-29"></div>
                      <div class="registercenter-30">
                        <div class="registercenter-31">
                          <div class="registercenter-32"></div>
                        </div>
                        <div class="registercenter-33">
                          <div class="registercenter-34"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="registercenter-35">
                  <div class="registercenter-36">
                    <div class="registercenter-37">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type="password"
                        class="registercenter-39"
                        placeholder="請輸入密碼"
                      />
                    </div>
                  </div>
                  <div class="registercenter-40">
                    <div class="registercenter-41"></div>
                    <img
                      src="https://www.btexure.vip/static/img/login_btn_eye_close.png"
                      draggable="true"
                      class="registercenter-42"
                    />
                  </div>
                </li>
                <li class="registercenter-43">
                  <div class="registercenter-44">
                    <div class="registercenter-45">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type="password"
                        class="registercenter-47"
                        placeholder="請輸入密碼"
                      />
                    </div>
                  </div>
                  <div class="registercenter-48">
                    <div class="registercenter-49"></div>
                    <img
                      src="https://www.btexure.vip/static/img/login_btn_eye_close.png"
                      draggable="true"
                      class="registercenter-50"
                    />
                  </div>
                </li>
                <li class="registercenter-51">
                  <div class="registercenter-52">
                    <div class="registercenter-53">
                      <input
                        maxlength="140"
                        step=""
                        enterkeyhint="done"
                        autocomplete="off"
                        type=""
                        class="registercenter-55"
                        placeholder="請輸入邀請碼(必填)"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {/* 提交 */}
          <div class="registercenter-14">
            <ul class="registercenter-15">
              <li class="registercenter-57">
                <div class="registercenter-58">立即註冊</div>
                <div class="registercenter-59">登錄</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
