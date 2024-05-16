import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();

  return (
    <div class="helpinfo-1">
      <div class="helpinfo-2">
        <div class="helpinfo-3">
          <div class="helpinfo-4">
            <div class="helpinfo-5">
              <div class="helpinfo-6">
                <p class="helpinfo-7">
                  資產中折合計算的是當前持有數字貨幣折合USDT的價值，因數字資產的價格波動而變化。您的數字資產數量並沒有改變。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
