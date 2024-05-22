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
    <div className="homecoinlist-1">
      <div className="homecoinlist-2">
        <div
          className="homecoinlist-3"
          onClick={() => {
            setType(1);
          }}
        >
          漲幅榜
        </div>
        <div
          className="homecoinlist-4"
          onClick={() => {
            setType(2);
          }}
        >
          成交量
        </div>
      </div>
      {type == 1 && (
        <div className="homecoinlist-5">
          <div className="homecoinlist-6">
            <div className="homecoinlist-7">
              <div className="homecoinlist-8">
                <div className="homecoinlist-9"></div>
                <img
                  src="https://kmadmin.lpyrmgck.online//banner/20221119004215305150.png"
                  
                  className="homecoinlist-10"
                />
              </div>
              <h1 className="homecoinlist-11">
                SOL<span className="homecoinlist-12">/USDT</span>
              </h1>
              <p className="homecoinlist-13">152.4801</p>
              <p className="homecoinlist-14">+6.66%</p>
            </div>
          </div>
          <div className="homecoinlist-375">
            <div className="homecoinlist-376">
              <div className="homecoinlist-377">
                <div className="homecoinlist-378"></div>
                <img
                  src="https://kmadmin.lpyrmgck.online//banner/2022111900430822647.png"
                  
                  className="homecoinlist-379"
                />
              </div>
              <h1 className="homecoinlist-380">
                VSYS<span className="homecoinlist-381">/USDT</span>
              </h1>
              <p className="homecoinlist-382">0.0008</p>
              <p className="homecoinlist-383">-7.85%</p>
            </div>
          </div>
        </div>
      )}
      {type == 2 && (
        <div class="jiaoyiliang-1">
          <div class="jiaoyiliang-2">
            <div class="jiaoyiliang-3">
              <div class="jiaoyiliang-4">
                <div class="jiaoyiliang-5"></div>
                <img
                  src="https://kmadmin.lpyrmgck.online//banner/20211127013814171401.png"
                  
                  class="jiaoyiliang-6"
                />
              </div>
              <h1 class="jiaoyiliang-7">
                SHIB<span class="jiaoyiliang-8">/USDT</span>
              </h1>
              <p class="jiaoyiliang-9">0.00002575</p>
              <p class="jiaoyiliang-10">2469.56萬</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
