import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../config/config";
import "./index.css";

export default function HomeTopBar({ companyData }) {
  const navigate = useNavigate();
  return (
    <div className="hometopbar-1">
      <div className="hometopbar-2">
        <div className="hometopbar-3">
          <img
            src={imageConfig.baseImageUrl + companyData?.companyLogoName}
            className="hometopbar-5"
          />
          <div className="hometopbar-6">
            <div className="hometopbar-7">
              <div className="hometopbar-8"></div>
            </div>
            <div className="hometopbar-9">
              <div className="hometopbar-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hometopbar-11"></div>
    </div>
  );
}
