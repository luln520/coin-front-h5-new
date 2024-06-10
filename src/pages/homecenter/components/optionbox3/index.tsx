import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox3({ loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div className="optionbox3-1">
      <div className="optionbox3-2">
        <div className="optionbox3-3"></div>
        <img
          src={la=="zh"?"/level/20220324030143175182.png":"/level/2022032403014737859.png"}
          
          className="optionbox3-4"
          onClick={() => {
            navigate("/lockUpCenter");
          }}
        />
      </div>
    </div>
  );
}
