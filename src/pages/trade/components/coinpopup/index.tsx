import { useNavigate } from "react-router-dom";
import { Popup, Space, Button } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function CoinPopup({
  isShowCoin,
  setIsShowCoin,
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
    setIsShowCoin(false);
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
      visible={isShowCoin}
      onMaskClick={() => {
        setIsShowCoin(false);
      }}
      position="left"
      bodyStyle={{ width: "220px", backgroundColor: "#f5f5f5" }}
    >
      <div class="coinPopupTopTitle-1">
        <div class="coinPopupTopTitle-2">
          <p class="coinPopupTopTitle-3">貨幣行情</p>
        </div>
        <div class="coinPopupTopTitle-4">
          <ul class="coinPopupTopTitle-5">
            <li class="coinPopupTopTitle-6">自選</li>
            <li class="coinPopupTopTitle-7">USDT</li>
          </ul>
        </div>
        <div class="coinPopupTopTitle-8">
          <i class="coinPopupTopTitle-9"></i>
          <div class="coinPopupTopTitle-10">
            <div class="coinPopupTopTitle-11">
              <input
                placeholder="搜索幣種"
                maxlength="140"
                step=""
                enterkeyhint="done"
                autocomplete="off"
                type=""
                class="coinPopupTopTitle-13"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div class="coinPopupTopTitle-14">
          <div class="coinPopupTopTitle-15">
            <div class="coinPopupTopTitle-16">
              <div class="coinPopupTopTitle-17">
                <div class="coinPopupTopTitle-18">
                  <div class="coinPopupTopTitle-19">
                    <div class="coinPopupTopTitle-20">
                      <div class="coinPopupTopTitle-21">
                        <div class="coinPopupTopTitle-22">
                          <ul class="coinPopupTopTitle-23"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="coinPopupTopTitle-24">
                  <div class="coinPopupTopTitle-25">
                    <div class="coinPopupTopTitle-26">
                      <div class="coinPopupTopTitle-27">
                        <div class="coinPopupTopTitle-28">
                          <ul class="coinPopupTopTitle-29">{getNodes()}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
