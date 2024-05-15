import React from "react";
import Fingerprint2 from "fingerprintjs2";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router/router";
import "./i18n/i18n";
import { companyApi } from "./api/company";
import { imageConfig } from "./config/config";
import { changeCompanyData } from "./utils/util";
import { onlineApi } from "./api/online-api";
import { userApi } from "./api/user-api";
import { kuangjiApi } from "./api/kuangm-api";
import { localClear } from "./utils/local-util";
import { Toast } from "antd-mobile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//初始化获取公司
async function initCompany() {
  let res = await companyApi.domain();
  if (res.data) {
    //公司id
    localStorage.setItem("companyId", res.data.id);
    localStorage.setItem("title", res.data.companyName);
    localStorage.setItem("inviteType", res.data.inviteType);
    localStorage.setItem("companySkin", res.data?.companySkin);
    localStorage.setItem("appStatus", res.data?.appStatus);
    localStorage.setItem("c2ctxStatus", res.data?.c2ctxStatus);
    changeCompanyData(res.data);
  }
}
//指纹生成
async function fingerMake() {
  Fingerprint2.get(function (components) {
    const values = components.map(function (component, index) {
      if (index === 0) {
        //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
        return component.value.replace(/\bNetType\/\w+\b/, "");
      }
      return component.value;
    });
    const murmur = Fingerprint2.x64hash128(values.join(""), 31);
    if (!localStorage.getItem("murmur")) {
      localStorage.setItem("murmur", murmur);
    }
  });
}

//验证token是否失效
async function getUserInfo() {
  let res = await kuangjiApi.pcList({ pageNum: 1, pageSize: 200 });
  if (res.code != 0) {
    Toast.show({ content: "Please login" });
    localClear();
  }
}

//公司 记载完成后再渲染页面
// initCompany()
//   .then(() => {
//     root.render(<AppRouter></AppRouter>);
//   })
//   .catch(() => {
//     root.render(<AppRouter></AppRouter>);
//   });
root.render(<AppRouter></AppRouter>);
//指纹
fingerMake();
//有效登陆判断
// getUserInfo();
// setInterval(() => {
//   getUserInfo();
// }, 30000);
