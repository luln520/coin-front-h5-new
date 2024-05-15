import { Empty } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradTradingRecordCenterCX({ hyorders }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getNode = () => {
    const nodes = [];
    for (let index = 0; index < hyorders.length; index++) {
      const data = hyorders[index];
      const node = (
        <div
          className="marketOrder-2"
          onClick={() => {
            const sendData = {
              orderNo: data.orderNo,
              coinname: data.coinname,
              num: data.num,
              ploss: data.ploss,
              buytime: data.buytime,
              status: data.status,
              isWin: data.isWin,
            };
            navigate(
              `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
            );
          }}
        >
          <div className="marketOrder-3">
            {/* {translate(getText("訂單號"))} : */}
            <span className="marketOrder-4">{data.orderNo}</span>
            <br className="marketOrder-5" />
            <span className="marketOrder-6">
              {translate(getText("買"))}:
              <span className="marketOrder-7">{data.num}</span>
            </span>
            <br className="marketOrder-8" />
            <span className="marketOrder-9">
              {translate(getText("貨幣"))}: {data.coinname}
            </span>
          </div>
          <div className="marketOrder-10">
            <span className="marketOrder-11">
              <span className="marketOrder-12">
                {" "}
                {translate(getText("已完成"))}{" "}
              </span>
              <br className="marketOrder-13" />
              <span className="marketOrder-14">
                {translate(getText("價格"))}：{data.buyprice} &gt;
              </span>
              <br className="marketOrder-15" />
              <span className="marketOrder-16">{data.buytime}</span>
            </span>
          </div>
        </div>
      );
      nodes.push(node);
    }
    //判断空
    if (nodes.length === 0) {
      nodes.push(<Empty description={translate(getText("暂无更多了"))} />);
    } else {
      nodes.push(
        <div className="marketOrder-32">{translate(getText("暂无更多了"))}</div>
      );
    }
    return nodes;
  };
  return (
    <div className="tradTradingRecordCenterCX-1">
      {getNode()}
      <div className="tradTradingRecordCenterCX-17"></div>
    </div>
  );
}
