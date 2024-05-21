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
    <div class="rechargeorderlist-1">
      <div class="rechargeorderlist-2">
        <ul class="rechargeorderlist-3">
          <li class="rechargeorderlist-4">
            <div class="rechargeorderlist-5">
              <h1 class="rechargeorderlist-6">100000 USDT</h1>
              <div class="rechargeorderlist-7">
                <span class="rechargeorderlist-8">
                  <small class="rechargeorderlist-9">2024-02-13 10:23:19</small>
                </span>
              </div>
            </div>
            <div class="rechargeorderlist-10">
              <p class="rechargeorderlist-11">通過</p>
            </div>
          </li>
          <li class="rechargeorderlist-12">
            <div class="rechargeorderlist-13">
              <h1 class="rechargeorderlist-14">3000000 USDT</h1>
              <div class="rechargeorderlist-15">
                <span class="rechargeorderlist-16">
                  <small class="rechargeorderlist-17">
                    2024-02-13 10:19:06
                  </small>
                </span>
              </div>
            </div>
            <div class="rechargeorderlist-18">
              <p class="rechargeorderlist-19">通過</p>
            </div>
          </li>
          <li class="rechargeorderlist-20">
            <div class="rechargeorderlist-21">
              <h1 class="rechargeorderlist-22">200000 USDT</h1>
              <div class="rechargeorderlist-23">
                <span class="rechargeorderlist-24">
                  <small class="rechargeorderlist-25">
                    2024-02-13 10:18:40
                  </small>
                </span>
              </div>
            </div>
            <div class="rechargeorderlist-26">
              <p class="rechargeorderlist-27">通過</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
