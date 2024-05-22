import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import QRCode from "qrcodejs2";

export default function CenterPage({
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
      width: 100, //图像宽度
      height: 100, //图像高度
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
    <div class="recharge-1">
      <div class="recharge-2">
        <div class="recharge-3">
          <div class="recharge-4">
            <div className="qrcodeDiv">
              <div className="qrcodeiconDiv">
                <div className="qrcodeiconDiv1"></div>
                <div className="qrcodeiconDiv2"></div>
                <div className="qrcodeiconDiv3"></div>
                <div className="qrcodeiconDiv4"></div>
                <div id="qrcode" className="rechargeCenterInfo-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="recharge-7">
          <div class="recharge-8">保存二維碼</div>
        </div>
        <div class="recharge-9">
          <div class="recharge-10">
            <h1 class="recharge-11">充幣地址</h1>
            <p class="recharge-12">
              <br class="recharge-13" />
            </p>
            <p class="recharge-14">{use?.czaddress}</p>
          </div>
          <div class="recharge-15">
            <div class="recharge-16">複製地址</div>
          </div>
        </div>
        <div class="recharge-17">
          <div class="recharge-18">
            <ul class="recharge-19">
              <li class="recharge-20">
                <p class="recharge-21">充幣數量</p>
                <div class="recharge-22">
                  <div class="recharge-23">
                    <div class="recharge-24"></div>
                    <input type="number" class="recharge-25" />
                  </div>
                </div>
              </li>
              <li class="recharge-26">
                <p class="recharge-27">上傳支付詳情截圖</p>
                <div class="recharge-28">
                  <div class="recharge-29">
                    <img
                      src="https://www.btexure.vip/static/img/img-add.png"
                      class="recharge-31"
                    />
                  </div>
                  <p class="recharge-32">點擊上傳圖片</p>
                </div>
              </li>
            </ul>
            <div class="recharge-33">
              <div class="recharge-34">提交</div>
            </div>
          </div>
        </div>
        <div data-v-3b7f4566="" class="recharge-35"></div>
      </div>
    </div>
  );
}
