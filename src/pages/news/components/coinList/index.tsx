import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CoinList({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [name, setName] = useState("");
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
        <div
          key={key}
          className="listHome-10"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="listHome-11">
            <div className="listHome-12">
              <img alt="" src={getLogo(key)} className="listHome-13" />
            </div>
          </div>
          <div className="listHome-14">
            <span className="listHome-15"> {key.toUpperCase()}/USDT </span>
          </div>
          <div className="listHome-16">
            <span className="listHome-17">
              <b className="listHome-18">
                <span key={"marketlistclosea" + key}>
                  {coinListData[key]?.close}
                </span>
                <span key={"marketlistcloseb" + key}>
                  {!coinListData[key]?.close && "--"}
                </span>
              </b>
            </span>
          </div>
          <div className="listHome-19">
            <button
              className={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "listHome-20"
                  : "listHome-59"
              }
            >
              <div className="listHome-21">
                <span className="listHome-22">
                  <span key={"marketlistopena" + key}>
                    {coinListData[key]?.close &&
                      (
                        ((coinListData[key]?.close - coinListData[key]?.open) /
                          coinListData[key]?.open) *
                        100
                      ).toFixed(2)}
                  </span>
                  <span key={"marketlistopenb" + key}>
                    {coinListData[key]?.close ? "" : "0.00"}
                  </span>
                  %
                </span>
              </div>
            </button>
          </div>
        </div>
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
    <>
      <div className="searchHomeDiv">
        {/* <Search
          onchange={(e) => {
            setName(e.target.value);
          }}
        /> */}
        <div className="listHome-3">
          <div className="listHome-4">{translate(getText("市場名稱"))}</div>
          <div className="listHome-4">{translate(getText("最新價格"))}</div>
          <div className="listHome-4">
            {/* <span className="listHome-9">{translate(getText("24H漲跌"))}</span> */}
            24H
          </div>
        </div>
      </div>
      <div className="listHome-1">
        <div className="listHome-2">{getNodes()}</div>
      </div>
    </>
  );
}
