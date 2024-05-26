import { Toast } from "antd-mobile";
import { Cell, Dialog } from "react-vant";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { coinApi } from "../../api/coin-api";
import { currencyApi } from "../../api/currency-api";
import { financeApi } from "../../api/finance-api";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";
import C2CCKTS from "./components/c2cckts";
import C2CCKTS2 from "./components/c2cckts2";
import C2CCK from "./components/c2cck";

export default function RechargeList() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
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
  const [coinList, setCoinList] = useState([] as any[]);
  //加载种类
  const loadCoinData = async () => {
    const data = await coinApi.list();
    if (data.ok) {
      //排序
      data.data.sort(function (a, b) {
        return a.sort - b.sort;
      });
      setCoinList(data.data);
    }
  };

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
    loadCoinData();
    loadData();
    loadQbSumData();
    loadAreaData();
    loadcklistData();
    loadCurrencyData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar2
        title={translate(getText("入金"))}
        isBack={true}
        mini={"充值明细"}
        miniClick={() => {
          navigate("/rechargeorderlist");
        }}
      />
      <CenterPage
        coinList={coinList}
        userInfo={userInfo}
        qbSum={qbSum}
        setVisibleCK={setVisibleCK}
        setVisibleTK={setVisibleTK}
        setVisibleTK2={setVisibleCKTS2}
        isShowZF={isShowZF}
      />
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
    </div>
  );
}
