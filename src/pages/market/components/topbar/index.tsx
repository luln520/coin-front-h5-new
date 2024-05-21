import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBar({}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="marketTopBar-1">
      <div class="marketTopBar-2">
        <div class="marketTopBar-3">極速</div>
        <div class="marketTopBar-4">合約</div>
        <div class="marketTopBar-5">幣幣</div>
      </div>
      <div class="marketTopBar-6">
        <div class="marketTopBar-7">
          <i class="marketTopBar-8"></i>
          <span class="marketTopBar-9">持倉</span>
        </div>
        <div class="marketTopBar-10">
          <div class="marketTopBar-11">
            <span class="marketTopBar-12"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
