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
          {/*  二维码 */}
          <span className="rechargeCenter-19">
            {translate(getText("充值說明"))}
          </span>
          <div className="rechargeCenter-20">
            <p className="rechargeCenter-21">
              <p className="rechargeCenter-22">
                {translate(
                  getText(
                    "最小充值金额：10.00USDT，小于最小金额的充值将不会上账且无法退回"
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
