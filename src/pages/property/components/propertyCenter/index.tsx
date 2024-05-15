import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function PropertyCenter({
  userInfo,
  qbSum,
  setVisible,
  setVisibleTK,
  setVisibleTK2,
  setVisibleCK,
  isShowZF,
}) {
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div className="propertycenter-1">
      <div className="propertycenter-2">
        <div className="propertycenter-3">
          <div data-v-5bb30e94="" className="propertycenter-4"></div>
          <p className="propertycenter-5">資產</p>
          <h1 className="propertycenter-6">
            3287776.57<span className="propertycenter-7">USDT</span>
          </h1>
          <div className="propertycenter-8"></div>
        </div>
      </div>
      <div className="propertycenter-9">
        <div className="propertycenter-10">
          <div className="propertycenter-11">
            <div className="propertycenter-12"></div>
            <img
              src="/static/ICON/20.png"
              draggable="true"
              className="propertycenter-13"
            />
            <div className="propertycenter-14">
              <div className="propertycenter-15">
                <div className="propertycenter-16"></div>
              </div>
              <div className="propertycenter-17">
                <div className="propertycenter-18"></div>
              </div>
            </div>
          </div>
          <p className="propertycenter-19">
            <div className="propertycenter-20">入金</div>
          </p>
        </div>
        <div className="propertycenter-21">
          <div className="propertycenter-22">
            <div className="propertycenter-23"></div>
            <img
              src="/static/ICON/21.png"
              draggable="true"
              className="propertycenter-24"
            />
            <div className="propertycenter-25">
              <div className="propertycenter-26">
                <div className="propertycenter-27"></div>
              </div>
              <div className="propertycenter-28">
                <div className="propertycenter-29"></div>
              </div>
            </div>
          </div>
          <p className="propertycenter-30">
            <div className="propertycenter-31">出金</div>
          </p>
        </div>
        <div className="propertycenter-32">
          <div className="propertycenter-33">
            <div className="propertycenter-34"></div>
            <img
              src="/static/ICON/22.png"
              draggable="true"
              className="propertycenter-35"
            />
            <div className="propertycenter-36">
              <div className="propertycenter-37">
                <div className="propertycenter-38"></div>
              </div>
              <div className="propertycenter-39">
                <div className="propertycenter-40"></div>
              </div>
            </div>
          </div>
          <p className="propertycenter-41">
            <div className="propertycenter-42">兌換</div>
          </p>
        </div>
      </div>
      <div className="propertycenter-43">
        <div className="propertycenter-44">
          <div className="propertycenter-45">
            <div className="propertycenter-46">
              <div className="propertycenter-47">
                <div className="propertycenter-48">
                  <div className="propertycenter-49">
                    <div className="propertycenter-50">
                      <div id="u-tab-item-0" className="propertycenter-51">
                        賬戶資產
                      </div>
                      <div className="propertycenter-52">幣幣資產</div>
                      <div className="propertycenter-53"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="propertycenter-54">
        <li className="propertycenter-55">
          <div className="propertycenter-56">
            <h1 className="propertycenter-57">USDT</h1>
          </div>
          <div className="propertycenter-58">
            <div className="propertycenter-59">
              <div className="propertycenter-60">可用(USDT)</div>
              <div className="propertycenter-61">處理中(USDT)</div>
              <div className="propertycenter-62">折合(USDT)</div>
            </div>
            <div className="propertycenter-63">
              <div className="propertycenter-64">3287776.57</div>
              <div className="propertycenter-65">0.00</div>
              <div className="propertycenter-66">3287776.57</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-67">
        <li className="propertycenter-68">
          <div className="propertycenter-69">
            <h1 className="propertycenter-70">BTC</h1>
          </div>
          <div className="propertycenter-71">
            <div className="propertycenter-72">
              <div className="propertycenter-73">可用(BTC)</div>
              <div className="propertycenter-74">處理中(BTC)</div>
              <div className="propertycenter-75">折合(USDT)</div>
            </div>
            <div className="propertycenter-76">
              <div className="propertycenter-77">0.01604000</div>
              <div className="propertycenter-78">0.00000000</div>
              <div className="propertycenter-79">1032.68</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-80">
        <li className="propertycenter-81">
          <div className="propertycenter-82">
            <h1 className="propertycenter-83">ETH</h1>
          </div>
          <div className="propertycenter-84">
            <div className="propertycenter-85">
              <div className="propertycenter-86">可用(ETH)</div>
              <div className="propertycenter-87">處理中(ETH)</div>
              <div className="propertycenter-88">折合(USDT)</div>
            </div>
            <div className="propertycenter-89">
              <div className="propertycenter-90">0.330740</div>
              <div className="propertycenter-91">0.000000</div>
              <div className="propertycenter-92">981.94</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-93">
        <li className="propertycenter-94">
          <div className="propertycenter-95">
            <h1 className="propertycenter-96">USD</h1>
          </div>
          <div className="propertycenter-97">
            <div className="propertycenter-98">
              <div className="propertycenter-99">可用(USD)</div>
              <div className="propertycenter-100">處理中(USD)</div>
              <div className="propertycenter-101">折合(USDT)</div>
            </div>
            <div className="propertycenter-102">
              <div className="propertycenter-103">0.00</div>
              <div className="propertycenter-104">0.00</div>
              <div className="propertycenter-105">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-106">
        <li className="propertycenter-107">
          <div className="propertycenter-108">
            <h1 className="propertycenter-109">CNY</h1>
          </div>
          <div className="propertycenter-110">
            <div className="propertycenter-111">
              <div className="propertycenter-112">可用(CNY)</div>
              <div className="propertycenter-113">處理中(CNY)</div>
              <div className="propertycenter-114">折合(USDT)</div>
            </div>
            <div className="propertycenter-115">
              <div className="propertycenter-116">0.00</div>
              <div className="propertycenter-117">0.00</div>
              <div className="propertycenter-118">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-119">
        <li className="propertycenter-120">
          <div className="propertycenter-121">
            <h1 className="propertycenter-122">HKD</h1>
          </div>
          <div className="propertycenter-123">
            <div className="propertycenter-124">
              <div className="propertycenter-125">可用(HKD)</div>
              <div className="propertycenter-126">處理中(HKD)</div>
              <div className="propertycenter-127">折合(USDT)</div>
            </div>
            <div className="propertycenter-128">
              <div className="propertycenter-129">0.00</div>
              <div className="propertycenter-130">0.00</div>
              <div className="propertycenter-131">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-132">
        <li className="propertycenter-133">
          <div className="propertycenter-134">
            <h1 className="propertycenter-135">JPY</h1>
          </div>
          <div className="propertycenter-136">
            <div className="propertycenter-137">
              <div className="propertycenter-138">可用(JPY)</div>
              <div className="propertycenter-139">處理中(JPY)</div>
              <div className="propertycenter-140">折合(USDT)</div>
            </div>
            <div className="propertycenter-141">
              <div className="propertycenter-142">0.00</div>
              <div className="propertycenter-143">0.00</div>
              <div className="propertycenter-144">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-145">
        <li className="propertycenter-146">
          <div className="propertycenter-147">
            <h1 className="propertycenter-148">GBP</h1>
          </div>
          <div className="propertycenter-149">
            <div className="propertycenter-150">
              <div className="propertycenter-151">可用(GBP)</div>
              <div className="propertycenter-152">處理中(GBP)</div>
              <div className="propertycenter-153">折合(USDT)</div>
            </div>
            <div className="propertycenter-154">
              <div className="propertycenter-155">0.00</div>
              <div className="propertycenter-156">0.00</div>
              <div className="propertycenter-157">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-158">
        <li className="propertycenter-159">
          <div className="propertycenter-160">
            <h1 className="propertycenter-161">EUR</h1>
          </div>
          <div className="propertycenter-162">
            <div className="propertycenter-163">
              <div className="propertycenter-164">可用(EUR)</div>
              <div className="propertycenter-165">處理中(EUR)</div>
              <div className="propertycenter-166">折合(USDT)</div>
            </div>
            <div className="propertycenter-167">
              <div className="propertycenter-168">0.00</div>
              <div className="propertycenter-169">0.00</div>
              <div className="propertycenter-170">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-171">
        <li className="propertycenter-172">
          <div className="propertycenter-173">
            <h1 className="propertycenter-174">USDC</h1>
          </div>
          <div className="propertycenter-175">
            <div className="propertycenter-176">
              <div className="propertycenter-177">可用(USDC)</div>
              <div className="propertycenter-178">處理中(USDC)</div>
              <div className="propertycenter-179">折合(USDT)</div>
            </div>
            <div className="propertycenter-180">
              <div className="propertycenter-181">0.00</div>
              <div className="propertycenter-182">0.00</div>
              <div className="propertycenter-183">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-184">
        <li className="propertycenter-185">
          <div className="propertycenter-186">
            <h1 className="propertycenter-187">VND</h1>
          </div>
          <div className="propertycenter-188">
            <div className="propertycenter-189">
              <div className="propertycenter-190">可用(VND)</div>
              <div className="propertycenter-191">處理中(VND)</div>
              <div className="propertycenter-192">折合(USDT)</div>
            </div>
            <div className="propertycenter-193">
              <div className="propertycenter-194">0.00</div>
              <div className="propertycenter-195">0.00</div>
              <div className="propertycenter-196">0.00</div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="propertycenter-197">
        <li className="propertycenter-198">
          <div className="propertycenter-199">
            <h1 className="propertycenter-200">MYR</h1>
          </div>
          <div className="propertycenter-201">
            <div className="propertycenter-202">
              <div className="propertycenter-203">可用(MYR)</div>
              <div className="propertycenter-204">處理中(MYR)</div>
              <div className="propertycenter-205">折合(USDT)</div>
            </div>
            <div className="propertycenter-206">
              <div className="propertycenter-207">0.00</div>
              <div className="propertycenter-208">0.00</div>
              <div className="propertycenter-209">0.00</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
