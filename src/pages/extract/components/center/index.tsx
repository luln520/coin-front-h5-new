import { Card, Divider, Popup, Toast } from "antd-mobile";
import { SwapOutlined } from "@ant-design/icons";
import { Image, Upload, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcodejs2";
import "./index.css";
import { imageConfig } from "../../../../config/config";
import copy from "copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Center2({
  coinList,
  tbhandle,
  use,
  setUse,
  coinPriceData,
  userInfo,
  addressList,
}) {
  const navigate = useNavigate();
  const [addrId, setAddrId] = useState(0);
  const [img, setImg] = useState("");
  const [num, setNum] = useState("");
  const { t: translate } = useTranslation();
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  let cid = 0;

  //点击回调提前处理
  const callBack = () => {
    if (!num) {
      return;
    }
    if (coinPriceData?.close != undefined && !coinPriceData?.close) {
      return;
    }
    if (!(address && num > 0)) {
      Toast.show({ content: translate(getText("请输入正确信息")) });
      return;
    }
    tbhandle({
      cid,
      num,
      address,
      num: num,
      currenyName: use?.name?.toUpperCase(),
      currenyNum:
        `${num / coinPriceData?.close}` == "NaN"
          ? num
          : num / coinPriceData?.close,
    });
    setTimeout(() => {
      setNum("");
      setAddress("");
    }, 500);
  };

  useEffect(() => {
    cid = coinList[0]?.id;
  });
  return (
    <div className="rechargeCenterInfo-1">
      <div className="rechargeCenterInfo-2">
        <div className="rechargeCenterInfo-3">
          {/* 悬浮 */}
          <div className="xfextractCenterDiv">
            {/* 不存在显示 */}
            {coinPriceData?.close == undefined && (
              <>
                <div className="extractCenter-18">
                  <span className="extractCenter-19">
                    {translate(getText("提款金額"))}
                  </span>
                </div>
                <div className="extractCenter-18">
                  <Input
                    placeholder={translate(getText("提款金額"))}
                    type="number"
                    id="usdtmoney"
                    name="usdtmoney"
                    autocomplete="off"
                    style={{
                      height: "43px",
                    }}
                    value={num}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setNum("");
                      }
                      if (/^[0-9]+(\.[0-9]{0,5})?$/.test(e.target.value)) {
                        setNum(e.target.value);
                      }
                    }}
                  />
                </div>
              </>
            )}
            {/* 存在显示 转化 */}
            {coinPriceData?.close != undefined && (
              <>
                <div className="rechargeCenterInfo-8">
                  {translate(getText("From"))}
                </div>
                <div className="rechargeCenterInfo-8">
                  {/* <div className="rechargeCenterInfoSelectMask"></div> */}
                  <Input
                    placeholder={translate(getText("提款金額"))}
                    type="number"
                    id="usdtmoney"
                    name="usdtmoney"
                    autocomplete="off"
                    style={{
                      height: "43px",
                      width: "70%",
                    }}
                    value={num}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setNum("");
                      }
                      if (/^[0-9]+(\.[0-9]{0,5})?$/.test(e.target.value)) {
                        setNum(e.target.value);
                      }
                    }}
                  />
                  <span
                    style={{
                      height: "43px",
                      marginLeft: 10,
                      lineHeight: "43px",
                      fontSize: "17px",
                      color: "var(--boutton-background-color)",
                    }}
                  >
                    USDT
                  </span>
                </div>
                <div className="rechargeCenterInfo-8">
                  <SwapOutlined
                    style={{
                      transform: "rotate(90deg)",
                      color: "var(--boutton-background-color)",
                      fontSize: 18,
                      border: "2px solid var(--boutton-background-color)",
                      borderRadius: "50%",
                      padding: 5,
                    }}
                  />
                </div>
                <div className="rechargeCenterInfo-8">
                  {translate(getText("To"))}
                </div>
                <div className="rechargeCenterInfo-8">
                  <div className="rechargeCenterInfoSelectMask"></div>
                  <Input
                    placeholder={translate(getText("提款金額"))}
                    type="number"
                    id="usdtmoney"
                    name="usdtmoney"
                    autocomplete="off"
                    style={{
                      height: "43px",
                      width: "70%",
                    }}
                    value={
                      `${num / coinPriceData?.close}` == "NaN"
                        ? coinPriceData?.close == undefined
                          ? num
                            ? num
                            : 0
                          : num
                          ? "..."
                          : 0
                        : (num / coinPriceData?.close).toFixed(6)
                    }
                  />
                  <span
                    style={{
                      height: "43px",
                      marginLeft: 10,
                      lineHeight: "43px",
                      fontSize: "17px",
                      color: "var(--boutton-background-color)",
                    }}
                  >
                    {use?.name?.toUpperCase()}
                  </span>
                </div>
              </>
            )}
            {/* 提取部分 */}
            <>
              <div className="extractCenter-1">
                <div className="extractCenter-8">
                  <span className="extractCenter-9">
                    {translate(getText("賬戶餘額"))}：{userInfo?.usdt}
                  </span>
                  <span
                    className="extractCenter-10"
                    onClick={() => {
                      setNum(userInfo?.usdt);
                    }}
                  >
                    {translate(getText("全部轉移"))}
                  </span>
                </div>
                <div role="separator" className="extractCenter-11"></div>
                <div
                  role="button"
                  className="extractCenter-12"
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  <div className="extractCenter-13">
                    <span className="extractCenter-14">
                      {translate(getText("撤回至："))}
                    </span>
                  </div>
                  <div className="extractCenter-15">
                    <span className="extractCenter-16">
                      {address ? address : translate(getText("選擇錢包地址"))}
                    </span>
                  </div>
                  <i className="extractCenter-17"></i>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    textAlign: "center",
                  }}
                ></div>
              </div>
              {/*  地址 */}
              <Popup
                visible={visible}
                onMaskClick={() => {
                  setVisible(false);
                }}
                onClose={() => {
                  setVisible(false);
                }}
                bodyStyle={{ height: "40vh", overflowY: "scroll" }}
              >
                {addressList.map((data) => (
                  //判断过滤对应数据 name  data?.name == use?.name &&
                  <div
                    onClick={() => {
                      setAddress(data.addr);
                      setVisible(false);
                    }}
                  >
                    <div
                      className="addressList-6"
                      style={{
                        height: "auto",
                      }}
                    >
                      <div className="addressList-7">
                        <div className="addressList-8">
                          <div className="addressList-9">
                            <span className="addressList-10">
                              {`${data?.name.toUpperCase()}${
                                data.czline
                                  ? `-${data.czline}`.toUpperCase()
                                  : ""
                              }`}
                            </span>
                            <span className="addressList-11">{data.addr}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </div>
                ))}
              </Popup>
            </>
          </div>
          {/* 提交 */}
          <div className="rechargeCenterInfo-17">
            <div
              className="rechargeCenterInfo-18"
              onClick={() => {
                callBack();
              }}
            >
              {translate(getText("提交"))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
