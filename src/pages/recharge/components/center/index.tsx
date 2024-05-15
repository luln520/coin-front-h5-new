import { Toast } from "antd-mobile";
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

export default function Center({
  coinList,
  sendRecharge,
  use,
  setUse,
  coinPriceData,
}) {
  const navigate = useNavigate();
  const [addrId, setAddrId] = useState(0);
  const [img, setImg] = useState("");
  const [num, setNum] = useState("");
  const { t: translate } = useTranslation();
  let qrcode = null;

  //上传
  const handleChange = (info) => {
    if (info.file.status === "done") {
      if (info.file.response && info.file.response.ok) {
        Toast.show({
          content: `${info.file.name} ${translate(getText("上傳成功"))}`,
        });
        const data = info.file.response;
        setImg(data.data);
      } else {
        Toast.show({ content: translate(getText("上传失败")) });
      }
    } else if (info.file.status === "error") {
      Toast.show({ content: translate(getText("上传失败")) });
    }
  };

  const creatQrCode = () => {
    let text = use?.czaddress;
    document.getElementById("qrcode").innerHTML = "";
    qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text, //二维码内容字符串
      width: 170, //图像宽度
      height: 170, //图像高度
      colorDark: "#000000", //二维码前景色
      colorLight: "#ffffff", //二维码背景色
      correctLevel: QRCode.CorrectLevel.H, //容错级别
    });
  };

  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  useEffect(() => {
    creatQrCode();
  }, [use]);
  return (
    <div className="rechargeCenterInfo-1">
      <div className="rechargeCenterInfo-2">
        <div className="rechargeCenterInfo-3">
          {/* 说明 */}
          {/* <span className="rechargeCenterInfo-19">
            {translate(getText("充值說明"))}
          </span>
          <div className="rechargeCenterInfo-20">
            <p className="rechargeCenterInfo-21">
              <p className="rechargeCenterInfo-22">
                {translate(
                  getText(
                    "最小充值金额：10.00USDT，小于最小金额的充值将不会上账且无法退回"
                  )
                )}
              </p>
            </p>
          </div> */}
          {/*  二维码 */}
          <div className="qrcodeDiv">
            <div className="qrcodeiconDiv">
              <div className="qrcodeiconDiv1"></div>
              <div className="qrcodeiconDiv2"></div>
              <div className="qrcodeiconDiv3"></div>
              <div className="qrcodeiconDiv4"></div>
              <div id="qrcode" className="rechargeCenterInfo-4"></div>
            </div>
          </div>
          <div className="rechargeCenterInfo-5-1">
            {translate(getText("充值地址"))}
          </div>
          <div className="rechargeCenterInfo-5">
            <span className="rechargeCenterInfo-6">{use?.czaddress}</span>
            <img
              alt=""
              src="/rechargeCenter/copy2.svg"
              className="rechargeCenterInfo-7"
              onClick={() => {
                handleCopy(use?.czaddress);
              }}
            />
          </div>
          {/* 悬浮 */}
          <div className="xfextractCenterDiv">
            {/* 不存在显示 */}
            {coinPriceData?.close == undefined && (
              <>
                <div className="extractCenter-18">
                  <span className="extractCenter-19">
                    {translate(getText("充值金額"))}
                  </span>
                </div>
                <div className="extractCenter-18">
                  <Input
                    placeholder={translate(getText("充值金額"))}
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
                    placeholder={translate(getText("充值金額"))}
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
                    {use?.name?.toUpperCase()}
                  </span>
                  {/* <Select
                    defaultValue={use?.name?.toUpperCase()}
                    value={use?.name?.toUpperCase()}
                    style={{
                      width: "100%",
                      height: "43px",
                    }}
                    options={[
                      {
                        value: use?.name?.toUpperCase(),
                        label: `${num ? num : 0} ${use?.name?.toUpperCase()}`,
                      },
                    ]}
                  /> */}
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
                    placeholder={translate(getText("充值金額"))}
                    type="number"
                    id="usdtmoney"
                    name="usdtmoney"
                    autocomplete="off"
                    style={{
                      height: "43px",
                      width: "70%",
                    }}
                    value={
                      `${num * coinPriceData?.close}` == "NaN"
                        ? coinPriceData?.close == undefined
                          ? num
                            ? num
                            : 0
                          : num
                          ? "..."
                          : 0
                        : (num * coinPriceData?.close).toFixed(2)
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
                    USDT
                  </span>
                  {/* <Select
                    defaultValue="USDT"
                    value="USDT"
                    style={{
                      width: "100%",
                      height: "43px",
                    }}
                    options={[
                      {
                        value: "USDT",
                        label:
                          `${
                            `${num * coinPriceData?.close}` == "NaN"
                              ? coinPriceData?.close == undefined
                                ? num
                                  ? num
                                  : 0
                                : num
                                ? "..."
                                : 0
                              : (num * coinPriceData?.close).toFixed(
                                  2
                                )
                          }` + " USDT",
                      },
                    ]}
                  /> */}
                </div>
              </>
            )}
          </div>
          {/* <div
            className="rechargeCenterInfo-8"
            style={{
              color: "var(--boutton-background-color)",
            }}
          >
            {`${num * coinPriceData?.close}` == "NaN"
              ? 0
              : (num * coinPriceData?.close).toFixed(2)}{" "}
            USDT
          </div> */}
          {/* 截图 */}
          <div className="rechargeCenterInfo-8">
            <span className="rechargeCenterInfo-9">
              {translate(getText("交易截圖"))}
            </span>
          </div>
          <div className="rechargeCenterInfo-8">
            <Upload
              name="file"
              listType="picture-card"
              accept="image/*"
              showUploadList={false}
              action={imageConfig.uploadUrl}
              onChange={handleChange}
            >
              <Image
                preview={false}
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
                src={imageConfig.baseImageUrl + img}
                fallback="data:image/png;base64,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"
              />
            </Upload>
          </div>
          {/* 提交 */}
          <div className="rechargeCenterInfo-17">
            <div
              className="rechargeCenterInfo-18"
              onClick={() => {
                if (!num) {
                  return;
                }
                if (
                  coinPriceData?.close != undefined &&
                  !coinPriceData?.close
                ) {
                  return;
                }
                sendRecharge({
                  coinname: use.name,
                  czaddress: use.czaddress,
                  payimg: img,
                  currenyNum: num,
                  currenyName: use?.name?.toUpperCase(),
                  zznum:
                    `${num * coinPriceData?.close}` == "NaN"
                      ? num
                      : num * coinPriceData?.close,
                  czline: use.czline,
                });
                setNum("");
                setImg("");
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
