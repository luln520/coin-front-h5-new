import React, { Component, useEffect } from "react";
import pako from "pako";
//BrowserRouter没有#   HashRouter 有#
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";
import Address from "../pages/address";
import ChangePassword from "../pages/changePassword";
import ChangePayPassword from "../pages/changePayPassword";
import Chat from "../pages/chat";
import Extract from "../pages/extract";
import Help from "../pages/help";
import HelpInfo from "../pages/helpInfo";
import Idcard from "../pages/idcard";
import IdcardCenter from "../pages/idcardCenter";
import LockUp from "../pages/lockUp";
import LockUpCenter from "../pages/lockUpCenter";
import LockUpInfo from "../pages/lockUpInfo";
import LockUpOrder from "../pages/lockUpOrder";
import Login from "../pages/login";
import Market from "../pages/market";
import MarketOrderInfo from "../pages/marketOrderInfo";
import My from "../pages/my";
import News from "../pages/news";
import NewsInfo from "../pages/newsInfo";
import Noice from "../pages/noice";
import Property from "../pages/property";
import Recharge from "../pages/recharge";
import Register from "../pages/register";
import Setting from "../pages/setting";
import Trade from "../pages/trade";
import TradingRecord from "../pages/tradingRecord";
import Lever from "../pages/lever";
import { useState, createContext, useContext } from "react";
import { homeApi } from "../api/home-api";
import Downland from "../pages/download";
import DownlandInfo from "../pages/downloadInfo";
import ReloadPassword from "../pages/reloadPassword";
import SecurityCenter from "../pages/securityCenter";
import C2CckInfo from "../pages/c2cckinfo";
import C2CckList from "../pages/c2cckList";
import C2CckImage from "../pages/c2cckImage";
import C2Ctx from "../pages/c2ctx";
import C2CtkList from "../pages/c2ctkList";
import MurmurChat from "../pages/murmurChat";
import { onlineApi } from "../api/online-api";
import JYJL from "../pages/jyjlCenter";
import JYJLLever from "../pages/jyjlLever";
import JYJLTrade from "../pages/jyjlTrade";
import RechargeList from "../pages/rechargelist";
import ExtractList from "../pages/extractlist";
export const WSContext = createContext([] as any[]);
export const LoginContext = createContext([] as any[]);
export const LoginMsgContext = createContext([] as any[]);
export const NoLoginMsgContext = createContext([] as any[]);

