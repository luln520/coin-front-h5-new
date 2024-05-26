import { useNavigate } from "react-router-dom";
import { Popup, Space, Button } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function OrderPopup({
  isShowOrder,
  setIsShowOrder,
  coinListData,
  index,
  ctmarketlist,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [popIndex, setPopIndex] = useState(index);
  const [name, setName] = useState("");
  const toPage = (name) => {
    const uri = popIndex == 1 ? "trade" : "lever";
    navigate(`/${uri}/${name}`);
    setIsShowOrder(false);
  };
  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      if (name) {
        if (name.toLowerCase() !== key) {
          continue;
        }
      }
      nodes.push(
        <li
          class="coinPopupTopTitle-30"
          onClick={() => {
            toPage(key);
          }}
        >
          <div class="coinPopupTopTitle-31">
            <div class="coinPopupTopTitle-32">
              <span class="coinPopupTopTitle-33">
                {key.toUpperCase()}
                <small class="coinPopupTopTitle-34">/USDT</small>
              </span>
            </div>
          </div>
          <div class="coinPopupTopTitle-35">
            <span
              class={
                coinListData[key]?.close > coinListData[key]?.open
                  ? "coinPopupTopTitle-36"
                  : "coinPopupTopTitle-78"
              }
            >
              {coinListData[key]?.close}
            </span>
          </div>
        </li>
      );
    }
    return nodes;
  };

  const getLogo = (name) => {
    let logo = "";
    for (const ctmarket of ctmarketlist) {
      if (name == ctmarket.coinname) {
        logo = imageConfig.baseImageUrl + ctmarket.logo;
        break;
      }
    }
    return logo;
  };
  return (
    <Popup
      visible={isShowOrder}
      onMaskClick={() => {
        setIsShowOrder(false);
      }}
      position="bottom"
      bodyStyle={{ width: "100vw", backgroundColor: "#f5f5f5" }}
    >
      <div class="orderPopup-1">
        <div class="orderPopup-2">
          <p class="orderPopup-3">訂單確認</p>
          <div
            class="orderPopup-4"
            onClick={() => {
              etIsShowOrder(false);
            }}
          ></div>
        </div>
        <div class="orderPopup-5">
          <div class="orderPopup-6">
            <div class="orderPopup-7">
              <p class="orderPopup-8">名稱</p>
              <p class="orderPopup-9">
                BTC<span class="orderPopup-10">/USDT</span>
              </p>
            </div>
            <div class="orderPopup-11">
              <p class="orderPopup-12">方向</p>
              <p class="orderPopup-13">買多</p>
            </div>
            <div class="orderPopup-14">
              <p class="orderPopup-15">現價</p>
              <p class="orderPopup-16">68843.78</p>
            </div>
          </div>
          <div class="orderPopup-17">
            <div class="orderPopup-18">
              <div class="orderPopup-19">
                <div class="orderPopup-20">
                  <div class="orderPopup-21">
                    <div class="orderPopup-22">
                      <div class="orderPopup-23">60秒</div>
                      <div class="orderPopup-24">80.0%</div>
                    </div>
                    <div class="orderPopup-25">
                      <div class="orderPopup-26">90秒</div>
                      <div class="orderPopup-27">83.0%</div>
                    </div>
                    <div class="orderPopup-28">
                      <div class="orderPopup-29">120秒</div>
                      <div class="orderPopup-30">88.0%</div>
                    </div>
                    <div class="orderPopup-31">
                      <div class="orderPopup-32">300秒</div>
                      <div class="orderPopup-33">93.0%</div>
                    </div>
                    <div class="orderPopup-34">
                      <div class="orderPopup-35">600秒</div>
                      <div class="orderPopup-36">97.0%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="orderPopup-37">
            <div class="orderPopup-38">
              <div class="orderPopup-39">
                <p class="orderPopup-40">買入數量</p>
              </div>
            </div>
            <div class="orderPopup-41">
              <div class="orderPopup-42">
                <div data-v-5117ac91="" class="orderPopup-43">
                  最少10起買
                </div>
                <input
                  maxlength="140"
                  step="0.000000000000000001"
                  enterkeyhint="done"
                  autocomplete="off"
                  type="number"
                  class="orderPopup-44"
                />
              </div>
            </div>
            <div class="orderPopup-45">
              <p class="orderPopup-46">可用餘額:3287774.57</p>
              {/* <p class="orderPopup-47">手續費:0%</p> */}
            </div>
          </div>
          <div class="orderPopup-48">
            <div class="orderPopup-49">確認下單</div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
