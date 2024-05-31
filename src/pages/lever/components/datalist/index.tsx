import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function DataList({}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getArray = () => {
    const nodes = [];
    for (const i in times) {
      const time = times[i];
      nodes.push();
    }
    return nodes;
  };
  return (
    <div class="leverDataBox-1">
      <div class="leverDataBox-2">
        <div class="leverDataBox-3">
          <div class="leverDataBox-4">
            <span class="leverDataBox-5">數量</span>
          </div>
          <div class="leverDataBox-6">
            <span class="leverDataBox-7">價格</span>
          </div>
        </div>
        <div class="leverDataBox-8">
          <div class="leverDataBox-9">
            <div class="leverDataBox-10">
              <span class="leverDataBox-11">0.218674</span>
            </div>
            <div class="leverDataBox-12">
              <span class="leverDataBox-13">67493.09</span>
            </div>
          </div>
          <div class="leverDataBox-14">
            <div class="leverDataBox-15">
              <span class="leverDataBox-16">0.061947</span>
            </div>
            <div class="leverDataBox-17">
              <span class="leverDataBox-18">67493.06</span>
            </div>
          </div>
          <div class="leverDataBox-19">
            <div class="leverDataBox-20">
              <span class="leverDataBox-21">0.205219</span>
            </div>
            <div class="leverDataBox-22">
              <span class="leverDataBox-23">67493.05</span>
            </div>
          </div>
          <div class="leverDataBox-24">
            <div class="leverDataBox-25">
              <span class="leverDataBox-26">0.048492</span>
            </div>
            <div class="leverDataBox-27">
              <span class="leverDataBox-28">67493.02</span>
            </div>
          </div>
          <div class="leverDataBox-29">
            <div class="leverDataBox-30">
              <span class="leverDataBox-31">0.191764</span>
            </div>
            <div class="leverDataBox-32">
              <span class="leverDataBox-33">67493.01</span>
            </div>
          </div>
          <div class="leverDataBox-34">
            <div class="leverDataBox-35">
              <span class="leverDataBox-36">0.035037</span>
            </div>
            <div class="leverDataBox-37">
              <span class="leverDataBox-38">67492.98</span>
            </div>
          </div>
          <div class="leverDataBox-39">
            <div class="leverDataBox-40">
              <span class="leverDataBox-41">0.178309</span>
            </div>
            <div class="leverDataBox-42">
              <span class="leverDataBox-43">67492.97</span>
            </div>
          </div>
          <div class="leverDataBox-44">
            <div class="leverDataBox-45">
              <span class="leverDataBox-46">0.021582</span>
            </div>
            <div class="leverDataBox-47">
              <span class="leverDataBox-48">67492.94</span>
            </div>
          </div>
          <div class="leverDataBox-49">
            <div class="leverDataBox-50">
              <span class="leverDataBox-51">0.164854</span>
            </div>
            <div class="leverDataBox-52">
              <span class="leverDataBox-53">67492.93</span>
            </div>
          </div>
          <div class="leverDataBox-54">
            <div class="leverDataBox-55">
              <span class="leverDataBox-56">0.008126</span>
            </div>
            <div class="leverDataBox-57">
              <span class="leverDataBox-58">67492.9</span>
            </div>
          </div>
        </div>
      </div>
      <div class="leverDataBox-59">
        <div class="leverDataBox-60">
          <div class="leverDataBox-61">
            <span class="leverDataBox-62">價格</span>
          </div>
          <div class="leverDataBox-63">
            <span class="leverDataBox-64">數量</span>
          </div>
        </div>
        <div class="leverDataBox-65">
          <div class="leverDataBox-66">
            <div class="leverDataBox-67">
              <span class="leverDataBox-68">67493.38</span>
            </div>
            <div class="leverDataBox-69">
              <span class="leverDataBox-70">0.124488</span>
            </div>
          </div>
          <div class="leverDataBox-71">
            <div class="leverDataBox-72">
              <span class="leverDataBox-73">67493.34</span>
            </div>
            <div class="leverDataBox-74">
              <span class="leverDataBox-75">0.281215</span>
            </div>
          </div>
          <div class="leverDataBox-76">
            <div class="leverDataBox-77">
              <span class="leverDataBox-78">67493.32</span>
            </div>
            <div class="leverDataBox-79">
              <span class="leverDataBox-80">0.137943</span>
            </div>
          </div>
          <div class="leverDataBox-81">
            <div class="leverDataBox-82">
              <span class="leverDataBox-83">67493.28</span>
            </div>
            <div class="leverDataBox-84">
              <span class="leverDataBox-85">0.29467</span>
            </div>
          </div>
          <div class="leverDataBox-86">
            <div class="leverDataBox-87">
              <span class="leverDataBox-88">67493.26</span>
            </div>
            <div class="leverDataBox-89">
              <span class="leverDataBox-90">0.151398</span>
            </div>
          </div>
          <div class="leverDataBox-91">
            <div class="leverDataBox-92">
              <span class="leverDataBox-93">67493.22</span>
            </div>
            <div class="leverDataBox-94">
              <span class="leverDataBox-95">0.008126</span>
            </div>
          </div>
          <div class="leverDataBox-96">
            <div class="leverDataBox-97">
              <span class="leverDataBox-98">67493.2</span>
            </div>
            <div class="leverDataBox-99">
              <span class="leverDataBox-100">0.164854</span>
            </div>
          </div>
          <div class="leverDataBox-101">
            <div class="leverDataBox-102">
              <span class="leverDataBox-103">67493.16</span>
            </div>
            <div class="leverDataBox-104">
              <span class="leverDataBox-105">0.021582</span>
            </div>
          </div>
          <div class="leverDataBox-106">
            <div class="leverDataBox-107">
              <span class="leverDataBox-108">67493.13</span>
            </div>
            <div class="leverDataBox-109">
              <span class="leverDataBox-110">0.178309</span>
            </div>
          </div>
          <div class="leverDataBox-111">
            <div class="leverDataBox-112">
              <span class="leverDataBox-113">67493.12</span>
            </div>
            <div class="leverDataBox-114">
              <span class="leverDataBox-115">0.035037</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
