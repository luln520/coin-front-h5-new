import './index.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import Content from './components/content'
export default function repayment() {


    const navigate = useNavigate();
    const { t: translate } = useTranslation();
    return (
      <div className="page">
        <TopBar title={translate(getText("還幣"))} isBack={true} />
        <Content />
      </div>
    );
}