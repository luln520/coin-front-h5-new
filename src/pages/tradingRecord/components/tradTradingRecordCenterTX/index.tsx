import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradTradingRecordCenterTX({ txList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  //提现列表
  const getTxNodes = () => {
    const nodes = [];
    for (const tx of txList) {
      const node = (
        <>
          <div className="tradTradingRecordCenterTX-22">
            <div className="tradTradingRecordCenterTX-23">
              <span className="tradTradingRecordCenterTX-24">{tx.orderNo}</span>
              <br className="tradTradingRecordCenterTX-25" />
              <span className="tradTradingRecordCenterTX-26">
                {translate(getText("提幣數量"))} :
                <span className="tradTradingRecordCenterTX-27">{tx.num}</span>
              </span>
              <br className="tradTradingRecordCenterTX-28" />
            </div>
            <div className="tradTradingRecordCenterTX-29">
              <span className="tradTradingRecordCenterTX-30">
                <span className="tradTradingRecordCenterTX-31">
                {translate(
                    getText(
                      tx.status === 1
                        ? "待審查"
                        : tx.status === 2
                        ? "已完成"
                        : "失敗"
                    )
                  )}
                </span>
                <br className="tradTradingRecordCenterTX-32" />
                <span className="tradTradingRecordCenterTX-33">
                  {translate(getText("提款類型"))} ： &gt;{" "}
                </span>
                <br className="tradTradingRecordCenterTX-34" />
                <span className="tradTradingRecordCenterTX-35">
                  {tx.addtime}
                </span>
              </span>
            </div>
          </div>
        </>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div className="tradTradingRecordCenterTX-1">
      <div role="tabpanel" className="tradTradingRecordCenterTX-20">
        <div role="feed" className="tradTradingRecordCenterTX-21">
          {getTxNodes()}
          <div className="tradTradingRecordCenterTX-36">{translate(getText("暂无更多了"))}</div>
          <div className="tradTradingRecordCenterTX-37"></div>
        </div>
      </div>
    </div>
  );
}
