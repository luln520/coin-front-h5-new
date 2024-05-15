import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import "./index.css";

export default function NewsInfoImg({ newsInfo }) {
  const navigate = useNavigate();
  return (
    <div
      className="newsInfo-3"
      style={{
        textAlign: "center",
      }}
    >
      <div className="newsInfo-4">
        <img
          alt=""
          src={imageConfig.baseImageUrl + newsInfo?.img}
          className="newsInfo-5"
        />
      </div>
    </div>
  );
}
