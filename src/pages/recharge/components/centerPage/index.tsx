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
    <div class="recharge-1">
      <div class="recharge-2">
        <div class="recharge-3">
          <div class="recharge-4">
            <div class="recharge-5"></div>
            <img
              src="https://kmadmin.lpyrmgck.online/banner/20240326190254593292.png"
              
              class="recharge-6"
            />
          </div>
        </div>
        <div class="recharge-7">
          <div class="recharge-8">保存二維碼</div>
        </div>
        <div class="recharge-9">
          <div class="recharge-10">
            <h1 class="recharge-11">充幣地址</h1>
            <p class="recharge-12">
              <br class="recharge-13" />
            </p>
            <p class="recharge-14">
              0x8e020e0f7b5De15A97e5A44BfC9071c30F631eE7
            </p>
          </div>
          <div class="recharge-15">
            <div class="recharge-16">複製地址</div>
          </div>
        </div>
        <div class="recharge-17">
          <div class="recharge-18">
            <ul class="recharge-19">
              <li class="recharge-20">
                <p class="recharge-21">充幣數量</p>
                <div class="recharge-22">
                  <div class="recharge-23">
                    <div class="recharge-24"></div>
                    <input type="number" class="recharge-25" />
                  </div>
                </div>
              </li>
              <li class="recharge-26">
                <p class="recharge-27">上傳支付詳情截圖</p>
                <div class="recharge-28">
                  <div class="recharge-29">
                    <img
                      src="https://www.btexure.vip/static/img/img-add.png"
                      
                      class="recharge-31"
                    />
                  </div>
                  <p class="recharge-32">點擊上傳圖片</p>
                </div>
              </li>
            </ul>
            <div class="recharge-33">
              <div class="recharge-34">提交</div>
            </div>
          </div>
        </div>
        <div data-v-3b7f4566="" class="recharge-35"></div>
      </div>
    </div>
  );
}
