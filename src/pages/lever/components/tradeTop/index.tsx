import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { WSContext } from "../../../../router/router";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradeTop({ setIsShow, nowTab }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const [coinListData, setCoinListData] = useContext(WSContext);
  return (
    <div className="levertradeInfo-1">
      <div className="levertradeInfo-2">
        <div
          className={
            (coinListData[nowTab]?.close - coinListData[nowTab]?.open) / coinListData[nowTab]?.open > 0
              ? "levertradeInfo-3-1"
              : "levertradeInfo-3"
          }
        >
          <div className="levertradeInfo-4">{coinListData[nowTab]?.close}</div>
          <div className="levertradeInfo-5">
            {translate(getText("成交"))}: {coinListData[nowTab]?.vol?.toFixed(2)}
          </div>
          <div className="levertradeInfo-6">
            <span className="levertradeInfo-7">
              {translate(getText("涨幅"))}:
              {coinListData[nowTab]?.close &&
                (((coinListData[nowTab]?.close - coinListData[nowTab]?.open) / coinListData[nowTab]?.open) * 100).toFixed(2)}
              {!coinListData[nowTab]?.close && "0.00"}%
            </span>
            <span className="levertradeInfo-8" style={{
                display: lan == "zh" ? "" : "none",
              }}>
              {coinListData[nowTab]?.close &&
                (((coinListData[nowTab]?.close - coinListData[nowTab]?.open) / coinListData[nowTab]?.open) * 100).toFixed(2)}
              {!coinListData[nowTab]?.close && "0.00"} {translate(getText("点"))}
            </span>
          </div>
        </div>
        <div className="levertradeInfo-9">
          <div className="levertradeInfo-10">
            <div className="levertradeInfo-11">
              <div className="levertradeInfo-12">
                {translate(getText("买"))}
              </div>
              <div className="levertradeInfo-13">{coinListData[nowTab]?.close}</div>
            </div>
            <div className="levertradeInfo-14">
              <div className="levertradeInfo-15">
                {translate(getText("卖"))}
              </div>
              <div className="levertradeInfo-16">{coinListData[nowTab]?.close}</div>
            </div>
            <div className="levertradeInfo-17">
              <div className="levertradeInfo-18">
                {translate(getText("开"))}
              </div>
              <div className="levertradeInfo-19">{coinListData[nowTab]?.open}</div>
            </div>
            <div className="levertradeInfo-20">
              <div className="levertradeInfo-21">
                {translate(getText("收"))}
              </div>
              <div className="levertradeInfo-22">{coinListData[nowTab]?.low}</div>
            </div>
            <div className="levertradeInfo-23">
              <div className="levertradeInfo-24">
                {translate(getText("高"))}
              </div>
              <div className="levertradeInfo-25">{coinListData[nowTab]?.high}</div>
            </div>
            <div className="levertradeInfo-26">
              <div className="levertradeInfo-27">
                {translate(getText("低"))}
              </div>
              <div className="levertradeInfo-28">{coinListData[nowTab]?.low}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
