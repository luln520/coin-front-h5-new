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
    <div className="languagechange-1">
      <div className="languagechange-2">English</div>
      <div className="languagechange-3">中文繁體</div>
      <div className="languagechange-4">日本語</div>
      <div className="languagechange-5">Việt Nam</div>
      <div className="languagechange-6">한국어</div>
      <div className="languagechange-7">中文简体</div>
      <div className="languagechange-8">ไทย</div>
      <div className="languagechange-9">Deutsche</div>
      <div className="languagechange-10">français</div>
      <div className="languagechange-11">Español</div>
      <div className="languagechange-12">Pусский</div>
      <div className="languagechange-13">Português</div>
      <div className="languagechange-14">Беларуская</div>
    </div>
  );
}
