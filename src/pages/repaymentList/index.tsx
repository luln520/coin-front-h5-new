
import './index.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import { DotLoading } from 'antd-mobile'
import { useEffect, useState } from 'react';
import { pledgeList } from '../../api/pledge';
import { getLabel,PledgeListStatus } from '../../utils/dict';
export default function repaymentList() {

    const navigate = useNavigate();
    const { t: translate } = useTranslation();
    const [loading,setLoading] = useState(false)
    const [dataList,setDataList] = useState([])
    const getData = () => {
        setLoading(true)
        pledgeList({
            page: 1,
            pageSize: 10,
            uid: localStorage.getItem("uid")
        }).then(res => {
            setDataList(res.data)
        }).finally(()=>{
            
            setLoading(false)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='page'>
            <TopBar title={translate(getText("還幣明细"))} isBack={true} />
            <div className='container'>
                
                {dataList.length > 0 ? dataList.map((item,index)=>(
                    <div className="item" key={index} onClick={()=>{navigate("/repaymentInfo/"+item.orderNo)}}>
                        <div>
                            <div className='item-number'>{item.num} USDT</div>
                            <div className='item-time'>{item.createTime}</div>
                        </div>
                        <div className='item-status'>{translate(getText(getLabel(PledgeListStatus,item.status)))}</div>
                    </div>
                )) : null }
                {loading && (
                <div className='loading'>
                    <DotLoading />
                </div>
                ) }
            </div>
        </div>
    )
}