import { Empty } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function MingLing({ hyorders, nowTab, closeorder }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const tab = nowTab.toUpperCase() + "/USDT";

  const getNode = () => {
    hyorders = hyorders.filter((data) => data.coinname === tab);
    hyorders = hyorders.filter((data) => data.status === 1);
    const nodes = [];
    for (let index = 0; index < hyorders.length; index++) {
      const data = hyorders[index];
      const node = (
        // <div
        //   className="mingxi-3"
        //   onClick={() => {
        //     const sendData = {
        //       id: data.id,
        //       coinname: data.coinname,
        //       num: data.num,
        //       ploss: data.ploss,
        //       buytime: data.buytime,
        //       status: data.status,
        //     };
        //     navigate(
        //       `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
        //     );
        //   }}
        // >
        //   <div className="mingxi-4">
        //     <span className="mingxi-5">
        //       <span className={data.hyzd === 1 ? "mingxi-6" : "mingxi-26"}>
        //         {data.hyzd === 1
        //           ? translate(getText("借多"))
        //           : translate(getText("空"))}
        //         <div className="mingxi-7">
        //           {data.hyzd === 1 && (
        //             <img
        //               alt=""
        //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAyCAYAAAA3OHc2AAAACXBIWXMAAAsSAAALEgHS3X78AAADkklEQVR4nOWb33EaMRDGP2d8z0kHoYMkFRgqiGcoANwAcSqIXYHhGgh+z41xBSEVBDpICeGZBzKCvVhm76+klTR33wwznluGk37e+1ZawcXhcECXlWTpOwBrAB8CTXP0hl3qmPbj2V8AQwDbUDPrPGREALoXkBEYdG8gIyDoXkFGINC9g4wAoHsJGS+gpwB2LOhYvYWME+gNZbQo6CCQkywdsIuB5AO0d8i0A1slWbqhv2PRW6lxhMjkOW1x1UuB/sje4VF0/7XkHb1CTrJUFZqJdum9mmCSpdfszX7GkwMWy2L4hEwTmrPAaYJPSZbesojseI62JQ0YviDThJY1E3pIsnTJrsqNZ01Pkrh8ZfJdw1bjRLoghmh9ikMmv/3CAuWSLogr371lUci0HjaxAJGCSHZ0xQLCks5km8LitCAS4AkLeJAY5CRL544eS+uCmGTpXSjASiJnfPSYP7GAnVTHbEiNnTZjUWvz7yzgT+7P+Cx8uE6tC6Ig4EcAn5r2OyTsQnKB37ggJlk6lAK8H8+mbRpLTiE79OEq1RZEyvYVC9jrCDj/lKagnUGmzGmzHrZVYUEU7Ee8ApyLQA+qTlmcFD7aRf3x0Qco0C8A16ogUj3Y+AKsq2In6azweWm0lOiKfHooNI77OsCoOTe0zmRag35jgW7oZj+eMUuqktbdy3eWIyvIlD0/WaCngHVpO0xzu9D+Y221pTXmo+m9PcgKME72Mc3naJzJSZauDZotC9X2zHdtkVqNNeBzGUE2gKPWkWoBzzI/gm2vLueAYQLZwIf/L7FY5OUzYwAtAhhtIZMPb1oc23zdj2dF53pMvg41SyQGGAY7vmVDwMfi1hQwPH6bp0CigNEGMvUKPrMA14JakhsWqZEGmi3ohSQOGE3tgh7l3yzwWqXFra0qtqgu5QUwmkBu6MO1xa2thEF7A4yGkFc1NtG4uJnI8dncztTKbFTpyTU+3Lq4mUjfOVkqCGBUQSYffmCBk4yLm4kI9L3FRwQDjDK7qPBhZ8XNRIablqCAUZHJ8wLAqrgNQgHGKaOVP9+wQLmCA0ZRJhdky46aOqLe20YNd4dRAMY55ILBb8kegg/0XAVj1RUNYOiQC9ali/14VnoiHIMI9PJsLR0VYJx5cn6crwY5ih0wirfh0QFGDln7mcEzFTfR31C4lHaA+RwjYKWLyx+L/Isg85iKW5d0CeCW+g7RZUAnBOAfLm/NBmxuvUcAAAAASUVORK5CYII="
        //               className="mingxi-8"
        //             />
        //           )}
        //           {data.hyzd === 2 && (
        //             <img
        //               alt=""
        //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAyCAYAAADY+hwIAAAACXBIWXMAAAsSAAALEgHS3X78AAADuUlEQVR4nO2a0W3bMBCG/wR9TzdoN2gAD9B0gmiDqED1nk5QZ4Imz36IM0HUCeq+V4izgbuBPUEKRieHCUWFpO5IJs4HFChMI6A+/bojae39Pf42B3A+qWdLvMHOvpILoG6K6vRNLz97d3d3aIqqBHAJ4BeAclLP1i/pImj+h5N6ll1I7gWjnaQqFScANgCKST1bGN/OEC0ciqtJPStzmuW+9n91928BHAD43RTVufHtzKA5XmqzOqGgZMM2wWgnfAhgQZJBwsscG6D2xPWRTZIfCYb5yIFKxnRSz7JIdFNU76kx2+R2ZCHZEAx7Ov5QbU7WAEmuesI+GYP9JJe8b3zSourxvyeffQawaoqqML4dgQC5yKEm9yYYD/X4xhhouaCyESXNNJe5p1ydZEm2CkZ7YSrJP42BligNsKfxhpKkxA0KRnuBNYBjY+CB71INkFFuhwrFUUzJLoJV7VMp/WAMPsCejp7VDBdRJdua3BaayHONjbUBCsoF1fEFBUecZxOsXfRQPdYZ1QCbopoC+GEM8BMlyc6C4VaPO4IaoGX9LYm45GdLxBPKnvVxH+oxvPE5Ak0gFzHKhVeC0Yo4UodBxoCdwQYYuIHgRizJvgkGHWOeGQN2rA0wE7mQTLJ3gjuaolqQPB+2DZBhdyYBa5LVDRsjWN3tVcAm4JZOw84ZNxCcsEimnjIPFoywevxSuKW+sQpwoh+nfvGuwToB9ViSDePfVmVrSWXMGa2nbFdDowSjlTyllUIqlNiv6rFmlnxAjc9Jsq1hjxZMFMwX58qG6uWcNjXcvyo7SbbJBZdgx/MKblSd/KjvFpVoSjMng5Lp82WfXDAmuKvHF8aADFe2Th9Tsnacaj1pHLWK6KMpKuvdZOKM6v4gQlvvriQtHc+qx60iLEjV4/tm5iIXbZJLSjonXZJL1x8C2BOMNj1K8rUxEM42OQFzSXGI1CGSYJWemrEeG83Mk+6NpSSICEYrmePCrM3MYx5rWiMnkSwmmBhTj1UzY3nTM6VkUcG0l/d9H8GrmXnMZZ1iQySdYN96vN2ZGSM8c1kJbKkHERdMTB0ez7HNzAn6+9EkRxFMj2c5cFGjm5nnfJYBpSsIkXWwDcv7Dk47s4jz4URmHWyDamu3uxJpZgHz4T63eERUwcQpnR+LNTMfntx0dqKWiBwReMFQJ26JyA1huffsrOAYcrGrgrWfeMRfG9g5wTHlYtcED/04KcXOCE71HtxOCE75kuGrF5z6Dc53xievD3Vypo5M1b+4AKv/EpPm2Egx498AAAAASUVORK5CYII="
        //               className="mingxi-8"
        //             />
        //           )}
        //         </div>
        //       </span>
        //       <br className="mingxi-9" />
        //       <h5 className="mingxi-10">{data.coinname}</h5>
        //     </span>
        //   </div>
        //   <div className="mingxi-11">
        //     <span className="mingxi-12">
        //       {data.isWin === 1 ? data.ploss : -data.ploss}
        //     </span>
        //   </div>
        //   <div className="mingxi-13">
        //     <span className="mingxi-14">
        //       <span className="mingxi-15">
        //         {translate(getText("投資金額"))}
        //         <br className="mingxi-16" />
        //         {data.num}
        //       </span>
        //     </span>
        //     <br className="mingxi-17" />
        //     <span className="mingxi-18">
        //       {translate(getText("開盤價"))} <br className="mingxi-19" />
        //       {data.buyprice}
        //     </span>
        //     <br className="mingxi-20" />
        //     <span className="mingxi-21">
        //       {translate(getText("收盤價"))}
        //       <br className="mingxi-22" />
        //       {data.sellprice}
        //     </span>
        //   </div>
        // </div>
        <div
          className="listTitleCell-1"
          onClick={() => {
            const sendData = {
              orderNo: data.orderNo,
              coinname: data.coinname,
              num: data.num,
              ploss: data.ploss,
              buytime: data.buytime,
              status: data.status,
            };
            navigate(
              `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
            );
          }}
        >
          <div className="listTitleCell-2">
            <div className="listTitleCell-3">
              <span className="listTitleCell-4">
                {data.hyzd === 1
                  ? translate(getText("買多"))
                  : translate(getText("買空"))}
                /{data.buyprice}
              </span>
              <span className="listTitleCell-5">{data.num.toFixed(4)}</span>
              {/* <span className="listTitleCell-6">
                0.00
              </span> */}
              <span className="listTitleCell-6">
                <button
                  className="pingcang"
                  onClick={(e) => {
                    closeorder(data.id);
                    e.stopPropagation();
                  }}
                >
                  {translate(getText("平仓"))}
                </button>
              </span>
            </div>
          </div>
        </div>
      );
      nodes.push(node);
    }
    //判断空
    if (nodes.length === 0) {
      nodes.push(<Empty description={translate(getText("暂无更多了"))} />);
    } else {
      nodes.push(
        <div className="levermingling-44">
          {translate(getText("暂无更多了"))}
        </div>
      );
    }
    return nodes;
  };
  return (
    <div role="tabpanel" id="mingling" className="levermingling-1">
      <div className="listTitle-1">
        <div className="listTitle-2">
          <div className="listTitle-3">
            <span className="listTitle-4">
              {translate(getText("方向"))}/{translate(getText("持仓价"))}
            </span>
            <span className="listTitle-5">{translate(getText("數量"))}</span>
            {/* <span className="listTitle-6">{translate(getText("盈亏"))}</span> */}
            <span className="listTitle-6">{translate(getText("平仓"))}</span>
          </div>
        </div>
      </div>
      <div className="levermingling-2">{getNode()}</div>
    </div>
  );
}
