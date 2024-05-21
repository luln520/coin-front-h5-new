import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopText({}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div  class="marketTopText-1">
      <div  class="marketTopText-2">
        <div  class="marketTopText-3">
          <p  class="marketTopText-4">
            BTC
            <span  class="marketTopText-5">
              /USDT
            </span>
          </p>
          <i  class="marketTopText-6"></i>
        </div>
        <h1  class="marketTopText-7">
          70455.05
        </h1>
        <p  class="marketTopText-8">
          <span  class="marketTopText-9">
            3040.11
          </span>
          <span  class="marketTopText-10">
            4.51%
          </span>
        </p>
      </div>
      <div  class="marketTopText-11">
        <ul  class="marketTopText-12">
          <li  class="marketTopText-13">
            <p  class="marketTopText-14">
              開盤
            </p>
            <span  class="marketTopText-15">
              67414.94
            </span>
          </li>
          <li  class="marketTopText-16">
            <p  class="marketTopText-17">
              成交量
            </p>
            <span  class="marketTopText-18">
              0.40萬
            </span>
          </li>
          <li  class="marketTopText-19">
            <p  class="marketTopText-20">
              最低
            </p>
            <span  class="marketTopText-21">
              67387.06
            </span>
          </li>
          <li  class="marketTopText-22">
            <p  class="marketTopText-23">
              最高
            </p>
            <span  class="marketTopText-24">
              71969.13
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
