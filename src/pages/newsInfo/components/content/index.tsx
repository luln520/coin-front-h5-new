import { useNavigate } from "react-router-dom";
import "./index.css";

export default function NewsInfoContent({ newsInfo }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: 10,
        fontSize:15
      }}
      dangerouslySetInnerHTML={{ __html: newsInfo?.content }}
    ></div>
  );
}
