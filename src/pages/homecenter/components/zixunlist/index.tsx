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
    for (let index = 0; index < ctmarketlist.length; index++) {
      const ctmarket = ctmarketlist[index];
      const key = ctmarket.coinname;
      nodes.push(
        <div
          className={
            coinListData[key]?.close > coinListData[key]?.open
              ? "zixunlist-5"
              : "zixunlist-35"
          }
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <h1 className="zixunlist-6">
            {key.toUpperCase()}
            <span className="zixunlist-7">/USDT</span>
          </h1>
          <h1 className="zixunlist-8">
            {coinListData[key]?.close ? coinListData[key]?.close : "--"}
          </h1>
          <small className="zixunlist-9">
            {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
            {coinListData[key]?.close &&
              (
                ((coinListData[key]?.close - coinListData[key]?.open) /
                  coinListData[key]?.open) *
                100
              ).toFixed(2)}
            %
          </small>
        </div>
        // <span
        //   className="zixunlist-3"
        //   onClick={() => {
        //     navigate(`/trade/${key}`);
        //   }}
        // >
        //   <div className="zixunlist-4">
        //     <div className="zixunlist-5">
        //       <span id="btc_coin_box" className="zixunlist-6">
        //         {key.toUpperCase()}/USDT
        //       </span>
        //     </div>
        //     <div id="btc_money_box" className="zixunlist-7">
        //       <span
        //         className={
        //           coinListData[key]?.close < coinListData[key]?.open
        //             ? "zixunlist-8-1"
        //             : "zixunlist-8"
        //         }
        //       >
        //         <spna key={"zixunlistSpanclosea" + index}>
        //           {coinListData[key]?.close}
        //         </spna>
        //         <spna key={"zixunlistSpancloseb" + index}>
        //           {!coinListData[key]?.close && "--"}
        //         </spna>
        //       </span>
        //     </div>
        //     <div id="btc_change_box" className="zixunlist-9">
        //       <span
        //         className={
        //           coinListData[key]?.close < coinListData[key]?.open
        //             ? "zixunlist-10-1"
        //             : "zixunlist-10"
        //         }
        //       >
        //         <spna key={"zixunlistSpanopena" + index}>
        //           {coinListData[key]?.close &&
        //             (
        //               ((coinListData[key]?.close - coinListData[key]?.open) /
        //                 coinListData[key]?.open) *
        //               100
        //             ).toFixed(2)}
        //         </spna>
        //         <spna key={"zixunlistSpanopenb" + index}>
        //           {coinListData[key]?.close ? "" : "0.00"}
        //         </spna>
        //         %
        //       </span>
        //     </div>
        //   </div>
        // </span>
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
      <div className="zixunlist-2">
        <div className="zixunlist-3">
          <div className="zixunlist-4">
            {getNodes()}
          </div>
        </div>
      </div>
    </div>
  );
}
