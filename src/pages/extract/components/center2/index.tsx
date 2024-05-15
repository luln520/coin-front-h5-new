import { Card, Divider, Popup, Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function Center({
  userInfo,
  tbhandle,
  coinList,
  addressList,
}) {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [num, setNum] = useState(10);
  const [visible, setVisible] = useState(false);
  const { t: translate } = useTranslation();
  let cid = 0;

  //点击回调提前处理
  const callBack = () => {
    if (!(address && num > 0)) {
      Toast.show({ content: translate(getText("请输入正确信息")) });
      return;
    }
    tbhandle({ cid, num, address });
    setTimeout(() => {
      setNum("");
      setAddress("");
    }, 500);
  };

  useEffect(() => {
    cid = coinList[0]?.id;
  });
  return (
    <>
      <div className="extractCenter-1">
        <div className="extractCenter-2">{translate(getText("提款金額"))}</div>
        <div className="extractCenter-3">
          <div className="extractCenter-4">
            <div className="extractCenter-5">
              <div className="extractCenter-6">
                <input
                  type="number"
                  id="tbnum"
                  onChange={(e) => {
                    setNum(parseInt(e.target.value));
                  }}
                  value={num}
                  name="tbnum"
                  step="1"
                  min="1"
                  placeholder={translate(getText("請輸入提款金額"))}
                  className="extractCenter-7"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="extractCenter-8">
          <span className="extractCenter-9">
            {translate(getText("賬戶餘額"))}：{userInfo?.usdt}
          </span>
          <span
            className="extractCenter-10"
            onClick={() => {
              setNum(userInfo?.usdt);
            }}
          >
            {translate(getText("全部轉移"))}
          </span>
        </div>
        <div role="separator" className="extractCenter-11"></div>
        <div
          role="button"
          className="extractCenter-12"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="extractCenter-13">
            <span className="extractCenter-14">
              {translate(getText("撤回至："))}
            </span>
          </div>
          <div className="extractCenter-15">
            <span className="extractCenter-16">
              {address ? address : translate(getText("選擇錢包地址"))}
            </span>
          </div>
          <i className="extractCenter-17"></i>
        </div>
        <div
          style={{
            marginTop: 10,
            textAlign: "center",
          }}
        ></div>
        <div className="extractCenter-25">
          <button className="extractCenter-26" onClick={callBack}>
            <div className="extractCenter-27">
              <span className="extractCenter-28">
                {translate(getText("確認"))}
              </span>
            </div>
          </button>
        </div>
      </div>
      {/*  地址 */}
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "40vh", overflowY: "scroll" }}
      >
        {addressList.map((data) => (
          <div
            onClick={() => {
              setAddress(data.addr);
              setVisible(false);
            }}
          >
            <div
              className="addressList-6"
              style={{
                height: "auto",
              }}
            >
              <div className="addressList-7">
                <div className="addressList-8">
                  <div className="addressList-9">
                    <span className="addressList-10">{data.czline}</span>
                    <span className="addressList-11">{data.addr}</span>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </Popup>
    </>
  );
}
