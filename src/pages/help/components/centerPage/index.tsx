import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { newsApi } from "../../../../api/news-api";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [helpList, setHelpList] = useState([] as any[]);
  const [index, setIndex] = useState(1);
  const lan = localStorage.getItem("i18n");
  const name = lan == "zh" ? "" : lan.charAt(0).toUpperCase() + lan.slice(1);
  const getNodes = () => {
    const nodes = [];
    for (let i = 0; i < helpList.length; i++) {
      const help = helpList[i];
      nodes.push(
        <div
          role="button"
          className="help-2"
          onClick={() => {
            navigate(`/helpInfo/${help.id}`);
          }}
        >
          <div className="help-3">
            <span className="help-4">{help[`type${name}`]}</span>
          </div>
          <i className="help-5"></i>
        </div>
      );
    }
    return nodes;
  };
  //加载数 据
  const loadData = async () => {
    const data = await newsApi.list();
    if (data.ok) {
      setHelpList(data.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return <div className="help-1">{getNodes()}</div>;
}
