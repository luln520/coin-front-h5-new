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
    <div class="rechargelist-1">
      <div class="rechargelist-2">
        <div class="rechargelist-3">
          <div data-v-01dfbd2e="" class="rechargelist-4">
            <div data-v-01dfbd2e="" id="_top" class="rechargelist-5">
              <div data-v-01dfbd2e="" id="rtf41" class="rechargelist-6">
                <div class="rechargelist-7">
                  <p class="rechargelist-8">
                    請如實填寫實際轉賬金額，否則可能導致系統審核無法通過，影響充值進度。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="rechargelist-9">請選擇以下充值通道</p>
        <div class="rechargelist-10">
          <div
            class="rechargelist-11"
            onClick={() => {
              navigate("/recharge");
            }}
          >
            <div class="rechargelist-12">
              <div class="rechargelist-13">
                <div class="rechargelist-14">
                  <div class="rechargelist-15"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/2023011000551209516.png"
                    
                    class="rechargelist-16"
                  />
                  <div class="rechargelist-17">
                    <div class="rechargelist-18">
                      <div class="rechargelist-19"></div>
                    </div>
                    <div class="rechargelist-20">
                      <div class="rechargelist-21"></div>
                    </div>
                  </div>
                </div>
                <div class="rechargelist-22">
                  <span class="rechargelist-23">USDT(ERC20)</span>
                </div>
              </div>
              <div class="rechargelist-24">
                <span class="rechargelist-25">
                  <span class="rechargelist-26">前往購買</span>
                </span>
                <i class="rechargelist-27"></i>
              </div>
            </div>
          </div>
          <div class="rechargelist-28">
            <div class="rechargelist-29">
              <div class="rechargelist-30">
                <div class="rechargelist-31">
                  <div class="rechargelist-32"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20230110005530751199.png"
                    
                    class="rechargelist-33"
                  />
                  <div class="rechargelist-34">
                    <div class="rechargelist-35">
                      <div class="rechargelist-36"></div>
                    </div>
                    <div class="rechargelist-37">
                      <div class="rechargelist-38"></div>
                    </div>
                  </div>
                </div>
                <div class="rechargelist-39">
                  <span class="rechargelist-40">USDT(TRC20)</span>
                </div>
              </div>
              <div class="rechargelist-41">
                <span class="rechargelist-42">
                  <span class="rechargelist-43">前往購買</span>
                </span>
                <i class="rechargelist-44"></i>
              </div>
            </div>
          </div>
          <div class="rechargelist-45">
            <div class="rechargelist-46">
              <div class="rechargelist-47">
                <div class="rechargelist-48">
                  <div class="rechargelist-49"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20230110005553953116.png"
                    
                    class="rechargelist-50"
                  />
                  <div class="rechargelist-51">
                    <div class="rechargelist-52">
                      <div class="rechargelist-53"></div>
                    </div>
                    <div class="rechargelist-54">
                      <div class="rechargelist-55"></div>
                    </div>
                  </div>
                </div>
                <div class="rechargelist-56">
                  <span class="rechargelist-57">BTC</span>
                </div>
              </div>
              <div class="rechargelist-58">
                <span class="rechargelist-59">
                  <span class="rechargelist-60">前往購買</span>
                </span>
                <i class="rechargelist-61"></i>
              </div>
            </div>
          </div>
          <div class="rechargelist-62">
            <div class="rechargelist-63">
              <div class="rechargelist-64">
                <div class="rechargelist-65">
                  <div class="rechargelist-66"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20230110005612031318.png"
                    
                    class="rechargelist-67"
                  />
                  <div class="rechargelist-68">
                    <div class="rechargelist-69">
                      <div class="rechargelist-70"></div>
                    </div>
                    <div class="rechargelist-71">
                      <div class="rechargelist-72"></div>
                    </div>
                  </div>
                </div>
                <div class="rechargelist-73">
                  <span class="rechargelist-74">ETH</span>
                </div>
              </div>
              <div class="rechargelist-75">
                <span class="rechargelist-76">
                  <span class="rechargelist-77">前往購買</span>
                </span>
                <i class="rechargelist-78"></i>
              </div>
            </div>
          </div>
          <div class="rechargelist-79">
            <div class="rechargelist-80">
              <div class="rechargelist-81">
                <div class="rechargelist-82">
                  <div class="rechargelist-83"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20230110005634530104.png"
                    
                    class="rechargelist-84"
                  />
                  <div class="rechargelist-85">
                    <div class="rechargelist-86">
                      <div class="rechargelist-87"></div>
                    </div>
                    <div class="rechargelist-88">
                      <div class="rechargelist-89"></div>
                    </div>
                  </div>
                </div>
                <div class="rechargelist-90">
                  <span class="rechargelist-91">電匯</span>
                </div>
              </div>
              <div class="rechargelist-92">
                <span class="rechargelist-93">
                  <span class="rechargelist-94">前往購買</span>
                </span>
                <i class="rechargelist-95"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="rechargelist-96"></div>
      </div>
    </div>
  );
}
