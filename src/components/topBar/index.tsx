import { useNavigate } from "react-router-dom";
import "./index.css";

export default function TopBar({ title, isBack }) {
  const navigate = useNavigate();
  return (
    <div className="topbar-1">
      <div className="topbar-2">
        <div className="topbar-3">
          {isBack && (
            <div
              className="topbar-4"
              onClick={() => {
                navigate(-1);
              }}
            >
              <i className="topbar-5"></i>
            </div>
          )}
          <div className="topbar-6">{title}</div>
        </div>
      </div>
    </div>
  );
}
