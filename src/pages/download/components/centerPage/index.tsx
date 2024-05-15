import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";
import { getText } from "../../../../utils/util";
import "./index.css";
import { imageConfig } from "../../../../config/config";

export default function DownlandPage({ companyData }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const title = localStorage.getItem("title");
  return (
    <div className="centerDiv">
      <div className="imageDiv">
        <img
          src={imageConfig.baseImageUrl + companyData?.logo1}
          width="100%"
          className="image"
        />
      </div>
      <div className="centerFontDiv">
        <div className="centerItem">
          <img
            className="logo-img"
            src={imageConfig.baseImageUrl + companyData?.companyLogo}
          />
          <div className="logo-font">
            <h1 style={{
              fontSize:20
            }}>IOS</h1>
            <p className="lang">{translate(getText("年齡"))} 5+</p>
            <p className="lang">
              {translate(getText("提供安全"))}，
              {translate(getText("便捷的買賣方式"))}
            </p>
          </div>
          <Button
            color="primary"
            fill="none"
            className="buttonD"
            onClick={() => {
              if (companyData?.iosDomain.includes("http")) {
                window.location.href=companyData?.iosDomain;
              }
            }}
          >
            {translate(getText("下載"))}
          </Button>
        </div>
        <div className="centerItem">
          <img
            className="logo-img"
            src={imageConfig.baseImageUrl + companyData?.companyLogo}
          />
          <div className="logo-font">
            <h1 style={{
              fontSize:20
            }}>ANDROID</h1>
            <p className="lang">{translate(getText("年齡"))} 5+</p>
            <p className="lang">
              {translate(getText("提供安全"))}，
              {translate(getText("便捷的買賣方式"))}
            </p>
          </div>
          <Button
            color="primary"
            fill="none"
            className="buttonD"
            onClick={() => {
              if (companyData?.androidDomain.includes("http")) {
                window.location.href = companyData?.androidDomain;
              }
            }}
          >
            {translate(getText("下載"))}
          </Button>
        </div>
      </div>
      {/* 文字 */}
      <div className="fontDiv">
        <h1 className="">{translate(getText("介紹"))}</h1>
        <div className="fontInfoDiv">
          {translate(
            getText(
              "作為一家公司，我們強調長期的安全性、可靠性和便利性。我們的主要產品和服務反映了這一願景。先進的交易平台,更低的消費，更安全高效的保障，我們讓每個人都能輕鬆擁有和交易資產"
            )
          )}
        </div>
      </div>
    </div>
  );
}
