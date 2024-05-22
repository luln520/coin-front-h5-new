import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="quotationcenter-1">
      <div class="quotationcenter-2">
        <div class="quotationcenter-3">
          <ul class="quotationcenter-4">
            <li class="quotationcenter-5">自選</li>
            <li class="quotationcenter-6">USDT</li>
          </ul>
        </div>
        <div class="quotationcenter-7">
          <div class="quotationcenter-8">
            <div class="quotationcenter-9">
              <div class="quotationcenter-10">
                <div class="quotationcenter-11">
                  <div class="quotationcenter-12">
                    <div class="quotationcenter-13">
                      <div class="quotationcenter-14">
                        <div class="quotationcenter-15">
                          <ul class="quotationcenter-16">
                            <li class="quotationcenter-17">
                              <div class="quotationcenter-18">
                                <div class="quotationcenter-19">
                                  <div class="quotationcenter-20">
                                    <div class="quotationcenter-21"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211216004437653366.png"
                                      
                                      class="quotationcenter-22"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-23">
                                  <span class="quotationcenter-24">
                                    BTC
                                    <small class="quotationcenter-25">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-26">量：0.41萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-27">
                                <span class="quotationcenter-28">70638.83</span>
                              </div>
                              <div class="quotationcenter-29">
                                <div class="quotationcenter-30">+4.78%</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="quotationcenter-31">
                  <div class="quotationcenter-32">
                    <div class="quotationcenter-33">
                      <div class="quotationcenter-34">
                        <div class="quotationcenter-35">
                          <ul class="quotationcenter-36">
                            <li class="quotationcenter-37">
                              <div class="quotationcenter-38">
                                <div class="quotationcenter-39">
                                  <div class="quotationcenter-40">
                                    <div class="quotationcenter-41"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211216004437653366.png"
                                      
                                      class="quotationcenter-42"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-43">
                                  <span class="quotationcenter-44">
                                    BTC
                                    <small class="quotationcenter-45">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-46">量：0.41萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-47">
                                <span class="quotationcenter-48">70359.55</span>
                              </div>
                              <div class="quotationcenter-49">
                                <div class="quotationcenter-50">+4.37%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-51">
                              <div class="quotationcenter-52">
                                <div class="quotationcenter-53">
                                  <div class="quotationcenter-54">
                                    <div class="quotationcenter-55"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/202111270137343593.png"
                                      
                                      class="quotationcenter-56"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-57">
                                  <span class="quotationcenter-58">
                                    ETH
                                    <small class="quotationcenter-59">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-60">量：3.93萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-61">
                                <span class="quotationcenter-62">3785.77</span>
                              </div>
                              <div class="quotationcenter-63">
                                <div class="quotationcenter-64">+21.41%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-65">
                              <div class="quotationcenter-66">
                                <div class="quotationcenter-67">
                                  <div class="quotationcenter-68">
                                    <div class="quotationcenter-69"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013745390439.png"
                                      
                                      class="quotationcenter-70"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-71">
                                  <span class="quotationcenter-72">
                                    DOGE
                                    <small class="quotationcenter-73">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-74">
                                    量：40088.75萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-75">
                                <span class="quotationcenter-76">0.1694</span>
                              </div>
                              <div class="quotationcenter-77">
                                <div class="quotationcenter-78">+11.22%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-79">
                              <div class="quotationcenter-80">
                                <div class="quotationcenter-81">
                                  <div class="quotationcenter-82">
                                    <div class="quotationcenter-83"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013833686228.png"
                                      
                                      class="quotationcenter-84"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-85">
                                  <span class="quotationcenter-86">
                                    DOT
                                    <small class="quotationcenter-87">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-88">量：294.01萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-89">
                                <span class="quotationcenter-90">7.6043</span>
                              </div>
                              <div class="quotationcenter-91">
                                <div class="quotationcenter-92">+7.87%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-93">
                              <div class="quotationcenter-94">
                                <div class="quotationcenter-95">
                                  <div class="quotationcenter-96">
                                    <div class="quotationcenter-97"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013814171401.png"
                                      
                                      class="quotationcenter-98"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-99">
                                  <span class="quotationcenter-100">
                                    SHIB
                                    <small class="quotationcenter-101">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-102">
                                    量：26852127.40萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-103">
                                <span class="quotationcenter-104">
                                  0.00002599
                                </span>
                              </div>
                              <div class="quotationcenter-105">
                                <div class="quotationcenter-106">+7.44%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-107">
                              <div class="quotationcenter-108">
                                <div class="quotationcenter-109">
                                  <div class="quotationcenter-110">
                                    <div class="quotationcenter-111"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013824077235.png"
                                      
                                      class="quotationcenter-112"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-113">
                                  <span class="quotationcenter-114">
                                    ADA
                                    <small class="quotationcenter-115">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-116">
                                    量：5537.51萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-117">
                                <span class="quotationcenter-118">
                                  0.504229
                                </span>
                              </div>
                              <div class="quotationcenter-119">
                                <div class="quotationcenter-120">+7.60%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-121">
                              <div class="quotationcenter-122">
                                <div class="quotationcenter-123">
                                  <div class="quotationcenter-124">
                                    <div class="quotationcenter-125"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014417290247.png"
                                      
                                      class="quotationcenter-126"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-127">
                                  <span class="quotationcenter-128">
                                    CRO
                                    <small class="quotationcenter-129">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-130">
                                    量：261.02萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-131">
                                <span class="quotationcenter-132">
                                  0.063696
                                </span>
                              </div>
                              <div class="quotationcenter-133">
                                <div class="quotationcenter-134">-1.87%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-135">
                              <div class="quotationcenter-136">
                                <div class="quotationcenter-137">
                                  <div class="quotationcenter-138">
                                    <div class="quotationcenter-139"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013755405246.png"
                                      
                                      class="quotationcenter-140"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-141">
                                  <span class="quotationcenter-142">
                                    FIL
                                    <small class="quotationcenter-143">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-144">
                                    量：358.44萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-145">
                                <span class="quotationcenter-146">6.1546</span>
                              </div>
                              <div class="quotationcenter-147">
                                <div class="quotationcenter-148">+9.92%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-149">
                              <div class="quotationcenter-150">
                                <div class="quotationcenter-151">
                                  <div class="quotationcenter-152">
                                    <div class="quotationcenter-153"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013805593219.png"
                                      
                                      class="quotationcenter-154"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-155">
                                  <span class="quotationcenter-156">
                                    LTC
                                    <small class="quotationcenter-157">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-158">量：35.73萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-159">
                                <span class="quotationcenter-160">88.0000</span>
                              </div>
                              <div class="quotationcenter-161">
                                <div class="quotationcenter-162">+5.21%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-163">
                              <div class="quotationcenter-164">
                                <div class="quotationcenter-165">
                                  <div class="quotationcenter-166">
                                    <div class="quotationcenter-167"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/2021112701384317069.png"
                                      
                                      class="quotationcenter-168"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-169">
                                  <span class="quotationcenter-170">
                                    LRC
                                    <small class="quotationcenter-171">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-172">
                                    量：186.56萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-173">
                                <span class="quotationcenter-174">0.2943</span>
                              </div>
                              <div class="quotationcenter-175">
                                <div class="quotationcenter-176">+15.59%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-177">
                              <div class="quotationcenter-178">
                                <div class="quotationcenter-179">
                                  <div class="quotationcenter-180">
                                    <div class="quotationcenter-181"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004215305150.png"
                                      
                                      class="quotationcenter-182"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-183">
                                  <span class="quotationcenter-184">
                                    SOL
                                    <small class="quotationcenter-185">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-186">量：62.28萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-187">
                                <span class="quotationcenter-188">
                                  177.9851
                                </span>
                              </div>
                              <div class="quotationcenter-189">
                                <div class="quotationcenter-190">-0.56%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-191">
                              <div class="quotationcenter-192">
                                <div class="quotationcenter-193">
                                  <div class="quotationcenter-194">
                                    <div class="quotationcenter-195"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004225102251.png"
                                      
                                      class="quotationcenter-196"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-197">
                                  <span class="quotationcenter-198">
                                    BCH
                                    <small class="quotationcenter-199">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-200">量：4.78萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-201">
                                <span class="quotationcenter-202">
                                  524.5800
                                </span>
                              </div>
                              <div class="quotationcenter-203">
                                <div class="quotationcenter-204">+8.07%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-205">
                              <div class="quotationcenter-206">
                                <div class="quotationcenter-207">
                                  <div class="quotationcenter-208">
                                    <div class="quotationcenter-209"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127013854701372.png"
                                      
                                      class="quotationcenter-210"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-211">
                                  <span class="quotationcenter-212">
                                    LUNA
                                    <small class="quotationcenter-213">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-214">
                                    量：1209.15萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-215">
                                <span class="quotationcenter-216">0.6128</span>
                              </div>
                              <div class="quotationcenter-217">
                                <div class="quotationcenter-218">+6.57%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-219">
                              <div class="quotationcenter-220">
                                <div class="quotationcenter-221">
                                  <div class="quotationcenter-222">
                                    <div class="quotationcenter-223"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014139449158.png"
                                      
                                      class="quotationcenter-224"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-225">
                                  <span class="quotationcenter-226">
                                    ETC
                                    <small class="quotationcenter-227">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-228">量：82.77萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-229">
                                <span class="quotationcenter-230">32.3625</span>
                              </div>
                              <div class="quotationcenter-231">
                                <div class="quotationcenter-232">+14.98%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-233">
                              <div class="quotationcenter-234">
                                <div class="quotationcenter-235">
                                  <div class="quotationcenter-236">
                                    <div class="quotationcenter-237"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014151214325.png"
                                      
                                      class="quotationcenter-238"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-239">
                                  <span class="quotationcenter-240">
                                    TRX
                                    <small class="quotationcenter-241">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-242">
                                    量：8922.40萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-243">
                                <span class="quotationcenter-244">0.1238</span>
                              </div>
                              <div class="quotationcenter-245">
                                <div class="quotationcenter-246">+1.37%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-247">
                              <div class="quotationcenter-248">
                                <div class="quotationcenter-249">
                                  <div class="quotationcenter-250">
                                    <div class="quotationcenter-251"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014206589469.png"
                                      
                                      class="quotationcenter-252"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-253">
                                  <span class="quotationcenter-254">
                                    EOS
                                    <small class="quotationcenter-255">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-256">
                                    量：1481.94萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-257">
                                <span class="quotationcenter-258">0.8636</span>
                              </div>
                              <div class="quotationcenter-259">
                                <div class="quotationcenter-260">+8.64%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-261">
                              <div class="quotationcenter-262">
                                <div class="quotationcenter-263">
                                  <div class="quotationcenter-264">
                                    <div class="quotationcenter-265"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004235148154.png"
                                      
                                      class="quotationcenter-266"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-267">
                                  <span class="quotationcenter-268">
                                    BSV
                                    <small class="quotationcenter-269">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-270">量：5.57萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-271">
                                <span class="quotationcenter-272">70.1485</span>
                              </div>
                              <div class="quotationcenter-273">
                                <div class="quotationcenter-274">+6.55%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-275">
                              <div class="quotationcenter-276">
                                <div class="quotationcenter-277">
                                  <div class="quotationcenter-278">
                                    <div class="quotationcenter-279"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014230167341.png"
                                      
                                      class="quotationcenter-280"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-281">
                                  <span class="quotationcenter-282">
                                    DASH
                                    <small class="quotationcenter-283">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-284">量：3.73萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-285">
                                <span class="quotationcenter-286">30.7300</span>
                              </div>
                              <div class="quotationcenter-287">
                                <div class="quotationcenter-288">+4.77%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-289">
                              <div class="quotationcenter-290">
                                <div class="quotationcenter-291">
                                  <div class="quotationcenter-292">
                                    <div class="quotationcenter-293"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014245963218.png"
                                      
                                      class="quotationcenter-294"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-295">
                                  <span class="quotationcenter-296">
                                    XMR
                                    <small class="quotationcenter-297">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-298">量：2.48萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-299">
                                <span class="quotationcenter-300">
                                  140.3800
                                </span>
                              </div>
                              <div class="quotationcenter-301">
                                <div class="quotationcenter-302">+3.41%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-303">
                              <div class="quotationcenter-304">
                                <div class="quotationcenter-305">
                                  <div class="quotationcenter-306">
                                    <div class="quotationcenter-307"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004250445424.png"
                                      
                                      class="quotationcenter-308"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-309">
                                  <span class="quotationcenter-310">
                                    XLM
                                    <small class="quotationcenter-311">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-312">
                                    量：2005.69萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-313">
                                <span class="quotationcenter-314">0.1133</span>
                              </div>
                              <div class="quotationcenter-315">
                                <div class="quotationcenter-316">+5.95%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-317">
                              <div class="quotationcenter-318">
                                <div class="quotationcenter-319">
                                  <div class="quotationcenter-320">
                                    <div class="quotationcenter-321"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004259226133.png"
                                      
                                      class="quotationcenter-322"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-323">
                                  <span class="quotationcenter-324">
                                    YFI
                                    <small class="quotationcenter-325">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-326">量：0.02萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-327">
                                <span class="quotationcenter-328">7327.84</span>
                              </div>
                              <div class="quotationcenter-329">
                                <div class="quotationcenter-330">+6.56%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-331">
                              <div class="quotationcenter-332">
                                <div class="quotationcenter-333">
                                  <div class="quotationcenter-334">
                                    <div class="quotationcenter-335"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014319182441.png"
                                      
                                      class="quotationcenter-336"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-337">
                                  <span class="quotationcenter-338">
                                    LET
                                    <small class="quotationcenter-339">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-340">
                                    量：428.23萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-341">
                                <span class="quotationcenter-342">
                                  0.000507
                                </span>
                              </div>
                              <div class="quotationcenter-343">
                                <div class="quotationcenter-344">-0.20%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-345">
                              <div class="quotationcenter-346">
                                <div class="quotationcenter-347">
                                  <div class="quotationcenter-348">
                                    <div class="quotationcenter-349"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/2022111900430822647.png"
                                      
                                      class="quotationcenter-350"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-351">
                                  <span class="quotationcenter-352">
                                    VSYS
                                    <small class="quotationcenter-353">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-354">
                                    量：119.75萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-355">
                                <span class="quotationcenter-356">0.0007</span>
                              </div>
                              <div class="quotationcenter-357">
                                <div class="quotationcenter-358">-4.11%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-359">
                              <div class="quotationcenter-360">
                                <div class="quotationcenter-361">
                                  <div class="quotationcenter-362">
                                    <div class="quotationcenter-363"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004316413355.png"
                                      
                                      class="quotationcenter-364"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-365">
                                  <span class="quotationcenter-366">
                                    CVC
                                    <small class="quotationcenter-367">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-368">
                                    量：2471.24萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-369">
                                <span class="quotationcenter-370">0.1702</span>
                              </div>
                              <div class="quotationcenter-371">
                                <div class="quotationcenter-372">+1.61%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-373">
                              <div class="quotationcenter-374">
                                <div class="quotationcenter-375">
                                  <div class="quotationcenter-376">
                                    <div class="quotationcenter-377"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127014406743498.png"
                                      
                                      class="quotationcenter-378"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-379">
                                  <span class="quotationcenter-380">
                                    BLZ
                                    <small class="quotationcenter-381">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-382">量：6.98萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-383">
                                <span class="quotationcenter-384">0.3031</span>
                              </div>
                              <div class="quotationcenter-385">
                                <div class="quotationcenter-386">+8.36%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-387">
                              <div class="quotationcenter-388">
                                <div class="quotationcenter-389">
                                  <div class="quotationcenter-390">
                                    <div class="quotationcenter-391"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211127113422628417.png"
                                      
                                      class="quotationcenter-392"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-393">
                                  <span class="quotationcenter-394">
                                    XRP
                                    <small class="quotationcenter-395">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-396">
                                    量：5410.28萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-397">
                                <span class="quotationcenter-398">0.5471</span>
                              </div>
                              <div class="quotationcenter-399">
                                <div class="quotationcenter-400">+5.88%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-401">
                              <div class="quotationcenter-402">
                                <div class="quotationcenter-403">
                                  <div class="quotationcenter-404">
                                    <div class="quotationcenter-405"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004325960153.png"
                                      
                                      class="quotationcenter-406"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-407">
                                  <span class="quotationcenter-408">
                                    WTC
                                    <small class="quotationcenter-409">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-410">
                                    量：103.22萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-411">
                                <span class="quotationcenter-412">0.0079</span>
                              </div>
                              <div class="quotationcenter-413">
                                <div class="quotationcenter-414">-22.61%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-415">
                              <div class="quotationcenter-416">
                                <div class="quotationcenter-417">
                                  <div class="quotationcenter-418">
                                    <div class="quotationcenter-419"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20221119004354428355.png"
                                      
                                      class="quotationcenter-420"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-421">
                                  <span class="quotationcenter-422">
                                    IOTA
                                    <small class="quotationcenter-423">
                                      /USDT
                                    </small>
                                  </span>
                                  <p class="quotationcenter-424">
                                    量：808.73萬
                                  </p>
                                </div>
                              </div>
                              <div class="quotationcenter-425">
                                <span class="quotationcenter-426">0.2474</span>
                              </div>
                              <div class="quotationcenter-427">
                                <div class="quotationcenter-428">+1.85%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-429">
                              <div class="quotationcenter-430">
                                <div class="quotationcenter-431">
                                  <div class="quotationcenter-432">
                                    <div class="quotationcenter-433"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/20211216011040149366.png"
                                      
                                      class="quotationcenter-434"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-435">
                                  <span class="quotationcenter-436">
                                    AUD
                                    <small class="quotationcenter-437">
                                      /TRY
                                    </small>
                                  </span>
                                  <p class="quotationcenter-438">量：2.52萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-439">
                                <span class="quotationcenter-440">
                                  21.49222
                                </span>
                              </div>
                              <div class="quotationcenter-441">
                                <div class="quotationcenter-442">+0.07%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-443">
                              <div class="quotationcenter-444">
                                <div class="quotationcenter-445">
                                  <div class="quotationcenter-446">
                                    <div class="quotationcenter-447"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/2021121600452738617.png"
                                      
                                      class="quotationcenter-448"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-449">
                                  <span class="quotationcenter-450">
                                    AUD
                                    <small class="quotationcenter-451">
                                      /USD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-452">量：7.62萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-453">
                                <span class="quotationcenter-454">0.66755</span>
                              </div>
                              <div class="quotationcenter-455">
                                <div class="quotationcenter-456">+0.06%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-457">
                              <div class="quotationcenter-458">
                                <div class="quotationcenter-459">
                                  <div class="quotationcenter-460">
                                    <div class="quotationcenter-461"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211216004601510398.png"
                                      
                                      class="quotationcenter-462"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-463">
                                  <span class="quotationcenter-464">
                                    CHF
                                    <small class="quotationcenter-465">
                                      /USD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-466">量：14.54萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-467">
                                <span class="quotationcenter-468">1.09852</span>
                              </div>
                              <div class="quotationcenter-469">
                                <div class="quotationcenter-470">-0.03%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-471">
                              <div class="quotationcenter-472">
                                <div class="quotationcenter-473">
                                  <div class="quotationcenter-474">
                                    <div class="quotationcenter-475"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/20211216011120726353.png"
                                      
                                      class="quotationcenter-476"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-477">
                                  <span class="quotationcenter-478">
                                    CNY
                                    <small class="quotationcenter-479">
                                      /SGD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-480">量：9.35萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-481">
                                <span class="quotationcenter-482">
                                  0.1899261
                                </span>
                              </div>
                              <div class="quotationcenter-483">
                                <div class="quotationcenter-484">-0.02%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-485">
                              <div class="quotationcenter-486">
                                <div class="quotationcenter-487">
                                  <div class="quotationcenter-488">
                                    <div class="quotationcenter-489"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211216004552620218.png"
                                      
                                      class="quotationcenter-490"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-491">
                                  <span class="quotationcenter-492">
                                    EUR
                                    <small class="quotationcenter-493">
                                      /USD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-494">量：8.36萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-495">
                                <span class="quotationcenter-496">1.08543</span>
                              </div>
                              <div class="quotationcenter-497">
                                <div class="quotationcenter-498">-0.06%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-499">
                              <div class="quotationcenter-500">
                                <div class="quotationcenter-501">
                                  <div class="quotationcenter-502">
                                    <div class="quotationcenter-503"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211216004542214278.png"
                                      
                                      class="quotationcenter-504"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-505">
                                  <span class="quotationcenter-506">
                                    GBP
                                    <small class="quotationcenter-507">
                                      /USD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-508">量：8.99萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-509">
                                <span class="quotationcenter-510">1.27183</span>
                              </div>
                              <div class="quotationcenter-511">
                                <div class="quotationcenter-512">+0.07%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-513">
                              <div class="quotationcenter-514">
                                <div class="quotationcenter-515">
                                  <div class="quotationcenter-516">
                                    <div class="quotationcenter-517"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/20211216011216334128.png"
                                      
                                      class="quotationcenter-518"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-519">
                                  <span class="quotationcenter-520">
                                    HKD
                                    <small class="quotationcenter-521">
                                      /CNY
                                    </small>
                                  </span>
                                  <p class="quotationcenter-522">量：0.08萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-523">
                                <span class="quotationcenter-524">
                                  0.9098647
                                </span>
                              </div>
                              <div class="quotationcenter-525">
                                <div class="quotationcenter-526">-0.10%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-527">
                              <div class="quotationcenter-528">
                                <div class="quotationcenter-529">
                                  <div class="quotationcenter-530">
                                    <div class="quotationcenter-531"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/20211216011301849483.png"
                                      
                                      class="quotationcenter-532"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-533">
                                  <span class="quotationcenter-534">
                                    HKD
                                    <small class="quotationcenter-535">
                                      /SGD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-536">量：11.18萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-537">
                                <span class="quotationcenter-538">
                                  0.1725786
                                </span>
                              </div>
                              <div class="quotationcenter-539">
                                <div class="quotationcenter-540">-0.12%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-541">
                              <div class="quotationcenter-542">
                                <div class="quotationcenter-543">
                                  <div class="quotationcenter-544">
                                    <div class="quotationcenter-545"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/20211216004518136300.png"
                                      
                                      class="quotationcenter-546"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-547">
                                  <span class="quotationcenter-548">
                                    NZD
                                    <small class="quotationcenter-549">
                                      /USD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-550">量：6.57萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-551">
                                <span class="quotationcenter-552">0.61024</span>
                              </div>
                              <div class="quotationcenter-553">
                                <div class="quotationcenter-554">-0.08%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-555">
                              <div class="quotationcenter-556">
                                <div class="quotationcenter-557">
                                  <div class="quotationcenter-558">
                                    <div class="quotationcenter-559"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/20211216011345785465.png"
                                      
                                      class="quotationcenter-560"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-561">
                                  <span class="quotationcenter-562">
                                    USD
                                    <small class="quotationcenter-563">
                                      /CAD
                                    </small>
                                  </span>
                                  <p class="quotationcenter-564">量：6.79萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-565">
                                <span class="quotationcenter-566">1.36423</span>
                              </div>
                              <div class="quotationcenter-567">
                                <div class="quotationcenter-568">+0.14%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-569">
                              <div class="quotationcenter-570">
                                <div class="quotationcenter-571">
                                  <div class="quotationcenter-572">
                                    <div class="quotationcenter-573"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/2021121601150534668.png"
                                      
                                      class="quotationcenter-574"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-575">
                                  <span class="quotationcenter-576">
                                    USD
                                    <small class="quotationcenter-577">
                                      /CHF
                                    </small>
                                  </span>
                                  <p class="quotationcenter-578">量：10.33萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-579">
                                <span class="quotationcenter-580">0.91046</span>
                              </div>
                              <div class="quotationcenter-581">
                                <div class="quotationcenter-582">+0.03%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-583">
                              <div class="quotationcenter-584">
                                <div class="quotationcenter-585">
                                  <div class="quotationcenter-586">
                                    <div class="quotationcenter-587"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online//banner/2021121600450926138.png"
                                      
                                      class="quotationcenter-588"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-589">
                                  <span class="quotationcenter-590">
                                    USD
                                    <small class="quotationcenter-591">
                                      /CNH
                                    </small>
                                  </span>
                                  <p class="quotationcenter-592">量：11.81萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-593">
                                <span class="quotationcenter-594">7.24641</span>
                              </div>
                              <div class="quotationcenter-595">
                                <div class="quotationcenter-596">0.00%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-597">
                              <div class="quotationcenter-598">
                                <div class="quotationcenter-599">
                                  <div class="quotationcenter-600">
                                    <div class="quotationcenter-601"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/20211216011853122109.png"
                                      
                                      class="quotationcenter-602"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-603">
                                  <span class="quotationcenter-604">
                                    USD
                                    <small class="quotationcenter-605">
                                      /JPY
                                    </small>
                                  </span>
                                  <p class="quotationcenter-606">量：8.55萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-607">
                                <span class="quotationcenter-608">156.076</span>
                              </div>
                              <div class="quotationcenter-609">
                                <div class="quotationcenter-610">-0.21%</div>
                              </div>
                            </li>
                            <li class="quotationcenter-611">
                              <div class="quotationcenter-612">
                                <div class="quotationcenter-613">
                                  <div class="quotationcenter-614">
                                    <div class="quotationcenter-615"></div>
                                    <img
                                      src="https://kmadmin.lpyrmgck.online/banner/2021121601195193348.png"
                                      
                                      class="quotationcenter-616"
                                    />
                                  </div>
                                </div>
                                <div class="quotationcenter-617">
                                  <span class="quotationcenter-618">
                                    USD
                                    <small class="quotationcenter-619">
                                      /MXN
                                    </small>
                                  </span>
                                  <p class="quotationcenter-620">量：2.87萬</p>
                                </div>
                              </div>
                              <div class="quotationcenter-621">
                                <span class="quotationcenter-622">
                                  16.58040
                                </span>
                              </div>
                              <div class="quotationcenter-623">
                                <div class="quotationcenter-624">-0.02%</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
