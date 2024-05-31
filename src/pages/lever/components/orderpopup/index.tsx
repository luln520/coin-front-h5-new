import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useEffect, useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function OrderPopup({
  nowTab,
  type,
  setType,
  isShowOrder,
  setIsShowOrder,
  coinListData,
  index,
  ctmarketlist,
  userInfo,
  buyCoin,
  hysetInfo,
  setyqsy,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [type2, setType2] = useState(1);
  const [num, setNum] = useState("");
  const [hyTimes, setHyTimes] = useState([]);
  const [hyTzeds, setHyTzeds] = useState([]);
  const [hyYkbls, setHyYkbls] = useState([]);
  let [minNum, setminNum] = useState(100);
  const [cykbl, setcykbl] = useState(100);
  const [isUse, setIsUse] = useState(true);
  //加载节点
  const getNodes = () => {
    if (!hyTimes) {
      return "";
    }
    const nodes = [];
    for (let index = 0; index < hyTimes.length; index++) {
      let hyTime = hyTimes[index];
      let hyTzed = hyTzeds[index];
      let cykbl = hyYkbls[index];
      const node = (
        <div
          class={type2 === index + 1 ? "orderPopup-22" : "orderPopup-25"}
          onClick={() => {
            setType2(index + 1);
            setminNum(hyTzed);
            // setNum(hyTzed);
            setcykbl(cykbl);
          }}
        >
          <div class="orderPopup-23">{hyTime}</div>
          <div class="orderPopup-24">{cykbl}%</div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  useEffect(() => {
    setHyTimes(hysetInfo.hyTime);
    setHyTzeds(hysetInfo.hyTzed);
    setHyYkbls(hysetInfo.hyYkbl);
    setcykbl(hysetInfo.hyYkbl ? hysetInfo.hyYkbl[0] : 100);
    // setNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
    setminNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
  }, [hysetInfo]);
  return (
    <Popup
      visible={isShowOrder}
      onMaskClick={() => {
        setIsShowOrder(false);
      }}
      position="bottom"
      bodyStyle={{ width: "100vw", backgroundColor: "#f5f5f5" }}
    >
      <div class="leverOrderPopup-1">
        <div class="leverOrderPopup-2">
          <div class="leverOrderPopup-3">
            <div class="leverOrderPopup-4">
              <div class="leverOrderPopup-5">
                <p class="leverOrderPopup-6">訂單確認</p>
                <div
                  class="leverOrderPopup-7"
                  onClick={() => {
                    setIsShowOrder(false);
                  }}
                ></div>
              </div>
              <div class="leverOrderPopup-8">
                <div class="leverOrderPopup-9">
                  <div class="leverOrderPopup-10">
                    <div class="leverOrderPopup-11">
                      <div class="leverOrderPopup-12">
                        <div class="leverOrderPopup-13">
                          <div class="leverOrderPopup-14">
                            <div class="leverOrderPopup-15">市價</div>
                            {/* <div class="leverOrderPopup-16">掛單</div> */}
                          </div>
                          <div class="leverOrderPopup-17">
                            <div
                              class={
                                type == 1
                                  ? "leverOrderPopup-18"
                                  : "leverOrderPopup-19"
                              }
                              onClick={() => {
                                setType(1);
                              }}
                            >
                              買多
                            </div>
                            <div
                              class={
                                type == 2
                                  ? "leverOrderPopup-18-1"
                                  : "leverOrderPopup-19"
                              }
                              onClick={() => {
                                setType(2);
                              }}
                            >
                              買空
                            </div>
                          </div>
                          <div class="leverOrderPopup-20">
                            <div class="leverOrderPopup-21">
                              <div class="leverOrderPopup-22">
                                <div class="leverOrderPopup-23">交易手數</div>
                              </div>
                              <div class="leverOrderPopup-24">
                                <div class="leverOrderPopup-25">1</div>
                                <div class="leverOrderPopup-26">5</div>
                                <div class="leverOrderPopup-27">10</div>
                                <div class="leverOrderPopup-28">20</div>
                              </div>
                              <div class="leverOrderPopup-29">
                                <div class="leverOrderPopup-30">
                                  <div class="leverOrderPopup-31">
                                    <div class="leverOrderPopup-32">
                                      <span class="leverOrderPopup-33">-</span>
                                    </div>
                                  </div>
                                  <div class="leverOrderPopup-34">
                                    <div class="leverOrderPopup-35">
                                      <div class="leverOrderPopup-36"></div>
                                      <input
                                        maxlength="140"
                                        step="0.000000000000000001"
                                        enterkeyhint="done"
                                        autocomplete="off"
                                        type="number"
                                        class="leverOrderPopup-37"
                                      />
                                    </div>
                                  </div>
                                  <div class="leverOrderPopup-38">
                                    <div class="leverOrderPopup-39">
                                      <span class="leverOrderPopup-40">+</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="leverOrderPopup-41">
                            <div class="leverOrderPopup-42">
                              <div class="leverOrderPopup-43">
                                <div class="leverOrderPopup-44">
                                  佔用保證金:
                                </div>
                                <div class="leverOrderPopup-45">674.1386</div>
                              </div>
                              <div class="leverOrderPopup-46">
                                <div class="leverOrderPopup-47">手續費:</div>
                                <div class="leverOrderPopup-48">0</div>
                              </div>
                              <div class="leverOrderPopup-49">
                                <div class="leverOrderPopup-50">可用餘額:</div>
                                <div class="leverOrderPopup-51">3287764.57</div>
                              </div>
                              <div class="leverOrderPopup-52"></div>
                            </div>
                          </div>
                          <div class="leverOrderPopup-53">
                            <div class="leverOrderPopup-54">杠杆倍數</div>
                            <div class="leverOrderPopup-55">
                              <div class="leverOrderPopup-56"></div>
                            </div>
                          </div>
                          <div class="leverOrderPopup-57">
                            <div class="leverOrderPopup-58">
                              <div class="leverOrderPopup-59">
                                <div class="leverOrderPopup-60">5</div>
                                <div class="leverOrderPopup-61">10</div>
                                <div class="leverOrderPopup-62">15</div>
                                <div class="leverOrderPopup-63">20</div>
                                <div class="leverOrderPopup-64">100</div>
                              </div>
                            </div>
                          </div>
                          <div class="leverOrderPopup-65">
                            <div class="leverOrderPopup-66">止損價</div>
                            <div class="leverOrderPopup-67">
                              <div class="leverOrderPopup-68">
                                <div class="leverOrderPopup-69">
                                  <div class="leverOrderPopup-70">
                                    <span class="leverOrderPopup-71">-</span>
                                  </div>
                                </div>
                                <div class="leverOrderPopup-72">
                                  <div class="leverOrderPopup-73">
                                    <div class="leverOrderPopup-74"></div>
                                    <input
                                      maxlength="140"
                                      step="0.000000000000000001"
                                      enterkeyhint="done"
                                      autocomplete="off"
                                      type="number"
                                      class="leverOrderPopup-75"
                                    />
                                  </div>
                                </div>
                                <div class="leverOrderPopup-76">
                                  <div class="leverOrderPopup-77">
                                    <span class="leverOrderPopup-78">+</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="leverOrderPopup-79">
                            <div class="leverOrderPopup-80">止盈價</div>
                            <div class="leverOrderPopup-81">
                              <div class="leverOrderPopup-82">
                                <div class="leverOrderPopup-83">
                                  <div class="leverOrderPopup-84">
                                    <span class="leverOrderPopup-85">-</span>
                                  </div>
                                </div>
                                <div class="leverOrderPopup-86">
                                  <div class="leverOrderPopup-87">
                                    <div class="leverOrderPopup-88"></div>
                                    <input
                                      maxlength="140"
                                      step="0.000000000000000001"
                                      enterkeyhint="done"
                                      autocomplete="off"
                                      type="number"
                                      class="leverOrderPopup-89"
                                    />
                                  </div>
                                </div>
                                <div class="leverOrderPopup-90">
                                  <div class="leverOrderPopup-91">
                                    <span class="leverOrderPopup-92">+</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="leverOrderPopup-93">
                        <div
                          class={
                            type == 1
                              ? "leverOrderPopup-94"
                              : "leverOrderPopup-94-1"
                          }
                        >
                          {type == 1 ? "買多" : "買空"}
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
    </Popup>
  );
}
