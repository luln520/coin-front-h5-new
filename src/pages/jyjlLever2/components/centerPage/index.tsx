import { Empty } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { newsApi } from "../../../../api/news-api";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ coinListData, leverorders, closeorder }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const [index, setindex] = useState(1);

  const getNode1 = () => {
    const nodes = [];
    const leverorderstemp = leverorders.filter(
      (data) => data.status === (index == 1 ? 1 : 2)
    );
    for (let index = 0; index < leverorderstemp.length; index++) {
      const data = leverorderstemp[index];
      const node = (
        <li class="leverorderlistItem1-4">
          <div class="leverorderlistItem1-5">
            <div class="leverorderlistItem1-6">
              <div class="leverorderlistItem1-7">
                <div class="leverorderlistItem1-8">
                  <p class="leverorderlistItem1-9">交易品種</p>
                  <p class="leverorderlistItem1-10">{data.coinname}</p>
                  <p class="leverorderlistItem1-11">交易數</p>
                  <p class="leverorderlistItem1-12">{data.num}</p>
                  <p class="leverorderlistItem1-13">倍数</p>
                  <p class="leverorderlistItem1-14">{data.fold}</p>
                </div>
              </div>
              <div class="leverorderlistItem1-15">
                <div class="leverorderlistItem1-16">
                  <p class="leverorderlistItem1-17">開倉價</p>
                  <p class="leverorderlistItem1-18">{data.buyprice}</p>
                  <p class="leverorderlistItem1-19">現價</p>
                  <p class="leverorderlistItem1-20">
                    {
                      coinListData[
                        data.coinname.replace("/USDT", "").toLowerCase()
                      ]?.close
                    }
                    &nbsp;
                  </p>
                  <p class="leverorderlistItem1-21">手續費</p>
                  <p class="leverorderlistItem1-22">{data.premium}</p>
                </div>
              </div>
              <div class="leverorderlistItem1-23">
                <div class="leverorderlistItem1-24">
                  <p class="leverorderlistItem1-25">止損價</p>
                  <p class="leverorderlistItem1-26">{data.lossPrice}</p>
                  <p class="leverorderlistItem1-27">止盈價</p>
                  <p class="leverorderlistItem1-28">{data.winPrice}</p>
                </div>
              </div>
            </div>
            <div class="leverorderlistItem1-29">
              <div class="leverorderlistItem1-30">
                <p class="leverorderlistItem1-31">預期收益</p>
                <p class="leverorderlistItem1-32">
                  {(
                    data.num *
                    (coinListData[
                      data.coinname.replace("/USDT", "").toLowerCase()
                    ]?.close -
                      data.buyprice)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div class="leverorderlistItem1-33">
            <p
              class="leverorderlistItem1-34"
              onClick={(e) => {
                closeorder(data.id);
                e.stopPropagation();
              }}
            >
              平倉
            </p>
            <p class="leverorderlistItem1-35">追單</p>
            <p class="leverorderlistItem1-36">設定止盈止損</p>
          </div>
          <div class="leverorderlistItem1-37">
            {/* <p class="leverorderlistItem1-38">設定止盈止損</p> */}
            {/* <p class="leverorderlistItem1-39">鎖倉</p> */}
            {/* <p
              class="leverorderlistItem1-40"
            >
              詳細
            </p> */}
          </div>
        </li>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const getNode2 = () => {
    const nodes = [];
    const leverorderstemp = leverorders.filter(
      (data) => data.status === (index == 1 ? 1 : 2)
    );
    for (let index = 0; index < leverorderstemp.length; index++) {
      const data = leverorderstemp[index];
      const node = (
        <li
          className="hyjyjl-2"
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
          <div className="hyjyjl-3">
            <div className="hyjyjl-4">
              <div className="hyjyjl-5">
                {data.coinname}
                <div className={data.hyzd == 1 ? "hyjyjl-32" : "hyjyjl-6"}>
                  {data.hyzd == 1
                    ? translate(getText("買多"))
                    : translate(getText("買空"))}
                </div>
              </div>
              <div className="hyjyjl-7">{data.buytime?.substring(0, 16)}</div>
            </div>
            <div className="hyjyjl-8">
              <div className="hyjyjl-9">
                <span className="hyjyjl-10">
                  <span className="hyjyjl-11">
                    {data.num.toFixed(2)}
                    <span className="hyjyjl-12">
                      <span className="hyjyjl-13">USDT</span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="hyjyjl-14">
                {translate(getText("盈虧"))}
                {data?.status == 2 && (
                  <span className={data.isWin == 1 ? "hyjyjl-41" : "hyjyjl-15"}>
                    <span className="hyjyjl-16">
                      {data.isWin == 1 ? "+" : "-"}
                      {data.ploss}
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="hyjyjl-17"></div>
            <div className="hyjyjl-18">
              <div className="hyjyjl-19">
                <div className="hyjyjl-20">
                  {translate(getText("購買"))}
                  {lan == "zh" ? "" : <span>&nbsp;</span>}
                  {translate(getText("價格"))}
                </div>
                <div className="hyjyjl-21">{data.buyprice}</div>
              </div>
              <div className="hyjyjl-22">
                <div className="hyjyjl-23">{translate(getText("倍数"))}</div>
                <div className="hyjyjl-24">{data.fold}X</div>
              </div>
              <div className="hyjyjl-25">
                <div className="hyjyjl-26">{translate(getText("操作"))}</div>
                <div className="hyjyjl-27">
                  {data?.status == 1 && (
                    <button
                      className="pingcang"
                      onClick={(e) => {
                        closeorder(data.id);
                        e.stopPropagation();
                      }}
                    >
                      {translate(getText("平仓"))}
                    </button>
                  )}
                  {data?.status != 1 && (
                    <span className="jyjl-18">
                      {translate(getText("詳情"))}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div>
      {/* 头部 */}
      <div class="leverorderlistTopBar-1">
        <div
          class={
            index == 1 ? "leverorderlistTopBar-2" : "leverorderlistTopBar-3"
          }
          onClick={() => {
            setindex(1);
          }}
        >
          在持
        </div>
        <div
          class={
            index == 2 ? "leverorderlistTopBar-2" : "leverorderlistTopBar-3"
          }
          onClick={() => {
            setindex(2);
          }}
        >
          已成交
        </div>
        <div
          class={
            index == 3 ? "leverorderlistTopBar-2" : "leverorderlistTopBar-3"
          }
          onClick={() => {
            setindex(3);
          }}
        >
          已平倉
        </div>
      </div>
      {/* 列表 */}
      <ul class="leverorderlistItem1-3">
        {index == 1 && getNode1()}
        {index != 1 && getNode2()}
      </ul>

      <div className="jyjl-99">{translate(getText("暂无更多了"))}</div>
    </div>
  );
}
