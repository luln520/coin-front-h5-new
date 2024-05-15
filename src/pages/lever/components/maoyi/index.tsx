import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function MaoYi({
  nowTab,
  userInfo,
  buyCoin,
  leverSet1,
  leverSet2,
  leverage,
  hysetInfo,
  type,
  setType,
}) {
  leverSet1.sort((a, b) => a.num - b.num);
  leverSet2.sort((a, b) => a.num - b.num);
  leverage.sort((a, b) => a.num - b.num);
  const [type1, setType1] = useState(1);
  const [type2, setType2] = useState(1);
  const [leverageIndex, setLeverageIndex] = useState(1);
  const [num, setNum] = useState("");
  let [minNum, setminNum] = useState(1000);
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [isUse, setIsUse] = useState(true);

  const getLeverSet2Nodes = () => {
    const nodes = [];
    for (let index = 0; index < leverSet2.length; index++) {
      let data = leverSet2[index];
      const node = (
        <div className="levermaoyi-12">
          <div className="levermaoyi-13"></div>
          <span className="levermaoyi-14">
            <div
              className={
                type2 === index + 1 ? "levermaoyi-15" : "levermaoyi-19"
              }
              onClick={() => {
                setType2(index + 1);
              }}
            >
              {data.num}%
            </div>
          </span>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const getLeverSet1Nodes = () => {
    const nodes = [];
    for (let index = 0; index < leverSet1.length; index++) {
      let data = leverSet1[index];
      const node = (
        <div className="levermaoyi-12">
          <div className="levermaoyi-13"></div>
          <span className="levermaoyi-14">
            <div
              className={
                type1 === index + 1 ? "levermaoyi-15" : "levermaoyi-19"
              }
              onClick={() => {
                setType1(index + 1);
              }}
            >
              {data.num}%
            </div>
          </span>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const getLeverageNodes = () => {
    const nodes = [];
    for (let index = 0; index < leverage.length; index++) {
      let data = leverage[index];
      const node = (
        <div className="levermaoyi-12">
          <div className="levermaoyi-13"></div>
          <span className="levermaoyi-14">
            <div
              className={
                leverageIndex === index + 1 ? "levermaoyi-15" : "levermaoyi-19"
              }
              onClick={() => {
                setLeverageIndex(index + 1);
                setminNum(data.min ? data.min : 0);
              }}
            >
              {data.num}
              {translate(getText("倍"))}
            </div>
          </span>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  useEffect(() => {
    // setNum(
    //   leverage && leverage.length > 0
    //     ? leverage[0]?.min
    //       ? leverage[0]?.min
    //       : 100
    //     : 100
    // );
    setminNum(
      leverage && leverage.length > 0
        ? leverage[0]?.min
          ? leverage[0]?.min
          : 0
        : 100
    );
  }, [leverage]);
  return (
    <div className="levermaoyi-1">
      <div className="levermaoyi-2">
        <div className="levermaoyi-4">
          <div
            className={
              leverSet2?.length > 0 ? "levermaoyi-5" : "levermaoyi-5-none"
            }
          >
            <div className="levermaoyi-6">
              <label id="van-field-22-label" className="levermaoyi-7">
                {translate(getText("止盈"))}
              </label>
            </div>
            <div className="levermaoyi-8">
              <div className="levermaoyi-9">
                <div className="levermaoyi-10">
                  <div className="levermaoyi-11">
                    {leverSet2 && getLeverSet2Nodes()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              leverSet1?.length > 0 ? "levermaoyi-5" : "levermaoyi-5-none"
            }
          >
            <div className="levermaoyi-33">
              <label id="van-field-23-label" className="levermaoyi-34">
                {translate(getText("止损"))}
              </label>
            </div>
            <div className="levermaoyi-35">
              <div className="levermaoyi-36">
                <div className="levermaoyi-37">
                  <div className="levermaoyi-38">
                    {leverSet1 && getLeverSet1Nodes()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              leverage?.length > 0 ? "levermaoyi-5" : "levermaoyi-5-none"
            }
          >
            <div className="levermaoyi-60">
              <label id="van-field-24-label" className="levermaoyi-61">
                {translate(getText("倍数"))}
              </label>
            </div>
            <div className="levermaoyi-62">
              <div className="levermaoyi-63">
                <div className="levermaoyi-64">
                  <div className="levermaoyi-65">
                    {leverage && getLeverageNodes()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="levermaoyi-86">
            <div className="levermaoyi-87">
              <label id="van-field-25-label" className="levermaoyi-88">
                {translate(getText("方向"))}
              </label>
            </div>
            <div className="levermaoyi-89">
              <div className="levermaoyi-90">
                <div className="levermaoyi-91">
                  <div className="levermaoyi-92">
                    <div
                      className={
                        type === 1 ? "levermaoyi-93-click" : "levermaoyi-93"
                      }
                      onClick={() => {
                        setType(1);
                      }}
                    >
                      {translate(getText("買多"))}
                    </div>
                    <div
                      className={
                        type === 2 ? "levermaoyi-93-click" : "levermaoyi-93"
                      }
                      onClick={() => {
                        setType(2);
                      }}
                    >
                      {translate(getText("買空"))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="levermaoyi-94">
            <div className="levermaoyi-95">
              <label id="van-field-26-label" className="levermaoyi-96">
                {translate(getText("數量"))}
              </label>
            </div>
            <div className="levermaoyi-97">
              <div className="levermaoyi-98">
                <div className="levermaoyi-99">
                  <div className="levermaoyi-100">
                    <div role="group" className="levermaoyi-101">
                      <button
                        type="button"
                        aria-disabled="true"
                        className="levermaoyi-102"
                      ></button>
                      <input
                        className="levermaoyi-103"
                        type="number"
                        min={minNum}
                        name="num"
                        value={num}
                        onChange={(e) => {
                          setNum(parseInt(e.target.value));
                        }}
                      />
                      <button type="button" className="levermaoyi-104"></button>
                    </div>
                    <button type="button" className="levermaoyi-105">
                      <div
                        className="levermaoyi-106"
                        onClick={() => {
                          setNum(parseInt(userInfo?.usdt));
                        }}
                      >
                        <span className="levermaoyi-107">
                          {translate(getText("全部"))}
                        </span>
                      </div>
                    </button>
                    <span className="levermaoyi-108">
                      {userInfo?.usdt} USDT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="levermaoyi-109">
            <div className="levermaoyi-110">
              <div className="levermaoyi-111">
                <div className="levermaoyi-112">
                  {translate(getText("最低投資額"))}: {minNum}
                </div>
                <div className="levermaoyi-112">
                  {translate(getText("預期收入"))}:
                  {num > 0 &&
                    leverSet1?.length > 0 &&
                    leverSet2?.length > 0 &&
                    `${
                      leverSet2[type2 - 1]?.num *
                      leverage[leverageIndex - 1]?.num *
                      num *
                      0.01
                    }`}
                  {/* {(leverSet1?.length == 0 || leverSet2?.length == 0) && 0} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="levermaoyi-114">
          <button
            className="levermaoyi-115"
            onClick={() => {
              if (num < minNum) {
                Toast.show({ content: `${translate("trade.min")} ${minNum}` });
                return;
              }
              if (!isUse) {
                return;
              }
              setIsUse(false);
              setTimeout(() => {
                setIsUse(true);
              }, 3000);
              buyCoin({
                ccoinname: `${nowTab.toUpperCase()}/USDT`,
                win: leverSet2[type2 - 1]?.num,
                loss: leverSet1[type1 - 1]?.num,
                fold: leverage[leverageIndex - 1]?.num,
                hyzd: type,
                num: num,
                ploss:
                  leverSet2[type2 - 1]?.num *
                  leverage[leverageIndex - 1]?.num *
                  num *
                  0.01,
                premium: hysetInfo?.hySxf,
              });
            }}
          >
            <div
              className="levermaoyi-116"
              style={{
                backgroundColor: isUse ? "" : "#999999",
              }}
            >
              <span className="levermaoyi-117">
                {translate(getText("確認"))}
              </span>
            </div>
          </button>
        </div>
        <div className="levermaoyi-118"></div>
      </div>
    </div>
  );
}
