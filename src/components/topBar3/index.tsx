import { useNavigate } from "react-router-dom";
import "./index.css";

export default function TopBar3({ title, onCall, nowTab }) {
  const navigate = useNavigate();
  return (
    // <div className="topbar-1">
    //   <div className="topbar-2">
    //     <div className="topbar-3">
    //       {onCall && (
    //         <div className="topbar-4" onClick={onCall}>
    //           <i className="topbar-5"></i>
    //         </div>
    //       )}
    //       <div className="topbar-6">
    //         <div>{title}</div>
    //         <div>{nowTab?.toUpperCase()}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="topBar-1">
      <div className="topBar-2">
        <div className="topBar-3">
          <div className="topBar-4">
            {onCall && (
              <div className="topBar-5" onClick={onCall}>
                <i className="topBar-6"></i>
              </div>
            )}
            <div className="topBar-7">
              <h1 className="topBar-8">{title}</h1>
              <div className="topBar-9">{nowTab?.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
