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
    <div class="extractlist-1">
      <div class="extractlist-2">
        <div class="extractlist-3"></div>
        <div class="extractlist-4">
          <div
            class="extractlist-5"
            onClick={() => {
              navigate("/extract");
            }}
          >
            <div class="extractlist-6">
              <div class="extractlist-7">
                <div class="extractlist-8">
                  <div class="extractlist-9"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20221119005649563175.png"
                    
                    class="extractlist-10"
                  />
                </div>
                <div class="extractlist-11">
                  <span class="extractlist-12">USDT提現</span>
                </div>
              </div>
              <div class="extractlist-13">
                <span class="extractlist-14">
                  <span class="extractlist-15">提現</span>
                </span>
                <i class="extractlist-16"></i>
              </div>
            </div>
          </div>
          <div class="extractlist-17">
            <div class="extractlist-18">
              <div class="extractlist-19">
                <div class="extractlist-20">
                  <div class="extractlist-21"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20221119005703704222.png"
                    
                    class="extractlist-22"
                  />
                </div>
                <div class="extractlist-23">
                  <span class="extractlist-24">BTC提現</span>
                </div>
              </div>
              <div class="extractlist-25">
                <span class="extractlist-26">
                  <span class="extractlist-27">提現</span>
                </span>
                <i class="extractlist-28"></i>
              </div>
            </div>
          </div>
          <div class="extractlist-29">
            <div class="extractlist-30">
              <div class="extractlist-31">
                <div class="extractlist-32">
                  <div class="extractlist-33"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20221119005717735296.png"
                    
                    class="extractlist-34"
                  />
                </div>
                <div class="extractlist-35">
                  <span class="extractlist-36">ETH提現</span>
                </div>
              </div>
              <div class="extractlist-37">
                <span class="extractlist-38">
                  <span class="extractlist-39">提現</span>
                </span>
                <i class="extractlist-40"></i>
              </div>
            </div>
          </div>
          <div class="extractlist-41">
            <div class="extractlist-42">
              <div class="extractlist-43">
                <div class="extractlist-44">
                  <div class="extractlist-45"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20231019204241721398.png"
                    
                    class="extractlist-46"
                  />
                </div>
                <div class="extractlist-47">
                  <span class="extractlist-48">VND提現</span>
                </div>
              </div>
              <div class="extractlist-49">
                <span class="extractlist-50">
                  <span class="extractlist-51">提現</span>
                </span>
                <i class="extractlist-52"></i>
              </div>
            </div>
          </div>
          <div class="extractlist-53">
            <div class="extractlist-54">
              <div class="extractlist-55">
                <div class="extractlist-56">
                  <div class="extractlist-57"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20210826114245225109.png"
                    
                    class="extractlist-58"
                  />
                </div>
                <div class="extractlist-59">
                  <span class="extractlist-60">USD提現</span>
                </div>
              </div>
              <div class="extractlist-61">
                <span class="extractlist-62">
                  <span class="extractlist-63">提現</span>
                </span>
                <i class="extractlist-64"></i>
              </div>
            </div>
          </div>
          <div class="extractlist-65">
            <div class="extractlist-66">
              <div class="extractlist-67">
                <div class="extractlist-68">
                  <div class="extractlist-69"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20220324032205664378.png"
                    
                    class="extractlist-70"
                  />
                </div>
                <div class="extractlist-71">
                  <span class="extractlist-72">EUR提現</span>
                </div>
              </div>
              <div class="extractlist-73">
                <span class="extractlist-74">
                  <span class="extractlist-75">提現</span>
                </span>
                <i class="extractlist-76"></i>
              </div>
            </div>
          </div>
          <div class="extractlist-77">
            <div class="extractlist-78">
              <div class="extractlist-79">
                <div class="extractlist-80">
                  <div class="extractlist-81"></div>
                  <img
                    src="https://kmadmin.lpyrmgck.online/banner/20240216074328978161.png"
                    
                    class="extractlist-82"
                  />
                </div>
                <div class="extractlist-83">
                  <span class="extractlist-84">MYR提現</span>
                </div>
              </div>
              <div class="extractlist-85">
                <span class="extractlist-86">
                  <span class="extractlist-87">提現</span>
                </span>
                <i class="extractlist-88"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="extractlist-89"></div>
      </div>
    </div>
  );
}
