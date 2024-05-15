import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import Noice from "../noice";
import { imageConfig } from "../../../../config/config";

export default function Zixunlist({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (
      let index = 0;
      index < (ctmarketlist.length > 3 ? 3 : ctmarketlist.length);
      index++
    ) {
      const ctmarket = ctmarketlist[index];
      const key = ctmarket.coinname;
      nodes.push(
        <span
          className="zixunlist-3"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="zixunlist-4">
            <div className="zixunlist-5">
              <span id="btc_coin_box" className="zixunlist-6">
                {key.toUpperCase()}/USDT
              </span>
            </div>
            <div id="btc_money_box" className="zixunlist-7">
              <span
                className={
                  coinListData[key]?.close < coinListData[key]?.open
                    ? "zixunlist-8-1"
                    : "zixunlist-8"
                }
              >
                <spna  key={'zixunlistSpanclosea'+index}>{coinListData[key]?.close}</spna>
                <spna  key={'zixunlistSpancloseb'+index}>{!coinListData[key]?.close && "--"}</spna>
              </span>
            </div>
            <div id="btc_change_box" className="zixunlist-9">
              <span
                className={
                  coinListData[key]?.close < coinListData[key]?.open
                    ? "zixunlist-10-1"
                    : "zixunlist-10"
                }
              >
                <spna  key={'zixunlistSpanopena'+index}>{coinListData[key]?.close &&
                  (
                    ((coinListData[key]?.close - coinListData[key]?.open) /
                      coinListData[key]?.open) *
                    100
                  ).toFixed(2)}</spna>
                <spna  key={'zixunlistSpanopenb'+index}>{coinListData[key]?.close?'':"0.00"}</spna>%
              </span>
            </div>
          </div>
        </span>
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
    <div className="zixunlist-1">
      <div className="zixunlist-2">{getNodes()}</div>
      {/* 线 */}
      {/* <div className="zixunlist-27"></div> */}
    </div>
  );
}
