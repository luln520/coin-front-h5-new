import { useNavigate } from "react-router-dom";
import Tabs2 from "../tabs2";
import TradTradingRecordCenterCZ from "../tradTradingRecordCenterCZ";
import TradTradingRecordCenterTX from "../tradTradingRecordCenterTX";
import "./index.css";

export default function TradingRecordCenter({ index2, setIndex2,txList,czList }) {
  const navigate = useNavigate();
  return (
    <>
      <Tabs2 index2={index2} setIndex2={setIndex2} />
      {index2 === 1 && <TradTradingRecordCenterCZ czList={czList}/>}
      {index2 === 2 && <TradTradingRecordCenterTX txList={txList}/>}
    </>
  );
}
