import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CoinList({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [name, setName] = useState("");
  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      if (name) {
        if (name.toLowerCase() !== key) {
          continue;
        }
      }
      nodes.push(
        <div
          key={key}
          className="listHome-10"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="listHome-11">
            <div className="listHome-12">
              <img alt="" src={getLogo(key)} className="listHome-13" />
            </div>
          </div>
          <div className="listHome-14">
            <span className="listHome-15"> {key.toUpperCase()}/USDT </span>
          </div>
          <div className="listHome-16">
            <span className="listHome-17">
              <b className="listHome-18">
                <span key={"marketlistclosea" + key}>
                  {coinListData[key]?.close}
                </span>
                <span key={"marketlistcloseb" + key}>
                  {!coinListData[key]?.close && "--"}
                </span>
              </b>
            </span>
          </div>
          <div className="listHome-19">
            <button
              className={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "listHome-20"
                  : "listHome-59"
              }
            >
              <div className="listHome-21">
                <span className="listHome-22">
                  <span key={"marketlistopena" + key}>
                    {coinListData[key]?.close &&
                      (
                        ((coinListData[key]?.close - coinListData[key]?.open) /
                          coinListData[key]?.open) *
                        100
                      ).toFixed(2)}
                  </span>
                  <span key={"marketlistopenb" + key}>
                    {coinListData[key]?.close ? "" : "0.00"}
                  </span>
                  %
                </span>
              </div>
            </button>
          </div>
        </div>
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
    <div className="homecoinlist-1">
      <div className="homecoinlist-2">
        <div className="homecoinlist-3">漲幅榜</div>
        <div className="homecoinlist-4">成交量</div>
      </div>
      <div className="homecoinlist-5">
        <div className="homecoinlist-6">
          <div className="homecoinlist-7">
            <div className="homecoinlist-8">
              <div className="homecoinlist-9"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004215305150.png"
                draggable="true"
                className="homecoinlist-10"
              />
            </div>
            <h1 className="homecoinlist-11">
              SOL<span className="homecoinlist-12">/USDT</span>
            </h1>
            <p className="homecoinlist-13">152.4801</p>
            <p className="homecoinlist-14">+6.66%</p>
          </div>
        </div>
        <div className="homecoinlist-15">
          <div className="homecoinlist-16">
            <div className="homecoinlist-17">
              <div className="homecoinlist-18"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211216004437653366.png"
                draggable="true"
                className="homecoinlist-19"
              />
            </div>
            <h1 className="homecoinlist-20">
              BTC<span className="homecoinlist-21">/USDT</span>
            </h1>
            <p className="homecoinlist-22">64237.49</p>
            <p className="homecoinlist-23">+3.99%</p>
          </div>
        </div>
        <div className="homecoinlist-24">
          <div className="homecoinlist-25">
            <div className="homecoinlist-26">
              <div className="homecoinlist-27"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013833686228.png"
                draggable="true"
                className="homecoinlist-28"
              />
            </div>
            <h1 className="homecoinlist-29">
              DOT<span className="homecoinlist-30">/USDT</span>
            </h1>
            <p className="homecoinlist-31">6.8868</p>
            <p className="homecoinlist-32">+3.61%</p>
          </div>
        </div>
        <div className="homecoinlist-33">
          <div className="homecoinlist-34">
            <div className="homecoinlist-35">
              <div className="homecoinlist-36"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013814171401.png"
                draggable="true"
                className="homecoinlist-37"
              />
            </div>
            <h1 className="homecoinlist-38">
              SHIB<span className="homecoinlist-39">/USDT</span>
            </h1>
            <p className="homecoinlist-40">0.00002405</p>
            <p className="homecoinlist-41">+3.44%</p>
          </div>
        </div>
        <div className="homecoinlist-42">
          <div className="homecoinlist-43">
            <div className="homecoinlist-44">
              <div className="homecoinlist-45"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014139449158.png"
                draggable="true"
                className="homecoinlist-46"
              />
            </div>
            <h1 className="homecoinlist-47">
              ETC<span className="homecoinlist-48">/USDT</span>
            </h1>
            <p className="homecoinlist-49">26.5082</p>
            <p className="homecoinlist-50">+3.33%</p>
          </div>
        </div>
        <div className="homecoinlist-51">
          <div className="homecoinlist-52">
            <div className="homecoinlist-53">
              <div className="homecoinlist-54"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013755405246.png"
                draggable="true"
                className="homecoinlist-55"
              />
            </div>
            <h1 className="homecoinlist-56">
              FIL<span className="homecoinlist-57">/USDT</span>
            </h1>
            <p className="homecoinlist-58">5.6281</p>
            <p className="homecoinlist-59">+3.20%</p>
          </div>
        </div>
        <div className="homecoinlist-60">
          <div className="homecoinlist-61">
            <div className="homecoinlist-62">
              <div className="homecoinlist-63"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004235148154.png"
                draggable="true"
                className="homecoinlist-64"
              />
            </div>
            <h1 className="homecoinlist-65">
              BSV<span className="homecoinlist-66">/USDT</span>
            </h1>
            <p className="homecoinlist-67">61.8730</p>
            <p className="homecoinlist-68">+3.17%</p>
          </div>
        </div>
        <div className="homecoinlist-69">
          <div className="homecoinlist-70">
            <div className="homecoinlist-71">
              <div className="homecoinlist-72"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004316413355.png"
                draggable="true"
                className="homecoinlist-73"
              />
            </div>
            <h1 className="homecoinlist-74">
              CVC<span className="homecoinlist-75">/USDT</span>
            </h1>
            <p className="homecoinlist-76">0.1646</p>
            <p className="homecoinlist-77">+2.75%</p>
          </div>
        </div>
        <div className="homecoinlist-78">
          <div className="homecoinlist-79">
            <div className="homecoinlist-80">
              <div className="homecoinlist-81"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/202111270137343593.png"
                draggable="true"
                className="homecoinlist-82"
              />
            </div>
            <h1 className="homecoinlist-83">
              ETH<span className="homecoinlist-84">/USDT</span>
            </h1>
            <p className="homecoinlist-85">2965.76</p>
            <p className="homecoinlist-86">+2.36%</p>
          </div>
        </div>
        <div className="homecoinlist-87">
          <div className="homecoinlist-88">
            <div className="homecoinlist-89">
              <div className="homecoinlist-90"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013854701372.png"
                draggable="true"
                className="homecoinlist-91"
              />
            </div>
            <h1 className="homecoinlist-92">
              LUNA<span className="homecoinlist-93">/USDT</span>
            </h1>
            <p className="homecoinlist-94">0.5730</p>
            <p className="homecoinlist-95">+2.30%</p>
          </div>
        </div>
        <div className="homecoinlist-96">
          <div className="homecoinlist-97">
            <div className="homecoinlist-98">
              <div className="homecoinlist-99"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014230167341.png"
                draggable="true"
                className="homecoinlist-100"
              />
            </div>
            <h1 className="homecoinlist-101">
              DASH<span className="homecoinlist-102">/USDT</span>
            </h1>
            <p className="homecoinlist-103">28.5200</p>
            <p className="homecoinlist-104">+2.26%</p>
          </div>
        </div>
        <div className="homecoinlist-105">
          <div className="homecoinlist-106">
            <div className="homecoinlist-107">
              <div className="homecoinlist-108"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013745390439.png"
                draggable="true"
                className="homecoinlist-109"
              />
            </div>
            <h1 className="homecoinlist-110">
              DOGE<span className="homecoinlist-111">/USDT</span>
            </h1>
            <p className="homecoinlist-112">0.1515</p>
            <p className="homecoinlist-113">+2.26%</p>
          </div>
        </div>
        <div className="homecoinlist-114">
          <div className="homecoinlist-115">
            <div className="homecoinlist-116">
              <div className="homecoinlist-117"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004225102251.png"
                draggable="true"
                className="homecoinlist-118"
              />
            </div>
            <h1 className="homecoinlist-119">
              BCH<span className="homecoinlist-120">/USDT</span>
            </h1>
            <p className="homecoinlist-121">444.1100</p>
            <p className="homecoinlist-122">+2.26%</p>
          </div>
        </div>
        <div className="homecoinlist-123">
          <div className="homecoinlist-124">
            <div className="homecoinlist-125">
              <div className="homecoinlist-126"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013824077235.png"
                draggable="true"
                className="homecoinlist-127"
              />
            </div>
            <h1 className="homecoinlist-128">
              ADA<span className="homecoinlist-129">/USDT</span>
            </h1>
            <p className="homecoinlist-130">0.445282</p>
            <p className="homecoinlist-131">+2.13%</p>
          </div>
        </div>
        <div className="homecoinlist-132">
          <div className="homecoinlist-133">
            <div className="homecoinlist-134">
              <div className="homecoinlist-135"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004250445424.png"
                draggable="true"
                className="homecoinlist-136"
              />
            </div>
            <h1 className="homecoinlist-137">
              XLM<span className="homecoinlist-138">/USDT</span>
            </h1>
            <p className="homecoinlist-139">0.1052</p>
            <p className="homecoinlist-140">+1.92%</p>
          </div>
        </div>
        <div className="homecoinlist-141">
          <div className="homecoinlist-142">
            <div className="homecoinlist-143">
              <div className="homecoinlist-144"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127013805593219.png"
                draggable="true"
                className="homecoinlist-145"
              />
            </div>
            <h1 className="homecoinlist-146">
              LTC<span className="homecoinlist-147">/USDT</span>
            </h1>
            <p className="homecoinlist-148">80.4000</p>
            <p className="homecoinlist-149">+0.93%</p>
          </div>
        </div>
        <div className="homecoinlist-150">
          <div className="homecoinlist-151">
            <div className="homecoinlist-152">
              <div className="homecoinlist-153"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014206589469.png"
                draggable="true"
                className="homecoinlist-154"
              />
            </div>
            <h1 className="homecoinlist-155">
              EOS<span className="homecoinlist-156">/USDT</span>
            </h1>
            <p className="homecoinlist-157">0.7841</p>
            <p className="homecoinlist-158">+0.90%</p>
          </div>
        </div>
        <div className="homecoinlist-159">
          <div className="homecoinlist-160">
            <div className="homecoinlist-161">
              <div className="homecoinlist-162"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211216004518136300.png"
                draggable="true"
                className="homecoinlist-163"
              />
            </div>
            <h1 className="homecoinlist-164">
              NZD<span className="homecoinlist-165">/USD</span>
            </h1>
            <p className="homecoinlist-166">0.60775</p>
            <p className="homecoinlist-167">+0.57%</p>
          </div>
        </div>
        <div className="homecoinlist-168">
          <div className="homecoinlist-169">
            <div className="homecoinlist-170">
              <div className="homecoinlist-171"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014151214325.png"
                draggable="true"
                className="homecoinlist-172"
              />
            </div>
            <h1 className="homecoinlist-173">
              TRX<span className="homecoinlist-174">/USDT</span>
            </h1>
            <p className="homecoinlist-175">0.1258</p>
            <p className="homecoinlist-176">+0.50%</p>
          </div>
        </div>
        <div className="homecoinlist-177">
          <div className="homecoinlist-178">
            <div className="homecoinlist-179">
              <div className="homecoinlist-180"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211216004542214278.png"
                draggable="true"
                className="homecoinlist-181"
              />
            </div>
            <h1 className="homecoinlist-182">
              GBP<span className="homecoinlist-183">/USD</span>
            </h1>
            <p className="homecoinlist-184">1.26342</p>
            <p className="homecoinlist-185">+0.40%</p>
          </div>
        </div>
        <div className="homecoinlist-186">
          <div className="homecoinlist-187">
            <div className="homecoinlist-188">
              <div className="homecoinlist-189"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/2021121600452738617.png"
                draggable="true"
                className="homecoinlist-190"
              />
            </div>
            <h1 className="homecoinlist-191">
              AUD<span className="homecoinlist-192">/USD</span>
            </h1>
            <p className="homecoinlist-193">0.66491</p>
            <p className="homecoinlist-194">+0.37%</p>
          </div>
        </div>
        <div className="homecoinlist-195">
          <div className="homecoinlist-196">
            <div className="homecoinlist-197">
              <div className="homecoinlist-198"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211216004552620218.png"
                draggable="true"
                className="homecoinlist-199"
              />
            </div>
            <h1 className="homecoinlist-200">
              EUR<span className="homecoinlist-201">/USD</span>
            </h1>
            <p className="homecoinlist-202">1.08501</p>
            <p className="homecoinlist-203">+0.34%</p>
          </div>
        </div>
        <div className="homecoinlist-204">
          <div className="homecoinlist-205">
            <div className="homecoinlist-206">
              <div className="homecoinlist-207"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127113422628417.png"
                draggable="true"
                className="homecoinlist-208"
              />
            </div>
            <h1 className="homecoinlist-209">
              XRP<span className="homecoinlist-210">/USDT</span>
            </h1>
            <p className="homecoinlist-211">0.5100</p>
            <p className="homecoinlist-212">+0.34%</p>
          </div>
        </div>
        <div className="homecoinlist-213">
          <div className="homecoinlist-214">
            <div className="homecoinlist-215">
              <div className="homecoinlist-216"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211216004601510398.png"
                draggable="true"
                className="homecoinlist-217"
              />
            </div>
            <h1 className="homecoinlist-218">
              CHF<span className="homecoinlist-219">/USD</span>
            </h1>
            <p className="homecoinlist-220">1.10542</p>
            <p className="homecoinlist-221">+0.25%</p>
          </div>
        </div>
        <div className="homecoinlist-222">
          <div className="homecoinlist-223">
            <div className="homecoinlist-224">
              <div className="homecoinlist-225"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/20211216011040149366.png"
                draggable="true"
                className="homecoinlist-226"
              />
            </div>
            <h1 className="homecoinlist-227">
              AUD<span className="homecoinlist-228">/TRY</span>
            </h1>
            <p className="homecoinlist-229">2.14303</p>
            <p className="homecoinlist-230">+0.23%</p>
          </div>
        </div>
        <div className="homecoinlist-231">
          <div className="homecoinlist-232">
            <div className="homecoinlist-233">
              <div className="homecoinlist-234"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014245963218.png"
                draggable="true"
                className="homecoinlist-235"
              />
            </div>
            <h1 className="homecoinlist-236">
              XMR<span className="homecoinlist-237">/USDT</span>
            </h1>
            <p className="homecoinlist-238">134.3200</p>
            <p className="homecoinlist-239">+0.18%</p>
          </div>
        </div>
        <div className="homecoinlist-240">
          <div className="homecoinlist-241">
            <div className="homecoinlist-242">
              <div className="homecoinlist-243"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/20211216011345785465.png"
                draggable="true"
                className="homecoinlist-244"
              />
            </div>
            <h1 className="homecoinlist-245">
              USD<span className="homecoinlist-246">/CAD</span>
            </h1>
            <p className="homecoinlist-247">1.36503</p>
            <p className="homecoinlist-248">-0.02%</p>
          </div>
        </div>
        <div className="homecoinlist-249">
          <div className="homecoinlist-250">
            <div className="homecoinlist-251">
              <div className="homecoinlist-252"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/20211216011216334128.png"
                draggable="true"
                className="homecoinlist-253"
              />
            </div>
            <h1 className="homecoinlist-254">
              HKD<span className="homecoinlist-255">/CNY</span>
            </h1>
            <p className="homecoinlist-256">0.9084335</p>
            <p className="homecoinlist-257">-0.10%</p>
          </div>
        </div>
        <div className="homecoinlist-258">
          <div className="homecoinlist-259">
            <div className="homecoinlist-260">
              <div className="homecoinlist-261"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/20211216011120726353.png"
                draggable="true"
                className="homecoinlist-262"
              />
            </div>
            <h1 className="homecoinlist-263">
              CNY<span className="homecoinlist-264">/SGD</span>
            </h1>
            <p className="homecoinlist-265">0.1902949</p>
            <p className="homecoinlist-266">-0.14%</p>
          </div>
        </div>
        <div className="homecoinlist-267">
          <div className="homecoinlist-268">
            <div className="homecoinlist-269">
              <div className="homecoinlist-270"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014406743498.png"
                draggable="true"
                className="homecoinlist-271"
              />
            </div>
            <h1 className="homecoinlist-272">
              BLZ<span className="homecoinlist-273">/USDT</span>
            </h1>
            <p className="homecoinlist-274">0.3737</p>
            <p className="homecoinlist-275">-0.19%</p>
          </div>
        </div>
        <div className="homecoinlist-276">
          <div className="homecoinlist-277">
            <div className="homecoinlist-278">
              <div className="homecoinlist-279"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014319182441.png"
                draggable="true"
                className="homecoinlist-280"
              />
            </div>
            <h1 className="homecoinlist-281">
              LET<span className="homecoinlist-282">/USDT</span>
            </h1>
            <p className="homecoinlist-283">0.000507</p>
            <p className="homecoinlist-284">-0.20%</p>
          </div>
        </div>
        <div className="homecoinlist-285">
          <div className="homecoinlist-286">
            <div className="homecoinlist-287">
              <div className="homecoinlist-288"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/2021121601150534668.png"
                draggable="true"
                className="homecoinlist-289"
              />
            </div>
            <h1 className="homecoinlist-290">
              USD<span className="homecoinlist-291">/CHF</span>
            </h1>
            <p className="homecoinlist-292">0.90467</p>
            <p className="homecoinlist-293">-0.24%</p>
          </div>
        </div>
        <div className="homecoinlist-294">
          <div className="homecoinlist-295">
            <div className="homecoinlist-296">
              <div className="homecoinlist-297"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/2021121600450926138.png"
                draggable="true"
                className="homecoinlist-298"
              />
            </div>
            <h1 className="homecoinlist-299">
              USD<span className="homecoinlist-300">/CNH</span>
            </h1>
            <p className="homecoinlist-301">7.22332</p>
            <p className="homecoinlist-302">-0.26%</p>
          </div>
        </div>
        <div className="homecoinlist-303">
          <div className="homecoinlist-304">
            <div className="homecoinlist-305">
              <div className="homecoinlist-306"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/20211216011301849483.png"
                draggable="true"
                className="homecoinlist-307"
              />
            </div>
            <h1 className="homecoinlist-308">
              HKD<span className="homecoinlist-309">/SGD</span>
            </h1>
            <p className="homecoinlist-310">0.1725648</p>
            <p className="homecoinlist-311">-0.30%</p>
          </div>
        </div>
        <div className="homecoinlist-312">
          <div className="homecoinlist-313">
            <div className="homecoinlist-314">
              <div className="homecoinlist-315"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004259226133.png"
                draggable="true"
                className="homecoinlist-316"
              />
            </div>
            <h1 className="homecoinlist-317">
              YFI<span className="homecoinlist-318">/USDT</span>
            </h1>
            <p className="homecoinlist-319">6729.20</p>
            <p className="homecoinlist-320">-0.43%</p>
          </div>
        </div>
        <div className="homecoinlist-321">
          <div className="homecoinlist-322">
            <div className="homecoinlist-323">
              <div className="homecoinlist-324"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/2021121601195193348.png"
                draggable="true"
                className="homecoinlist-325"
              />
            </div>
            <h1 className="homecoinlist-326">
              USD<span className="homecoinlist-327">/MXN</span>
            </h1>
            <p className="homecoinlist-328">16.75448</p>
            <p className="homecoinlist-329">-0.50%</p>
          </div>
        </div>
        <div className="homecoinlist-330">
          <div className="homecoinlist-331">
            <div className="homecoinlist-332">
              <div className="homecoinlist-333"></div>
              <img
                src="https://kmadmin.lpyrmgck.online/banner/20211216011853122109.png"
                draggable="true"
                className="homecoinlist-334"
              />
            </div>
            <h1 className="homecoinlist-335">
              USD<span className="homecoinlist-336">/JPY</span>
            </h1>
            <p className="homecoinlist-337">155.482</p>
            <p className="homecoinlist-338">-0.66%</p>
          </div>
        </div>
        <div className="homecoinlist-339">
          <div className="homecoinlist-340">
            <div className="homecoinlist-341">
              <div className="homecoinlist-342"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20211127014417290247.png"
                draggable="true"
                className="homecoinlist-343"
              />
            </div>
            <h1 className="homecoinlist-344">
              CRO<span className="homecoinlist-345">/USDT</span>
            </h1>
            <p className="homecoinlist-346">0.063696</p>
            <p className="homecoinlist-347">-1.87%</p>
          </div>
        </div>
        <div className="homecoinlist-348">
          <div className="homecoinlist-349">
            <div className="homecoinlist-350">
              <div className="homecoinlist-351"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004354428355.png"
                draggable="true"
                className="homecoinlist-352"
              />
            </div>
            <h1 className="homecoinlist-353">
              IOTA<span className="homecoinlist-354">/USDT</span>
            </h1>
            <p className="homecoinlist-355">0.2348</p>
            <p className="homecoinlist-356">-2.25%</p>
          </div>
        </div>
        <div className="homecoinlist-357">
          <div className="homecoinlist-358">
            <div className="homecoinlist-359">
              <div className="homecoinlist-360"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/20221119004325960153.png"
                draggable="true"
                className="homecoinlist-361"
              />
            </div>
            <h1 className="homecoinlist-362">
              WTC<span className="homecoinlist-363">/USDT</span>
            </h1>
            <p className="homecoinlist-364">0.0101</p>
            <p className="homecoinlist-365">-2.92%</p>
          </div>
        </div>
        <div className="homecoinlist-366">
          <div className="homecoinlist-367">
            <div className="homecoinlist-368">
              <div className="homecoinlist-369"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/2021112701384317069.png"
                draggable="true"
                className="homecoinlist-370"
              />
            </div>
            <h1 className="homecoinlist-371">
              LRC<span className="homecoinlist-372">/USDT</span>
            </h1>
            <p className="homecoinlist-373">0.2491</p>
            <p className="homecoinlist-374">-4.81%</p>
          </div>
        </div>
        <div className="homecoinlist-375">
          <div className="homecoinlist-376">
            <div className="homecoinlist-377">
              <div className="homecoinlist-378"></div>
              <img
                src="https://kmadmin.lpyrmgck.online//banner/2022111900430822647.png"
                draggable="true"
                className="homecoinlist-379"
              />
            </div>
            <h1 className="homecoinlist-380">
              VSYS<span className="homecoinlist-381">/USDT</span>
            </h1>
            <p className="homecoinlist-382">0.0008</p>
            <p className="homecoinlist-383">-7.85%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
