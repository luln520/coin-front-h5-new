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
    <div className="property-1">
      <div className="property-2">{translate(getText("平衡"))}</div>
      <div className="property-3">{userInfo?.usdt}</div>
      <div className="property-4">
        <div className="property-5">
          <div className="property-6">
            <span className="property-7">{translate(getText("今日利潤"))}</span>
            <span className="property-8">{qbSum?.todaynum}</span>
          </div>
        </div>
        <div className="property-9">
          <div className="property-10">
            <span className="property-11">
              {translate(getText("今日總交金額"))}
            </span>
            <span className="property-12">{qbSum?.sumnum}</span>
          </div>
        </div>
      </div>
      <div className="property-13">
        <div className="property-14">
          <div className="property-15">
            <span className="property-16">
              {translate(getText("今日交易筆數"))}
            </span>
            <span className="property-17">{qbSum?.count}</span>
          </div>
        </div>
        <div className="property-18"></div>
      </div>
      <div className="property-19">
        <div
          className="property-20"
          onClick={() => {
            navigate("/rechargelist");
          }}
        >
          <span className="property-21">{translate(getText("訂金"))}</span>
        </div>
        <div
          className="property-22"
          onClick={() => {
            navigate("/extractlist");
          }}
        >
          <span className="property-23">{translate(getText("提取"))}</span>
        </div>
        <div
          className="property-24"
          onClick={() => {
            navigate("/tradingRecord/1");
          }}
        >
          <span className="property-25">{translate(getText("明細"))}</span>
        </div>
      </div>
      <div className="property-26">
        <div
          className="property-27"
          onClick={() => {
            navigate("/tradingRecord/1");
          }}
        >
          <img
            alt=""
            src={`/property/tab1_${companySkin}.png`}
            className="property-28"
          />
          <span
            className="property-29"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("存款記錄"))}
          </span>
        </div>
        <div
          className="property-27"
          onClick={() => {
            navigate("/tradingRecord/2");
          }}
        >
          <img
            alt=""
            src={`/property/tab2_${companySkin}.png`}
            className="property-28"
          />
          <span
            className="property-32"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("提現歷史"))}
          </span>
        </div>
        <div
          className="property-27"
          onClick={() => {
            navigate("/tradingRecord/3");
          }}
        >
          <img
            alt=""
            src={`/property/tab3_${companySkin}.png`}
            className="property-28"
          />
          <span
            className="property-35"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("交易記錄"))}
          </span>
        </div>
        <div
          className="property-27"
          onClick={() => {
            navigate("/address");
          }}
        >
          <img
            alt=""
            src={`/property/tab4_${companySkin}.png`}
            className="property-28"
          />
          <span
            className="property-38"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("錢包地址"))}
          </span>
        </div>
        {/* 下一部分 */}
        <div
          className="propertyTab-14"
          onClick={() => {
            if (isShowZF) {
              setVisibleTK2(true);
            } else {
              setVisibleCK(true);
            }
          }}
        >
          <img
            src={`/property/tab5_${companySkin}.png`}
            alt=""
            className="propertyTab-15"
          />
          <h3
            className="propertyTab-16"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("C2C存款"))}
          </h3>
        </div>
        <div
          className="propertyTab-17"
          onClick={() => {
            navigate("/c2cckList");
          }}
        >
          <img
            src={`/property/tab6_${companySkin}.png`}
            alt=""
            className="propertyTab-15"
          />
          <h3
            className="propertyTab-19"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("C2C存款記錄"))}
          </h3>
        </div>
        <div
          className="propertyTab-20"
          style={{
            opacity: c2ctxStatus == 1 ? 1 : 0,
          }}
          onClick={() => {
            if (c2ctxStatus == 1) {
              setVisibleTK(true);
            }
          }}
        >
          <img
            src={`/property/tab7_${companySkin}.png`}
            alt=""
            className="propertyTab-15"
          />
          <h3
            className="propertyTab-22"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("C2C提款"))}
          </h3>
        </div>
        <div
          className="propertyTab-23"
          style={{
            opacity: c2ctxStatus == 1 ? 1 : 0,
          }}
          onClick={() => {
            if (c2ctxStatus == 1) {
              navigate(`/c2ctkList`);
            }
          }}
        >
          <img
            src={`/property/tab8_${companySkin}.png`}
            alt=""
            className="propertyTab-15"
          />
          <h3
            className="propertyTab-25"
            style={{
              textAlign: "center",
              wordBreak: lan == "de" ? "break-all" : "",
            }}
          >
            {translate(getText("C2C提款記錄"))}
          </h3>
        </div>
      </div>
      <img
        alt=""
        src="/property/banner.png"
        className="property-51"
        onClick={() => {
          navigate("/chat");
        }}
      />
    </div>
  );
}
