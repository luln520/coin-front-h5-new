import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function OrderList({
  orderindex,
  setorderindex,
  leverorders,
  nowTab,
}) {
  const navigate = useNavigate();
  const tab = nowTab.toUpperCase() + "/USDT";
  const { t: translate } = useTranslation();
  const getArray = () => {
    const nodes = [];
    leverorders = leverorders.filter((data) => data.coinname === tab);
    leverorders = leverorders.filter(
      (data) => data.status === (orderindex == 1 ? 1 : 2)
    );
    for (const data of leverorders) {
      nodes.push(
        <li class="orderlisttab-24">
          <span class="orderlisttab-25">{data.coinname}</span>
          {orderindex == 1 && <span class="orderlisttab-26">{data.num}</span>}
          <span class="orderlisttab-27">{data.sellprice}</span>
          <span
            class={data.hyzd == 1 ? "orderlisttab-28" : "orderlisttab-28-1"}
          >
            {data.hyzd == 1
              ? translate(getText("買多"))
              : translate(getText("買空"))}
          </span>
          {/* <span class="orderlisttab-29">0</span> */}
        </li>
      );
    }
    return nodes;
  };
  return (
    <div class="orderlisttab-1">
      <div class="orderlisttab-2">
        <div class="orderlisttab-3">
          <div class="orderlisttab-4">
            <div class="orderlisttab-5">
              <div
                class={orderindex == 1 ? "orderlisttab-6" : "orderlisttab-7"}
                onClick={() => {
                  setorderindex(1);
                }}
              >
                持倉
              </div>
              <div
                class={orderindex == 2 ? "orderlisttab-6" : "orderlisttab-7"}
                onClick={() => {
                  setorderindex(2);
                }}
              >
                已成交
              </div>
              <div
                class={orderindex == 3 ? "orderlisttab-6" : "orderlisttab-7"}
                onClick={() => {
                  setorderindex(3);
                }}
              >
                已平倉
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="orderlisttab-11">
        <div class="orderlisttab-12">
          <div class="orderlisttab-13">
            <div class="orderlisttab-14">
              <div class="orderlisttab-15">
                <div class="orderlisttab-16">
                  <div class="orderlisttab-17">
                    <span class="orderlisttab-18">產品</span>
                    {orderindex == 1 && (
                      <span class="orderlisttab-19">金额</span>
                    )}
                    <span class="orderlisttab-20">成交價</span>
                    <span class="orderlisttab-21">方向</span>
                    {/* <span class="orderlisttab-22">交易手數</span> */}
                  </div>
                  <ul class="orderlisttab-23">{getArray()}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
