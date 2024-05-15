import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradTradingRecordCenterCZ({ czList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  //充值列表
  const getCzNodes = () => {
    const nodes = [];
    for (const cz of czList) {
      const node = (
        <>
          <div className="tradTradingRecordCenterCZ-4">
            <div className="tradTradingRecordCenterCZ-5">
              {/* {translate(getText("訂單號"))} */}
              <span className="tradTradingRecordCenterCZ-6">{cz.orderNo}</span>
              <br className="tradTradingRecordCenterCZ-7" />
              <span className="tradTradingRecordCenterCZ-8">
                {translate(getText("存款金额"))}:
                <span className="tradTradingRecordCenterCZ-9">{cz.num}</span>
              </span>
              <br className="tradTradingRecordCenterCZ-10" />
            </div>
            <div className="tradTradingRecordCenterCZ-11">
              <span className="tradTradingRecordCenterCZ-12">
                <span className="tradTradingRecordCenterCZ-13">
                  {translate(
                    getText(
                      cz.status === 1
                        ? "待審查"
                        : cz.status === 2
                        ? "已完成"
                        : "失敗"
                    )
                  )}
                </span>
                <br className="tradTradingRecordCenterCZ-14" />
                <span className="tradTradingRecordCenterCZ-15">
                  {translate(getText("存款類型"))} ：{cz.coin.toUpperCase()}/
                  {cz.czline}&gt;{" "}
                </span>
                <br className="tradTradingRecordCenterCZ-16" />
                <span className="tradTradingRecordCenterCZ-17">
                  {cz.addtime}
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
    <div className="tradTradingRecordCenterCZ-1">
      <div role="tabpanel" className="tradTradingRecordCenterCZ-2">
        <div role="feed" className="tradTradingRecordCenterCZ-3">
          {getCzNodes()}
          <div className="tradTradingRecordCenterCZ-18">{translate(getText("暂无更多了"))}</div>
          <div className="tradTradingRecordCenterCZ-19"></div>
        </div>
      </div>
    </div>
  );
}
