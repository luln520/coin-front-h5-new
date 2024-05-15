import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function SettingPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="setting-1">
      {/* <div className="setting-2">
        <div
          role="button"
          className="setting-22"
          onClick={() => {
            navigate("/changePassword");
          }}
        >
          <div className="setting-23">
            <span className="setting-24">{translate(getText("更改密碼"))}</span>
          </div>
          <i className="setting-25"></i>
        </div>
        <div
          role="button"
          className="setting-26"
          onClick={() => {
            navigate("/changePayPassword");
          }}
        >
          <div className="setting-27">
            <span className="setting-28">{translate(getText("修改交易密碼"))}</span>
          </div>
          <i className="setting-29"></i>
        </div>
      </div> */}
      <div className="setting-30">
        {/* <div className="setting-31">
          <div className="setting-32">
            <span className="setting-33">語言</span>
          </div>
          <div className="setting-34">
            <div className="setting-35">
              <div role="button" className="setting-36">
                <span className="setting-37">
                  <div className="setting-38">繁体中文</div>
                </span>
              </div>
            </div>
            <div className="setting-39">
              <div className="setting-40"></div>
            </div>
          </div>
        </div> */}
        <div className="setting-41">
          <div className="setting-42">
            <span className="setting-43">{translate(getText("版本"))}</span>
          </div>
          <div className="setting-44">
            <span className="setting-45">V3.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
