import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function List({ coinListData, ctmarketlist, index }) {
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
          className="list-10"
          onClick={() => {
            if (index == 1) {
              navigate(`/trade/${key}`);
            }
            if (index == 3) {
              navigate(`/lever/${key}`);
            }
          }}
        >
          <div className="list-11">
            <div className="list-12">
              <img alt="" src={getLogo(key)} className="list-13" />
            </div>
          </div>
          <div className="list-14">
            <span className="list-15"> {key.toUpperCase()}/USDT </span>
          </div>
          <div className="list-16">
            <span className="list-17">
              <b className="list-18">
                <span key={'marketlistclosea'+key}>{coinListData[key]?.close}</span>
                <span key={'marketlistcloseb'+key}>{!coinListData[key]?.close && "--"}</span>
              </b>
            </span>
          </div>
          <div className="list-19">
            <button
              className={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "list-20"
                  : "list-59"
              }
            >
              <div className="list-21">
                <span className="list-22">
                <span key={'marketlistopena'+key}>{coinListData[key]?.close &&
                    (
                      ((coinListData[key]?.close - coinListData[key]?.open) /
                        coinListData[key]?.open) *
                      100
                    ).toFixed(2)}</span>
                  <span key={'marketlistopenb'+key}>{coinListData[key]?.close?'':"0.00"}</span>
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
      <div className="searchDiv">
        <Search
          onchange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="list-3">
          <div className="list-4">
            <span className="list-5">{translate(getText("市場名稱"))}</span>
          </div>
          <div className="list-6">
            <span className="list-7">{translate(getText("最新價格"))}</span>
          </div>
          <div className="list-8">
            <span className="list-9">{translate(getText("24H漲跌"))}</span>
          </div>
        </div>
      </div>
      <div className="list-1">
        <div className="list-2">{getNodes()}</div>
      </div>
    </>
  );
}
