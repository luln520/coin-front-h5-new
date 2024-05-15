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
    return (
      <span key={"contentStrSpan"+Math.random()}>
        {contentStr}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        {contentStr}
      </span>
    );
  };
  return (
    <div>
      <NoticeBar
        content={getContent()}
        style={{
          backgroundColor: "transparent",
          color: "#999999",
          borderColor: "transparent",
        }}
      />
    </div>
  );
}
