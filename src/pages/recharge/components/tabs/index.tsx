import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./index.css";
import { imageConfig } from "../../../../config/config";

export default function Tabs({ use }) {
  const navigate = useNavigate();
  const lan = localStorage.getItem("i18n");
  return (
    <div className="czlblistDiv-1">
      <div className="czlblistitem-1">
        <div
          style={{
            width: "65px",
            height: "86px",
            float: "left",
          }}
        >
          {use?.img && (
            <img
              alt=""
              style={{
                width: "43px",
                height: "43px",
                float: "left",
                margin: "20px 10px",
              }}
              src={imageConfig.baseImageUrl + use?.img}
            />
          )}
        </div>
        <div className="czlblistitemname-1">
          {`${use?.name?.toUpperCase()}${
            use?.czline && `-${use?.czline}`.toUpperCase()
          }`}
        </div>
        <div className="czlblistitemaddress-1">
          ({lan == "zh" ? use?.title : use?.nameEn})
        </div>
      </div>
    </div>
  );
}
