import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  const [type, setType] = useState(1);
  const getUSDTNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      nodes.push(
        <li
          class="quotationcenter-37"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="quotationcenter-38">
            <div class="quotationcenter-39">
              <div class="quotationcenter-40">
                <img src={getLogo(key)} class="quotationcenter-42" />
              </div>
            </div>
            <div class="quotationcenter-43">
              <span class="quotationcenter-44">
                {key.toUpperCase()}
                <small class="quotationcenter-45">/USDT</small>
              </span>
              <p class="quotationcenter-46">
                量：{(coinListData[key]?.vol / 10000).toFixed(2)}萬
              </p>
            </div>
          </div>
          <div class="quotationcenter-47">
            <span
              class={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "quotationcenter-132"
                  : "quotationcenter-48"
              }
            >
              {coinListData[key]?.close}
            </span>
          </div>
          <div class="quotationcenter-49">
            <div
              class={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "quotationcenter-134"
                  : "quotationcenter-50"
              }
            >
              {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
              {coinListData[key]?.close &&
                (
                  ((coinListData[key]?.close - coinListData[key]?.open) /
                    coinListData[key]?.open) *
                  100
                ).toFixed(2)}
              %
            </div>
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
    <div class="quotationcenter-1">
      <div class="quotationcenter-2">
        <div class="quotationcenter-3">
          <ul class="quotationcenter-4">
            <li class="quotationcenter-5">自選</li>
            <li class="quotationcenter-6">USDT</li>
          </ul>
        </div>
        <div class="quotationcenter-7">
          <div class="quotationcenter-8">
            <div class="quotationcenter-9">
              <div class="quotationcenter-10">
                <div class="quotationcenter-31">
                  <div class="quotationcenter-32">
                    <div class="quotationcenter-33">
                      <div class="quotationcenter-34">
                        <div class="quotationcenter-35">
                          <ul class="quotationcenter-36">
                            {getUSDTNodes()}

                            <li class="quotationcenter-121">
                              <div class="quotationcenter-122">
                                <div class="quotationcenter-123">
                                  <div class="quotationcenter-124">
                                    <div class="quotationcenter-125"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014417290247.png"
                                      class="quotationcenter-126"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-127">
                                  <span class="quotationcenter-128">
                                    CRO
                                    <small class="quotationcenter-129">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-130">
                                    量：261.02萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-131">
                                <span class="quotationcenter-132">
                                  0.063696
                                </span>
                              </div>
                              <div class="quotationcenter-133">
                                <div class="quotationcenter-134">-1.87%</div>
                              </div>
                            </li>
                          </ul>
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
    </div>
  );
}
