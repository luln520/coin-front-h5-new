import { useNavigate } from "react-router-dom";
import "./index.css";

export default function TopBar4({ title, isBack, backClor }) {
  return (
    <div className="topbar4-1">
      <div className="topbar4-2">
        <div className="topbar4-3">
          {isBack && (
            <div
              className="topbar4-4"
              onClick={() => {
                isBack();
              }}
            >
              <i
                className="topbar4-5"
                style={{
                  color: backClor,
                }}
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
