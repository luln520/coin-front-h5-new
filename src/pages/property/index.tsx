import "./index.css";
import { Cell, Dialog } from "react-vant";
import { Toast } from "antd-mobile";
import PropertyCenter from "./components/propertyCenter";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import MaoYi from "../trade/components/maoyi";
import { useEffect, useState } from "react";
import { financeApi } from "../../api/finance-api";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import C2CCK from "./components/c2cck";
import { c2cApi } from "../../api/c2c-api";
import C2CTk from "./components/c2ctk";
import { useNavigate } from "react-router-dom";
import C2CCKTS from "./components/c2cckts";
import C2CCKTS2 from "./components/c2cckts2";
import { currencyApi } from "../../api/currency-api";

export default function Property() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState([] as any[]);
  const [arealist, setarealist] = useState([] as any[]);
  const [currencylist, setcurrencylist] = useState([] as any[]);
  const [cklist, setcklist] = useState([] as any[]);
  const { t: translate } = useTranslation();
  const [qbSum, setQbSum] = useState({} as any);
  const [visibleCK, setVisibleCK] = useState(false);
  const [visibleCKTS, setVisibleCKTS] = useState(false);
  const [visibleCKTS2, setVisibleCKTS2] = useState(false);
  const [visibleTK, setVisibleTK] = useState(false);
  const [isShowZF, setIsShowZF] = useState(false);

  //c2c存款
  const [num, setNum] = useState("");
  const [currencyIdCK, setcurrencyIdCK] = useState(0);
  const [bankType, setbankType] = useState(0);
  //c2c 提款
  const [currencyIdTK, setcurrencyIdTK] = useState(0);

  //加载数 据
  const loadcklistData = async () => {
    const data = await c2cApi.czlist({ uid, type: 1 });
    if (data.ok) {
      setcklist(data.data);
      for (const item of data.data) {
        if (item.status == 1 || item.status == 4) {
          setIsShowZF(true);
          break;
        } else {
          setIsShowZF(false);
        }
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  //加载数 据
  const loadData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //加载数 据
  const loadCurrencyData = async () => {
    const data = await currencyApi.list({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setcurrencylist(data.data?.records);
    }
  };

  //加载数 据
  const loadAreaData = async () => {
    const data = await c2cApi.arealist();
    if (data.ok) {
      setarealist(data.data);
    }
  };
  //加载数 据
  const loadQbSumData = async () => {
    const data = await financeApi.qbSum({ uid });
    if (data.ok) {
      setQbSum(data.data);
    }
  };

  //c2c存款
  const c2cCz = async () => {
    let dataInfo = {
      uid,
      num,
      bankType,
      currenyId: currencyIdCK,
    };
    const data = await c2cApi.cz(dataInfo);
    if (data.ok) {
      Toast.show({ content: data.data });
      setNum("");
      setbankType(0);
      setcurrencyIdCK(0);
      setVisibleCK(false);
      setVisibleCKTS(true);
    } else {
      Toast.show({ content: data.msg });
    }
    loadcklistData();
  };

  useEffect(() => {
    loadData();
    loadQbSumData();
    loadAreaData();
    loadcklistData();
    loadCurrencyData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("資產"))} isBack={false} />
      <PropertyCenter
        userInfo={userInfo}
        qbSum={qbSum}
        setVisibleCK={setVisibleCK}
        setVisibleTK={setVisibleTK}
        setVisibleTK2={setVisibleCKTS2}
        isShowZF={isShowZF}
      />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={4} />
      {/* c2c存款 */}
      <Dialog
        visible={visibleCK}
        width="80vw"
        title={translate(getText("温馨提示"))}
        showCancelButton
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        onConfirm={() => {
          c2cCz();
        }}
        onCancel={() => setVisibleCK(false)}
      >
        <div className="Dialogc2cCZCenter">
          <C2CCK
            currencylist={currencylist}
            num={num}
            setNum={setNum}
            currencyId={currencyIdCK}
            setcurrencyId={setcurrencyIdCK}
            bankType={bankType}
            setbankType={setbankType}
          />
        </div>
      </Dialog>
      {/* 等待提示 */}
      <Dialog
        visible={visibleCKTS}
        showConfirmButton={true}
        closeOnClickOverlay={true}
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        onConfirm={() => {
          setVisibleCKTS(false);
        }}
      >
        <C2CCKTS />
      </Dialog>

      {/* 消息提示 */}
      <Dialog
        visible={visibleCKTS2}
        title={translate(getText("消息提示"))}
        showCancelButton
        confirmButtonColor="red"
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        onConfirm={() => {
          navigate("/c2cckList");
        }}
        onCancel={() => {
          setVisibleCKTS2(false);
        }}
      >
        <C2CCKTS2 />
      </Dialog>
      {/* c2c提现款 */}
      <Dialog
        visible={visibleTK}
        title={translate(getText("温馨提示"))}
        showCancelButton
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        onConfirm={() => {
          navigate(`/c2ctx/${currencyIdTK}T${bankType}`);
        }}
        onCancel={() => setVisibleTK(false)}
      >
        <C2CTk
          currencylist={currencylist}
          currencyId={currencyIdTK}
          setcurrencyId={setcurrencyIdTK}
          bankType={bankType}
          setbankType={setbankType}
        />
      </Dialog>
    </div>
  );
}
