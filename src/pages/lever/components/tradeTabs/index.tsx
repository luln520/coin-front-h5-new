import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradeTabs({ index, setIndex }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    // <div className="levercnetertabs-1">
    //   <div className="levercnetertabs-2">
    //     <div
    //       className={index===1?"levercnetertabs-7":"levercnetertabs-3"}
    //       onClick={() => {
    //         setIndex(1);
    //       }}
    //     >
    //       <span className="levercnetertabs-4">{translate(getText("K線"))}</span>
    //     </div>
    //     <div
    //       className={index===2?"levercnetertabs-7":"levercnetertabs-3"}
    //       onClick={() => {
    //         setIndex(2);
    //       }}
    //     >
    //       <span className="levercnetertabs-6">{translate(getText("簡介"))}</span>
    //     </div>
    //     <div
    //       className={index===3?"levercnetertabs-7":"levercnetertabs-3"}
    //       onClick={() => {
    //         setIndex(3);
    //       }}
    //     >
    //       <span className="levercnetertabs-8">{translate(getText("貿易"))}</span>
    //     </div>
    //     <div
    //       className={index===4?"levercnetertabs-7":"levercnetertabs-3"}
    //       onClick={() => {
    //         setIndex(4);
    //       }}
    //     >
    //       <span className="levercnetertabs-8">{translate(getText("命令"))}</span>
    //     </div>
    //     <div
    //       className={index===5?"levercnetertabs-7":"levercnetertabs-3"}
    //       onClick={() => {
    //         setIndex(5);
    //       }}
    //     >
    //       <span className="levercnetertabs-12">{translate(getText("明細"))}</span>
    //     </div>
    //   </div>
    // </div>

    <div className="levercnetertabs-1">
      <div className="levercnetertabs-2">
        <div
          className={index === 1 ? "levercnetertabs-3" : "levercnetertabs-5"}
          onClick={() => {
            setIndex(1);
          }}
        >
          <span className="levercnetertabs-4">{translate(getText("K線"))}</span>
        </div>
        <div
          className={index === 2 ? "levercnetertabs-3" : "levercnetertabs-5"}
          onClick={() => {
            setIndex(2);
          }}
        >
          <span className="levercnetertabs-6">
            {translate(getText("簡介"))}
          </span>
        </div>
        <div
          className={index === 3 ? "levercnetertabs-3" : "levercnetertabs-5"}
          onClick={() => {
            setIndex(3);
          }}
        >
          <span className="levercnetertabs-8">
            {translate(getText("貿易"))}
          </span>
        </div>
        <div
          className={index === 4 ? "levercnetertabs-3" : "levercnetertabs-5"}
          onClick={() => {
            setIndex(4);
          }}
        >
          <span className="levercnetertabs-10">
            {translate(getText("命令"))}
          </span>
        </div>
        <div
          className={index === 5 ? "levercnetertabs-3" : "levercnetertabs-5"}
          onClick={() => {
            setIndex(5);
          }}
        >
          <span className="levercnetertabs-12">
            {translate(getText("明細"))}
          </span>
        </div>
      </div>
    </div>
  );
}
