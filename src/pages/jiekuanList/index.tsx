import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { jiekuanApi } from "../../api/jiekuan-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function JieKuanList() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const uid = localStorage.getItem("uid");
  const [list, setlist] = useState([] as any[]);

  //加载数 据
  const loadData = async () => {
    const data = await jiekuanApi.list({ uid });
    if (data.ok) {
      setlist(data.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("借款記錄"))} isBack={true} />
      <CenterPage list={list} />
    </div>
  );
}