export default function AppRouter() {
  const [login, setLogin] = useState(false);
  const [loginmsg, setloginmsg] = useState({} as any);
  const [nologinmsg, setnologinmsg] = useState({} as any);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const reader = new FileReader();
  let WS = null;
  let timer: any;
  const [coinListData, setCoinListData] = useState({} as any);
  let coinListDataMap = {} as any;
  const postKData = {};
  //开始链接 wss
  const startWS = () => {
    WS = new WebSocket("wss://api.huobi.pro/ws");
    WS.onopen = () => {
      console.info("链接打开");
      for (const key in postKData) {
        WS.send(JSON.stringify(postKData[key])); //实时
      }
    };
    WS.onclose = () => {
      console.info("链接关闭");
    };
    WS.onmessage = async (event) => {
      reader.onload = (e) => {
        let ploydata = new Uint8Array(e.target?.result as ArrayBufferLike);
        let msg = pako.inflate(ploydata, { to: "string" });
        handleData(msg);
      };
      try {
        reader.readAsArrayBuffer(event.data);
      } catch (e) {}
    };
    WS.onerror = () => {
      console.info("链接失败");
    };
  };

  // 发送响应信息
  const sendHeartMessage = (ping) => {
    WS?.send(JSON.stringify({ pong: ping }));
  };

  //关闭WSS
  const closeWS = () => {
    WS?.close();
  };

  //处理响应数据
  const handleData = (msg: string) => {
    let data = JSON.parse(msg);
    if (data.ping) {
      // 如果是 ping 消息
      sendHeartMessage(data.ping);
    } else if (data.status === "ok") {
      //历史数据
    } else {
      //eos/bch/eth
      const datat = data.tick;
      for (let key in postKData) {
        key = key.substring(0, key.length - 1);
        if (data.ch === `market.${key}usdt.kline.1day`) {
          coinListDataMap = { ...coinListDataMap, [key]: datat };
          setCoinListData(coinListDataMap);
        }
      }
    }
  };

  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setCtmarketlist(data.data.records);
      const list = data.data.records;
      list.sort((d, e) => d.sort - e.sort);
      let postKDataTemp = {};
      for (const ctmarket of list) {
        if (ctmarket.status == 1) {
          coinListDataMap[ctmarket.coinname] = {};
          postKData[ctmarket.coinname + "K"] = {
            name: ctmarket.coinname,
            sub: `market.${ctmarket.coinname}usdt.kline.1day`,
          };
        }
      }
      setCoinListData(coinListDataMap);
    }
  };

  const loaduserMsgData = async () => {
    let uid = localStorage.getItem("uid");
    uid = uid ? uid : 0;
    const data = await onlineApi.userMsg({ uid });
    if (data.ok) {
      setloginmsg(data.data?.data);
    }
  };
  const loaduserUuidMsgData = async () => {
    let uuid = localStorage.getItem("murmur");
    uuid = uuid ? uuid : 0;
    const data = await onlineApi.userUuidMsg({ uuid });
    if (data.ok) {
      setnologinmsg(data.data?.data);
    }
  };
  const getElement = (element) => {
    //关键信息
    const uid = localStorage.getItem("uid");
    const userCode = localStorage.getItem("userCode");
    const companyId = localStorage.getItem("companyId");
    if (uid && userCode && companyId) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      loaduserMsgData();
      loaduserUuidMsgData();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    loadctmarketlistData().then(() => {
      startWS();
    });
    return () => {
      closeWS();
    };
  }, []);
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      setLogin(true);
    }
  }, []);
  return (
    <WSContext.Provider value={[coinListData, setCoinListData]}>
      <LoginContext.Provider value={[login, setLogin]}>
        <LoginMsgContext.Provider value={[loginmsg, setloginmsg]}>
          <NoLoginMsgContext.Provider value={[nologinmsg, setnologinmsg]}>
            <BrowserRouter>
              <ScrollToTop>
                <Routes>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route
                    path="/reloadPassword"
                    element={<ReloadPassword />}
                  ></Route>
                  <Route path="/homecenter" element={<News />}></Route>
                  <Route path="/" element={<News />}></Route>
                  <Route path="/mycenter" element={getElement(<My />)}></Route>
                  <Route
                    path="/propertycenter"
                    element={getElement(<Property />)}
                  ></Route>
                  <Route
                    path="/trade/:name"
                    element={getElement(<Trade />)}
                  ></Route>
                  <Route
                    path="/lever/:name"
                    element={getElement(<Lever />)}
                  ></Route>
                  <Route
                    path="/market"
                    element={getElement(<Market />)}
                  ></Route>
                  <Route
                    path="/newInfo/:id"
                    element={getElement(<NewsInfo />)}
                  ></Route>
                  <Route
                    path="/idcard"
                    element={getElement(<Idcard />)}
                  ></Route>
                  <Route
                    path="/idcardCenter"
                    element={getElement(<IdcardCenter />)}
                  ></Route>
                  <Route
                    path="/setting"
                    element={getElement(<Setting />)}
                  ></Route>
                  <Route
                    path="/c2cckList"
                    element={getElement(<C2CckList />)}
                  ></Route>
                  <Route
                    path="/c2ctkList"
                    element={getElement(<C2CtkList />)}
                  ></Route>
                  <Route
                    path="/c2cckinfo/:orderNo"
                    element={getElement(<C2CckInfo />)}
                  ></Route>
                  <Route
                    path="/c2cckimage/:orderNo"
                    element={getElement(<C2CckImage />)}
                  ></Route>
                  <Route
                    path="/c2ctx/:currencyId"
                    element={getElement(<C2Ctx />)}
                  ></Route>
                  <Route path="/download" element={<Downland />}></Route>
                  <Route
                    path="/downloadInfo"
                    element={<DownlandInfo />}
                  ></Route>
                  <Route
                    path="/changePassword"
                    element={getElement(<ChangePassword />)}
                  ></Route>
                  <Route
                    path="/changePayPassword"
                    element={getElement(<ChangePayPassword />)}
                  ></Route>
                  <Route path="/help" element={getElement(<Help />)}></Route>
                  <Route path="/jyjl" element={getElement(<JYJL />)}></Route>
                  <Route
                    path="/jyjlLever"
                    element={getElement(<JYJLLever />)}
                  ></Route>
                  <Route
                    path="/jyjlTrade"
                    element={getElement(<JYJLTrade />)}
                  ></Route>
                  <Route
                    path="/helpInfo/:id"
                    element={getElement(<HelpInfo />)}
                  ></Route>
                  <Route path="/noice" element={getElement(<Noice />)}></Route>
                  <Route path="/chat" element={getElement(<Chat />)}></Route>
                  <Route path="/murmurChat" element={<MurmurChat />}></Route>
                  <Route
                    path="/lockUpCenter"
                    element={getElement(<LockUpCenter />)}
                  ></Route>
                  <Route
                    path="/lockUp"
                    element={getElement(<LockUp />)}
                  ></Route>
                  <Route
                    path="/lockUpInfo/:id"
                    element={getElement(<LockUpInfo />)}
                  ></Route>
                  <Route
                    path="/lockUpOrder"
                    element={getElement(<LockUpOrder />)}
                  ></Route>
                  <Route
                    path="/marketOrderInfo/:id"
                    element={getElement(<MarketOrderInfo />)}
                  ></Route>
                  <Route
                    path="/recharge/:id"
                    element={getElement(<Recharge />)}
                  ></Route>
                  <Route
                    path="/rechargelist"
                    element={getElement(<RechargeList />)}
                  ></Route>
                  <Route
                    path="/securitycenter"
                    element={getElement(<SecurityCenter />)}
                  ></Route>

                  <Route
                    path="/extract/:id"
                    element={getElement(<Extract />)}
                  ></Route>
                   <Route
                    path="/extractlist"
                    element={getElement(<ExtractList />)}
                  ></Route>
                  <Route
                    path="/tradingRecord/:type"
                    element={getElement(<TradingRecord />)}
                  ></Route>
                  <Route
                    path="/address"
                    element={getElement(<Address />)}
                  ></Route>

                  {/* 40 4 */}
                  <Route
                    path="*"
                    element={getElement(<Navigate to="/homecenter" />)}
                  ></Route>
                </Routes>
              </ScrollToTop>
            </BrowserRouter>
          </NoLoginMsgContext.Provider>
        </LoginMsgContext.Provider>
      </LoginContext.Provider>
    </WSContext.Provider>
  );
}
