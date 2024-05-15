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
    <div className="xhxl-1">
      <div className="xhxl-2">線路 1[926ms]</div>
      <div className="xhxl-5">線路 2[-ms]</div>
    </div>
  );
}
