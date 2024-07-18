import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../config/config";
import "./index.css";

export default function HomeTopBar({ companyData }) {
  const navigate = useNavigate();
  return (
    <div className="hometopbar-1">
      <div className="hometopbar-2">
          <img
            src={imageConfig.baseImageUrl + companyData?.companyLogoName}
            className="hometopbar-3"
          />
      </div>
      <div className="hometopbar-11"></div>
    </div>
  );
}
