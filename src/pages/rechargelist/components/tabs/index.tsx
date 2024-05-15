import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import "./index.css";
import { imageConfig } from "../../../../config/config";

export default function Tabs({ coinList }) {
  const navigate = useNavigate();
  const lan = localStorage.getItem("i18n");

  const getNode = () => {
    const nodes = [];
    for (let i = 0; i < coinList.length; i++) {
      const data = coinList[i];
      const node = (
        <div
          className="czlblistitem"
          onClick={() => {
            navigate(`/recharge/${data?.id}`);
          }}
        >
          <div
            style={{
              width: "65px",
              height: "86px",
              float: "left",
            }}
          >
            {data?.img && (
              <img
                alt=""
                style={{
                  width: "43px",
                  height: "43px",
                  float: "left",
                  margin: "20px 10px",
                }}
                src={imageConfig.baseImageUrl + data?.img}
              />
            )}
          </div>
          <div className="czlblistitemname">
            {/* {`${data.name.toUpperCase()}${data.czline && `_${data.czline}`}`} */}
            {`${data.name.toUpperCase()}${
              data.czline ? `-${data.czline}`.toUpperCase() : ""
            }`}
          </div>
          <div className="czlblistitemaddress">
            ({lan == "zh" ? data?.title : data?.nameEn})
          </div>
          {/* <RightOutlined className="czlblistitemicon" /> */}
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return <div className="czlblistDiv">{getNode()}</div>;
}
