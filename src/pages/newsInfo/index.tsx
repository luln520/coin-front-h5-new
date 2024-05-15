import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../../components/topBar";
import NewsInfoContent from "./components/content";
import NewsInfoImg from "./components/image";
import { newsApi } from "../../api/news-api";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";

export default function NewsInfo() {
  const navigate = useNavigate();
  const [newsInfo,setNewsInfo]=useState();
  const params = useParams();
  const { t: translate } = useTranslation();
  const loadNewsInfo=async()=>{
    const data= await newsApi.findType({id:params?.id});
    if(data.ok){
      setNewsInfo(data.data);
    }
  }
  useEffect(()=>{
    loadNewsInfo();
  },[]);
  return (
    <div className="page">
      <TopBar title={translate(getText("消息"))} isBack={true} />
      <NewsInfoImg newsInfo={newsInfo} />
      <NewsInfoContent  newsInfo={newsInfo}/>
    </div>
  );
}
