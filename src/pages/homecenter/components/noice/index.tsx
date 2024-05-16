import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Noice({ content }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const getContent = () => {
    const contentStr =
      content[la == "zh" ? "content" : `content${la[0].toUpperCase()}${la[1]}`];
    return <span key={"contentStrSpan" + Math.random()}>{contentStr}</span>;
  };
  return (
    <div
      className="homenotice-1"
      onClick={() => {
        navigate("/noiceInfo");
      }}
    >
      <div className="homenotice-2">
        <div className="homenotice-3">
          <div className="homenotice-4"></div>
          <img
            src="https://www.btexure.vip/static/ICON/4.png"
            draggable="true"
            className="homenotice-5"
          />
        </div>
      </div>
      <div className="homenotice-6">
        <div className="homenotice-7">
          <div className="homenotice-8">
            <div className="homenotice-9">
              <div className="homenotice-10">
                <div className="homenotice-11">
                  <div className="homenotice-12">
                    上架10種語言，合約交易，極速交易，理財產品，10檔交易行情
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homenotice-13"></div>
    </div>
  );
}
