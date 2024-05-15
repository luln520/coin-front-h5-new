import { useNavigate } from "react-router-dom";
import { Popup, Space, Button } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function CoinPopup({
  isShow,
  setIsShow,
  coinListData,
  index,
  ctmarketlist,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [popIndex, setPopIndex] = useState(index);
  const [name, setName] = useState("");
  const toPage = (name) => {
    const uri = popIndex == 1 ? "trade" : "lever";
    navigate(`/${uri}/${name}`);
    setIsShow(false);
  };
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
          className="coinPopupTopCoinList-140"
          onClick={() => {
            toPage(key);
          }}
        >
          <div className="coinPopupTopCoinList-141">
            <div className="coinPopupTopCoinList-142">
              <img
                alt=""
                src={getLogo(key)}
                className="coinPopupTopCoinList-143"
              />
            </div>
          </div>
          <div className="coinPopupTopCoinList-144">
            <span className="coinPopupTopCoinList-145">
              {key.toUpperCase()}/USDT
            </span>
          </div>
          <div className="coinPopupTopCoinList-146">
            <b className="coinPopupTopCoinList-147">
              {coinListData[key]?.close}
            </b>
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
    <Popup
      visible={isShow}
      onMaskClick={() => {
        setIsShow(false);
      }}
      position="left"
      bodyStyle={{ width: "75vw", backgroundColor: "#f5f5f5" }}
    >
      {/* title */}
      <div className="coinPopupTopBar-1">
        <div className="coinPopupTopBar-2">
          <div
            className={
              popIndex == 1 ? "coinPopupTopBar-5" : "coinPopupTopBar-7"
            }
            onClick={() => {
              setPopIndex(1);
            }}
          >
            <span className="coinPopupTopBar-6">
              {translate(getText("期權"))}
            </span>
          </div>
          <div
            className={
              popIndex == 2 ? "coinPopupTopBar-5" : "coinPopupTopBar-7"
            }
            onClick={() => {
              setPopIndex(2);
            }}
          >
            <span className="coinPopupTopBar-8">
              {translate(getText("槓桿"))}
            </span>
          </div>
        </div>
      </div>
      <Search
        onchange={(e) => {
          setName(e.target.value);
        }}
      />
      {/* list */}
      <div id="coinList" className="coinPopupTopCoinList-1">
        <div className="coinPopupTopCoinList-139">{getNodes()}</div>
      </div>
    </Popup>
  );
}
