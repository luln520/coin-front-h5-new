import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function JianJie({ nowTab, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [ctmarket, setCtmarket] = useState({} as any);
  const la = localStorage.getItem("i18n");
  const getData = () => {
    let data = {};
    if (ctmarketlist?.length) {
      for (let index = 0; index < ctmarketlist.length; index++) {
        const ctmarket = ctmarketlist[index];
        if (ctmarket?.coinname === nowTab) {
          data = ctmarket;
          break;
        }
      }
    }
    setCtmarket(data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div role="tabpanel" id="jianjie" className="leverjianjie-1">
      <div className="leverjianjie-2">
        <div className="leverjianjie-3">
          <h3 className="leverjianjie-4">{nowTab.toUpperCase()}/USDT</h3>
        </div>
        <div className="leverjianjie-5">
          <div className="leverjianjie-6">
            <span className="leverjianjie-7">{translate(getText("推出日期"))}</span>
          </div>
          <div className="leverjianjie-8">
            <span className="leverjianjie-9">{ctmarket?.publishTime}</span>
          </div>
        </div>
        <div className="leverjianjie-10">
          <div className="leverjianjie-11">
            <span className="leverjianjie-12">{translate(getText("問題數量"))}</span>
          </div>
          <div className="leverjianjie-13">
            <span className="leverjianjie-14">{ctmarket?.publishNum}</span>
          </div>
        </div>
        <div className="leverjianjie-15">
          <h3 className="leverjianjie-16">{translate(getText("簡介"))}</h3>
          <span className="leverjianjie-17">
          {ctmarket[`info${la?la[0].toUpperCase():''}${la?la[1]:''}`]}
          </span>
        </div>
      </div>
    </div>
  );
}
