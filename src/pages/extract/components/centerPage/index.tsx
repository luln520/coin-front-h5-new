import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({
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
    <div class="extract-1">
      <div class="extract-2">
        <div class="extract-3">
          <div class="extract-4">
            <ul class="extract-5">
              <li class="extract-6">
                <div class="extract-7">
                  <img
                    src={imageConfig.baseImageUrl + use?.img}
                    class="extract-9"
                  />
                  <div class="extract-10">
                    <div class="extract-11">
                      <div class="extract-12"></div>
                    </div>
                    <div class="extract-13">
                      <div class="extract-14"></div>
                    </div>
                  </div>
                </div>
                <p class="extract-15">{use?.name?.toUpperCase()}提現</p>
              </li>
              {/* <li class="extract-16">
                <p class="extract-17">鏈地址</p>
                <div class="extract-18">
                  <div class="extract-19">
                    <div class="extract-20">
                      <span class="extract-21">ERC20</span>
                    </div>
                  </div>
                  <div class="extract-22">
                    <div class="extract-23">
                      <span class="extract-24">TRC20</span>
                    </div>
                  </div>
                </div>
              </li> */}
              <li class="extract-25">
                <p class="extract-26">提幣地址</p>
                <div
                  onpaste="return false"
                  oncontextmenu="return false"
                  oncopy="return false"
                  oncut="return false"
                  class="extract-27"
                >
                  <div class="extract-28">
                    <div class="extract-29">請輸入提幣地址</div>
                    <input class="extract-30" />
                  </div>
                </div>
              </li>
              <li class="extract-31">
                <p class="extract-32">提幣數量</p>
                <div class="extract-33">
                  <div class="extract-34">
                    <div class="extract-35">請輸入提幣數量</div>
                    <input type="number" class="extract-36" />
                  </div>
                </div>
                <div class="extract-37">
                  <span class="extract-38">可用:{userInfo?.usdt} USDT</span>
                </div>
              </li>
              <li class="extract-39">
                <p class="extract-40">提現密碼</p>
                <div class="extract-41">
                  <div class="extract-42">
                    <div class="extract-43">請輸入提現密碼</div>
                    <input type="password" class="extract-44" />
                  </div>
                </div>
              </li>
              {/* <li class="extract-45">
                <p class="extract-46">手續費</p>
                <div class="extract-47">手續費 5%</div>
              </li> */}
            </ul>
            <div class="extract-50">
              <div class="extract-51">預計到賬數量：{num}USDT</div>
              <div class="extract-52">提交</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
