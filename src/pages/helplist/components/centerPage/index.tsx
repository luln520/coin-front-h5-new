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
    <uni-page-body class="helplist-1">
      <uni-view class="helplist-2">
        <uni-view class="helplist-3">
          <uni-view class="helplist-4">
            <uni-view class="helplist-5">
              <uni-view class="helplist-6">
                資產中的折合金額為什麼會產生變化？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-7">
              <uni-text class="helplist-8">
                <span class="helplist-9"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-10">
            <uni-view class="helplist-11">
              <uni-view class="helplist-12">
                忘記平台交易的資金密碼處理辦法
              </uni-view>
            </uni-view>
            <uni-view class="helplist-13">
              <uni-text class="helplist-14">
                <span class="helplist-15"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-16">
            <uni-view class="helplist-17">
              <uni-view class="helplist-18">
                交易買入完成後的資金流向哪裡？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-19">
              <uni-text class="helplist-20">
                <span class="helplist-21"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-22">
            <uni-view class="helplist-23">
              <uni-view class="helplist-24">
                為什麼要限制修改昵稱的次數
              </uni-view>
            </uni-view>
            <uni-view class="helplist-25">
              <uni-text class="helplist-26">
                <span class="helplist-27"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-28">
            <uni-view class="helplist-29">
              <uni-view class="helplist-30">
                劃轉時什麼意思，為什麼需要劃轉
              </uni-view>
            </uni-view>
            <uni-view class="helplist-31">
              <uni-text class="helplist-32">
                <span class="helplist-33"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-34">
            <uni-view class="helplist-35">
              <uni-view class="helplist-36">
                如何計算用戶合約的賬戶權益？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-37">
              <uni-text class="helplist-38">
                <span class="helplist-39"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-40">
            <uni-view class="helplist-41">
              <uni-view class="helplist-42">
                開倉中設定的止損止盈的數值作用是什麼？應當如何設定？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-43">
              <uni-text class="helplist-44">
                <span class="helplist-45"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-46">
            <uni-view class="helplist-47">
              <uni-view class="helplist-48">如何降低合約風險度？</uni-view>
            </uni-view>
            <uni-view class="helplist-49">
              <uni-text class="helplist-50">
                <span class="helplist-51"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-52">
            <uni-view class="helplist-53">
              <uni-view class="helplist-54">
                合約開倉中的數量表示什麼？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-55">
              <uni-text class="helplist-56">
                <span class="helplist-57"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-58">
            <uni-view class="helplist-59">
              <uni-view class="helplist-60">
                合約中的手續費時如何計算的？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-61">
              <uni-text class="helplist-62">
                <span class="helplist-63"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-64">
            <uni-view class="helplist-65">
              <uni-view class="helplist-66">關於強制平倉的說明</uni-view>
            </uni-view>
            <uni-view class="helplist-67">
              <uni-text class="helplist-68">
                <span class="helplist-69"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-70">
            <uni-view class="helplist-71">
              <uni-view class="helplist-72">合約交易規則是什麼？</uni-view>
            </uni-view>
            <uni-view class="helplist-73">
              <uni-text class="helplist-74">
                <span class="helplist-75"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-76">
            <uni-view class="helplist-77">
              <uni-view class="helplist-78">
                合約交易中的保證金是什麼？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-79">
              <uni-text class="helplist-80">
                <span class="helplist-81"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-82">
            <uni-view class="helplist-83">
              <uni-view class="helplist-84">
                什麼是限價委託和市價委託？
              </uni-view>
            </uni-view>
            <uni-view class="helplist-85">
              <uni-text class="helplist-86">
                <span class="helplist-87"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-88">
            <uni-view class="helplist-89">
              <uni-view class="helplist-90">合約交易的風險度代表什麼</uni-view>
            </uni-view>
            <uni-view class="helplist-91">
              <uni-text class="helplist-92">
                <span class="helplist-93"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-94">
            <uni-view class="helplist-95">
              <uni-view class="helplist-96">為什麼需要進行幣種兌換？</uni-view>
            </uni-view>
            <uni-view class="helplist-97">
              <uni-text class="helplist-98">
                <span class="helplist-99"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-100">
            <uni-view class="helplist-101">
              <uni-view class="helplist-102">
                為什麼交易轉賬後，對方未及時收到轉款？
              </uni-view>
            </uni-view>
            <uni-view data-v-0f4c3eed="" class="helplist-103">
              <uni-text class="helplist-104">
                <span class="helplist-105"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-106">
            <uni-view class="helplist-107">
              <uni-view class="helplist-108">
                如何通過平台購買泰達幣（USDT）？
              </uni-view>
            </uni-view>
            <uni-view data-v-0f4c3eed="" class="helplist-109">
              <uni-text class="helplist-110">
                <span class="helplist-111"></span>
              </uni-text>
            </uni-view>
          </uni-view>
          <uni-view class="helplist-112">
            <uni-view class="helplist-113">
              <uni-view class="helplist-114">提現到錯誤地址怎麼辦？</uni-view>
            </uni-view>
            <uni-view data-v-0f4c3eed="" class="helplist-115">
              <uni-text class="helplist-116">
                <span class="helplist-117"></span>
              </uni-text>
            </uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-page-body>
  );
}
