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
  const [type, setType] = useState(1);
  const getZFNodes = () => {
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
          className="homecoinlist-6"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="homecoinlist-7">
            <div className="homecoinlist-8">
              <img src={getLogo(key)} className="homecoinlist-10" />
            </div>
            <h1 className="homecoinlist-11">
              {key.toUpperCase()}
              <span className="homecoinlist-12">/USDT</span>
            </h1>
            <p className="homecoinlist-13">{coinListData[key]?.close}</p>
            <p
              className={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "homecoinlist-383"
                  : "homecoinlist-14"
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
            </p>
          </div>
        </div>
      );
    }
    return nodes;
  };

  const getCGNodes = () => {
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
          class="jiaoyiliang-3"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="jiaoyiliang-4">
            <img src={getLogo(key)} class="jiaoyiliang-6" />
          </div>
          <h1 class="jiaoyiliang-7">
            {key.toUpperCase()}
            <span class="jiaoyiliang-8">/USDT</span>
          </h1>
          <p class="jiaoyiliang-9">{coinListData[key]?.close}</p>
          <p class="jiaoyiliang-10">
            {(coinListData[key]?.vol / 10000).toFixed(2)}
            {translate(getText("萬"))}
          </p>
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
    <div className="homecoinlist-1">
      <div className="homecoinlist-2">
        <div
          className={type == 1 ? "homecoinlist-3" : "homecoinlist-4"}
          onClick={() => {
            setType(1);
          }}
        >
          {translate(getText("漲幅榜"))}
        </div>
        <div
          className={type == 2 ? "homecoinlist-3" : "homecoinlist-4"}
          onClick={() => {
            setType(2);
          }}
        >
          {translate(getText("成交量"))}
        </div>
      </div>
      {type == 1 && <div className="homecoinlist-5">{getZFNodes()}</div>}
      {type == 2 && (
        <div class="jiaoyiliang-1">
          <div class="jiaoyiliang-2">{getCGNodes()}</div>
        </div>
      )}
    </div>
  );
}
