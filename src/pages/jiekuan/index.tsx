import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { jiekuanApi } from "../../api/jiekuan-api";
import { newsApi } from "../../api/news-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function JieKuan() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const uid = localStorage.getItem("uid");
  const [loading,setLoading] = useState(false)

  //申请
  const add = async (sendData) => {
    setLoading(true)
    const data = await jiekuanApi.add({ ...sendData, uid });
    Toast.show({ 
      content: data.msg,
      duration:1000,
      afterClose(){
        setLoading(false)
        navigate("/mycenter");
      }
    });
  };
  return (
    <div
      className="page"
      style={{
        backgroundColor: "white",
      }}
    >
      <CenterPage add={add} loading={loading}/>
    </div>
  );
}
