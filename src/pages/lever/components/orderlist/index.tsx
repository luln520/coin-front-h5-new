import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function OrderList({
  closeorder,
  coinListData,
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

  const getNode1 = () => {
    const nodes = [];
    const leverorderstemp = leverorders.filter(
      (data) => data.status === (orderindex == 1 ? 1 : 2)
    );
    for (let index = 0; index < leverorderstemp.length; index++) {
      const data = leverorderstemp[index];
      const node = (
        <li
          class="leverorderlistItem11-4"
          onClick={() => {
            const sendData = {
              orderNo: data.orderNo,
              coinname: data.coinname,
              num: data.num,
              ploss: data.ploss,
              buytime: data.buytime,
              status: data.status,
              isWin: data.isWin,
            };
            if (data.status == 1) {
              return;
            }
            navigate(
              `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
            );
          }}
        >
          <div class="leverorderlistItem11-5">
            <div class="leverorderlistItem11-6">
              <div class="leverorderlistItem11-7">
                <div class="leverorderlistItem11-8">
                  <p class="leverorderlistItem11-9">交易品種</p>
                  <p class="leverorderlistItem11-10">{data.coinname}</p>
                  <p class="leverorderlistItem11-11">交易數</p>
                  <p class="leverorderlistItem11-12">{data.num}</p>
                  <p class="leverorderlistItem11-13">倍数</p>
                  <p class="leverorderlistItem11-14">{data.fold}</p>
                </div>
              </div>
              <div class="leverorderlistItem11-15">
                <div class="leverorderlistItem11-16">
                  <p class="leverorderlistItem11-17">開倉價</p>
                  <p class="leverorderlistItem11-18">{data.buyprice}</p>
                  <p class="leverorderlistItem11-19">
                    {data.status == 1 ? "現價" : "结算價"}
                  </p>
                  <p class="leverorderlistItem11-20">
                    {data.status == 1 &&
                      coinListData[
                        data.coinname.replace("/USDT", "").toLowerCase()
                      ]?.close}{" "}
                    {data.status != 1 && data.sellprice}
                    &nbsp;
                  </p>
                  <p class="leverorderlistItem11-21">手續費</p>
                  <p class="leverorderlistItem11-22">{data.premium}</p>
                </div>
              </div>
              <div class="leverorderlistItem11-23">
                <div class="leverorderlistItem11-24">
                  <p class="leverorderlistItem11-25">方向</p>
                  <p
                    class={
                      data.hyzd == 1
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                  >
                    {data.hyzd == 1 ? "買多" : "買空"}
                  </p>
                  <p class="leverorderlistItem11-25">止損價</p>
                  <p class="leverorderlistItem11-26">{data.lossPrice}</p>
                  <p class="leverorderlistItem11-27">止盈價</p>
                  <p class="leverorderlistItem11-28">{data.winPrice}</p>
                </div>
              </div>
            </div>
            <div class="leverorderlistItem11-29">
              {data.status == 1 && (
                <div class="leverorderlistItem11-30">
                  <p class="leverorderlistItem11-31">預期收益</p>
                  <p
                    class={
                      (
                        data.num *
                        data.fold *
                        ((data.buyprice -
                          coinListData[
                            data.coinname.replace("/USDT", "").toLowerCase()
                          ]?.close) /
                          data.buyprice)
                      ).toFixed(2) > 0
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                  >
                    {(
                      data.num *
                      data.fold *
                      ((data.buyprice -
                        coinListData[
                          data.coinname.replace("/USDT", "").toLowerCase()
                        ]?.close) /
                        data.buyprice)
                    ).toFixed(2)}
                  </p>
                </div>
              )}
              {data.status == 2 && (
                <div class="leverorderlistItem11-30">
                  <p class="leverorderlistItem11-31">收益</p>
                  <p
                    class={
                      data.isWin == 1
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                  >
                    {data.isWin == 1 ? "+" : "-"}
                    {data.ploss}
                  </p>
                </div>
              )}
            </div>
          </div>
          {data.status == 1 && (
            <div class="leverorderlistItem11-33">
              <p
                class="leverorderlistItem11-34"
                onClick={(e) => {
                  closeorder(data.id);
                  e.stopPropagation();
                }}
              >
                平倉
              </p>
              <p class="leverorderlistItem11-35">追單</p>
              <p class="leverorderlistItem11-36">設定止盈止損</p>
            </div>
          )}
          {data.status == 1 && (
            <div class="leverorderlistItem11-37">
              {/* <p class="leverorderlistItem11-38">設定止盈止損</p> */}
              {/* <p class="leverorderlistItem11-39">鎖倉</p> */}
              {/* <p
                        class="leverorderlistItem11-40"
                      >
                        詳細
                      </p> */}
            </div>
          )}
        </li>
      );
      nodes.push(node);
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
        {getNode1()}
        <div style={{ height: "10px" }}></div>
      </div>
    </div>
  );
}
