import { Toast } from "antd-mobile";
import { Image, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcodejs2";
import "./index.css";
import { imageConfig } from "../../../../config/config";
import copy from "copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Center({}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="rechargeCenter-1">
      <div className="rechargeCenter-2">
        <div className="rechargeCenter-3">
          <span className="rechargeCenter-19">
            {translate(getText("提款說明"))}
          </span>
          <div className="rechargeCenter-20">
            <p className="rechargeCenter-21">
              <p className="rechargeCenter-22">
                1.
                {translate(
                  getText(
                    "最小提币数量：50.00USDT，小于最小金额的提币将不会到账且无法退回"
                  )
                )}
                <br className="extractCenter-33" />
                2.
                {translate(
                  getText("请务必确认电脑及浏览器安全，防止信息被篡改或泄露")
                )}
                <br className="extractCenter-33" />
                3.
                {translate(
                  getText(
                    "关於提現功能根據相關加密貨幣反洗錢管理規定需要達到存入金額相同的交易量"
                  )
                )}
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
