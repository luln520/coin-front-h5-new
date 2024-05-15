import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import Noice from "../noice";
import { imageConfig } from "../../../../config/config";

export default function Zixunlist({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (
      let index = 0;
      index < (ctmarketlist.length > 3 ? 3 : ctmarketlist.length);
      index++
    ) {
      const ctmarket = ctmarketlist[index];
      const key = ctmarket.coinname;
      nodes.push(
        <span
          className="zixunlist-3"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="zixunlist-4">
            <div className="zixunlist-5">
              <span id="btc_coin_box" className="zixunlist-6">
                {key.toUpperCase()}/USDT
              </span>
            </div>
            <div id="btc_money_box" className="zixunlist-7">
              <span
                className={
                  coinListData[key]?.close < coinListData[key]?.open
                    ? "zixunlist-8-1"
                    : "zixunlist-8"
                }
              >
                <spna key={"zixunlistSpanclosea" + index}>
                  {coinListData[key]?.close}
                </spna>
                <spna key={"zixunlistSpancloseb" + index}>
                  {!coinListData[key]?.close && "--"}
                </spna>
              </span>
            </div>
            <div id="btc_change_box" className="zixunlist-9">
              <span
                className={
                  coinListData[key]?.close < coinListData[key]?.open
                    ? "zixunlist-10-1"
                    : "zixunlist-10"
                }
              >
                <spna key={"zixunlistSpanopena" + index}>
                  {coinListData[key]?.close &&
                    (
                      ((coinListData[key]?.close - coinListData[key]?.open) /
                        coinListData[key]?.open) *
                      100
                    ).toFixed(2)}
                </spna>
                <spna key={"zixunlistSpanopenb" + index}>
                  {coinListData[key]?.close ? "" : "0.00"}
                </spna>
                %
              </span>
            </div>
          </div>
        </span>
      );
    }
    return nodes;
  };

  const getLogo = (name) => {
    let logo = "";
    for (const ctmarket of ctmarketlist) {
      if (name == ctmarket.coinname) {
        logo = imageConfig.baseImageUrl + ctmarket.logo;
        break;
      }
    }
    return logo;
  };
  return (
    <div className="zixunlist-1">
      <div className="zixunlist-2">
        <div className="zixunlist-3">
          <div className="zixunlist-4">
            <div className="zixunlist-5">
              <h1 className="zixunlist-6">
                BTC
                <span className="zixunlist-7">/USDT</span>
              </h1>
              <h1 className="zixunlist-8">64064.54</h1>
              <small className="zixunlist-9">+3.71%</small>
            </div>
            <div className="zixunlist-10">
              <h1 className="zixunlist-11">
                ETH
                <span className="zixunlist-12">/USDT</span>
              </h1>
              <h1 className="zixunlist-13">2952.83</h1>
              <small className="zixunlist-14">+1.92%</small>
            </div>
            <div className="zixunlist-15">
              <h1 className="zixunlist-16">
                DOGE
                <span className="zixunlist-17">/USDT</span>
              </h1>
              <h1 className="zixunlist-18">0.1511</h1>
              <small className="zixunlist-19">+2.03%</small>
            </div>
            <div className="zixunlist-20">
              <h1 className="zixunlist-21">
                DOT
                <span className="zixunlist-22">/USDT</span>
              </h1>
              <h1 className="zixunlist-23">6.8343</h1>
              <small className="zixunlist-24">+2.82%</small>
            </div>
            <div className="zixunlist-25">
              <h1 className="zixunlist-26">
                SHIB
                <span className="zixunlist-27">/USDT</span>
              </h1>
              <h1 className="zixunlist-28">0.00002409</h1>
              <small className="zixunlist-29">+3.61%</small>
            </div>
            <div className="zixunlist-30">
              <h1 className="zixunlist-31">
                ADA
                <span className="zixunlist-32">/USDT</span>
              </h1>
              <h1 className="zixunlist-33">0.444086</h1>
              <small className="zixunlist-34">+1.86%</small>
            </div>
            <div className="zixunlist-35">
              <h1 className="zixunlist-36">
                CRO
                <span className="zixunlist-37">/USDT</span>
              </h1>
              <h1 className="zixunlist-38">0.063696</h1>
              <small className="zixunlist-39">-1.87%</small>
            </div>
            <div className="zixunlist-40">
              <h1 className="zixunlist-41">
                FIL
                <span className="zixunlist-42">/USDT</span>
              </h1>
              <h1 className="zixunlist-43">5.6118</h1>
              <small className="zixunlist-44">+2.90%</small>
            </div>
            <div className="zixunlist-45">
              <h1 className="zixunlist-46">
                LTC
                <span className="zixunlist-47">/USDT</span>
              </h1>
              <h1 className="zixunlist-48">80.1900</h1>
              <small className="zixunlist-49">+0.67%</small>
            </div>
            <div className="zixunlist-50">
              <h1 className="zixunlist-51">
                LRC
                <span className="zixunlist-52">/USDT</span>
              </h1>
              <h1 className="zixunlist-53">0.2484</h1>
              <small className="zixunlist-54">-5.08%</small>
            </div>
            <div className="zixunlist-55">
              <h1 className="zixunlist-56">
                SOL
                <span className="zixunlist-57">/USDT</span>
              </h1>
              <h1 className="zixunlist-58">151.8472</h1>
              <small className="zixunlist-59">+6.22%</small>
            </div>
            <div className="zixunlist-60">
              <h1 className="zixunlist-61">
                BCH
                <span className="zixunlist-62">/USDT</span>
              </h1>
              <h1 className="zixunlist-63">441.8100</h1>
              <small className="zixunlist-64">+1.73%</small>
            </div>
            <div className="zixunlist-65">
              <h1 className="zixunlist-66">
                LUNA
                <span className="zixunlist-67">/USDT</span>
              </h1>
              <h1 className="zixunlist-68">0.5708</h1>
              <small className="zixunlist-69">+1.91%</small>
            </div>
            <div className="zixunlist-70">
              <h1 className="zixunlist-71">
                ETC
                <span className="zixunlist-72">/USDT</span>
              </h1>
              <h1 className="zixunlist-73">26.3643</h1>
              <small className="zixunlist-74">+2.77%</small>
            </div>
            <div className="zixunlist-75">
              <h1 className="zixunlist-76">
                TRX
                <span className="zixunlist-77">/USDT</span>
              </h1>
              <h1 className="zixunlist-78">0.1258</h1>
              <small className="zixunlist-79">+0.53%</small>
            </div>
            <div className="zixunlist-80">
              <h1 className="zixunlist-81">
                EOS
                <span className="zixunlist-82">/USDT</span>
              </h1>
              <h1 className="zixunlist-83">0.7895</h1>
              <small className="zixunlist-84">+1.60%</small>
            </div>
            <div className="zixunlist-85">
              <h1 className="zixunlist-86">
                BSV
                <span className="zixunlist-87">/USDT</span>
              </h1>
              <h1 className="zixunlist-88">61.5929</h1>
              <small className="zixunlist-89">+2.71%</small>
            </div>
            <div className="zixunlist-90">
              <h1 className="zixunlist-91">
                DASH
                <span className="zixunlist-92">/USDT</span>
              </h1>
              <h1 className="zixunlist-93">28.4600</h1>
              <small className="zixunlist-94">+2.04%</small>
            </div>
            <div className="zixunlist-95">
              <h1 className="zixunlist-96">
                XMR
                <span className="zixunlist-97">/USDT</span>
              </h1>
              <h1 className="zixunlist-98">133.9100</h1>
              <small className="zixunlist-99">-0.13%</small>
            </div>
            <div className="zixunlist-100">
              <h1 className="zixunlist-101">
                XLM
                <span className="zixunlist-102">/USDT</span>
              </h1>
              <h1 className="zixunlist-103">0.1049</h1>
              <small className="zixunlist-104">+1.56%</small>
            </div>
            <div className="zixunlist-105">
              <h1 className="zixunlist-106">
                YFI
                <span className="zixunlist-107">/USDT</span>
              </h1>
              <h1 className="zixunlist-108">6698.65</h1>
              <small className="zixunlist-109">-0.89%</small>
            </div>
            <div className="zixunlist-110">
              <h1 className="zixunlist-111">
                LET
                <span className="zixunlist-112">/USDT</span>
              </h1>
              <h1 className="zixunlist-113">0.000507</h1>
              <small className="zixunlist-114">-0.20%</small>
            </div>
            <div className="zixunlist-115">
              <h1 className="zixunlist-116">
                VSYS
                <span className="zixunlist-117">/USDT</span>
              </h1>
              <h1 className="zixunlist-118">0.0008</h1>
              <small className="zixunlist-119">-3.02%</small>
            </div>
            <div className="zixunlist-120">
              <h1 className="zixunlist-121">
                CVC
                <span className="zixunlist-122">/USDT</span>
              </h1>
              <h1 className="zixunlist-123">0.1646</h1>
              <small className="zixunlist-124">+2.75%</small>
            </div>
            <div className="zixunlist-125">
              <h1 className="zixunlist-126">
                BLZ
                <span className="zixunlist-127">/USDT</span>
              </h1>
              <h1 className="zixunlist-128">0.3723</h1>
              <small className="zixunlist-129">-0.56%</small>
            </div>
            <div className="zixunlist-130">
              <h1 className="zixunlist-131">
                XRP
                <span className="zixunlist-132">/USDT</span>
              </h1>
              <h1 className="zixunlist-133">0.5079</h1>
              <small className="zixunlist-134">-0.06%</small>
            </div>
            <div className="zixunlist-135">
              <h1 className="zixunlist-136">
                WTC
                <span className="zixunlist-137">/USDT</span>
              </h1>
              <h1 className="zixunlist-138">0.0101</h1>
              <small className="zixunlist-139">-2.88%</small>
            </div>
            <div className="zixunlist-140">
              <h1 className="zixunlist-141">
                IOTA
                <span className="zixunlist-142">/USDT</span>
              </h1>
              <h1 className="zixunlist-143">0.2350</h1>
              <small className="zixunlist-144">-2.16%</small>
            </div>
            <div className="zixunlist-145">
              <h1 className="zixunlist-146">
                AUD
                <span className="zixunlist-147">/TRY</span>
              </h1>
              <h1 className="zixunlist-148">2.14003</h1>
              <small className="zixunlist-149">+0.09%</small>
            </div>
            <div className="zixunlist-150">
              <h1 className="zixunlist-151">
                AUD
                <span className="zixunlist-152">/USD</span>
              </h1>
              <h1 className="zixunlist-153">0.66391</h1>
              <small className="zixunlist-154">+0.22%</small>
            </div>
            <div className="zixunlist-155">
              <h1 className="zixunlist-156">
                CHF
                <span className="zixunlist-157">/USD</span>
              </h1>
              <h1 className="zixunlist-158">1.10417</h1>
              <small className="zixunlist-159">+0.14%</small>
            </div>
            <div className="zixunlist-160">
              <h1 className="zixunlist-161">
                CNY
                <span className="zixunlist-162">/SGD</span>
              </h1>
              <h1 className="zixunlist-163">0.1903992</h1>
              <small className="zixunlist-164">-0.09%</small>
            </div>
            <div className="zixunlist-165">
              <h1 className="zixunlist-166">
                EUR
                <span className="zixunlist-167">/USD</span>
              </h1>
              <h1 className="zixunlist-168">1.08424</h1>
              <small className="zixunlist-169">+0.27%</small>
            </div>
            <div className="zixunlist-170">
              <h1 className="zixunlist-171">
                GBP
                <span className="zixunlist-172">/USD</span>
              </h1>
              <h1 className="zixunlist-173">1.26246</h1>
              <small className="zixunlist-174">+0.32%</small>
            </div>
            <div className="zixunlist-175">
              <h1 className="zixunlist-176">
                HKD
                <span className="zixunlist-177">/CNY</span>
              </h1>
              <h1 className="zixunlist-178">0.9086140</h1>
              <small className="zixunlist-179">-0.08%</small>
            </div>
            <div className="zixunlist-180">
              <h1 className="zixunlist-181">
                HKD
                <span className="zixunlist-182">/SGD</span>
              </h1>
              <h1 className="zixunlist-183">0.1726806</h1>
              <small className="zixunlist-184">-0.23%</small>
            </div>
            <div className="zixunlist-185">
              <h1 className="zixunlist-186">
                NZD
                <span className="zixunlist-187">/USD</span>
              </h1>
              <h1 className="zixunlist-188">0.60655</h1>
              <small className="zixunlist-189">+0.39%</small>
            </div>
            <div className="zixunlist-190">
              <h1 className="zixunlist-191">
                USD
                <span className="zixunlist-192">/CAD</span>
              </h1>
              <h1 className="zixunlist-193">1.36600</h1>
              <small className="zixunlist-194">+0.02%</small>
            </div>
            <div className="zixunlist-195">
              <h1 className="zixunlist-196">
                USD
                <span className="zixunlist-197">/CHF</span>
              </h1>
              <h1 className="zixunlist-198">0.90600</h1>
              <small className="zixunlist-199">-0.14%</small>
            </div>
            <div className="zixunlist-200">
              <h1 className="zixunlist-201">
                USD
                <span className="zixunlist-202">/CNH</span>
              </h1>
              <h1 className="zixunlist-203">7.22461</h1>
              <small className="zixunlist-204">-0.24%</small>
            </div>
            <div className="zixunlist-205">
              <h1 className="zixunlist-206">
                USD
                <span className="zixunlist-207">/JPY</span>
              </h1>
              <h1 className="zixunlist-208">155.687</h1>
              <small className="zixunlist-209">-0.53%</small>
            </div>
            <div className="zixunlist-210">
              <h1 className="zixunlist-211">
                USD
                <span className="zixunlist-212">/MXN</span>
              </h1>
              <h1 className="zixunlist-213">16.75785</h1>
              <small className="zixunlist-214">-0.48%</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
