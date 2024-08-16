
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { getText } from "../../../utils/util";
import { pledgeInfo,pledgeBack } from "../../../api/pledge";
import { useEffect, useState } from "react";
import { financeApi } from "../../../api/finance-api";
import { Toast } from "antd-mobile";
export default function Content() {

    const uid = localStorage.getItem("uid");
    const navigate = useNavigate();
    const { t: translate } = useTranslation();
    const param = useParams()
    const [num,setNum] = useState(0)
    const [balance,setBalance] = useState(0)

    const getField = () => {
        pledgeInfo({orderNo:param.id}).then(resp=>{
            setNum(resp.data.num)
        })
        financeApi.userCoin({
            uid:uid
        }).then(resp=>{
            setBalance(resp.data.usdt)
        })
    }

    useEffect(() => {
        console.log(param)
        getField()
    }, [])

    const submit = () => {
        pledgeBack({
            orderNo:param.id,
            num:num
        }).then(resp=>{
            Toast.show({
                content:translate(getText('還幣成功')),
                duration: 1,
                afterClose: () => {
                    navigate('/repaymentList')
                }
            })
        })
    }

    return (
        <div className='container-content'>
            <div className='search-box'>
                <img src="data:image/jpeg;base64,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" />
                <span>USDT</span>
                <span>{translate(getText('還幣'))}</span>
            </div>
            <div className='form-item'>
                <div className='form-item-label'>{translate(getText('還幣數量'))}(USDT)</div>
                <div className='form-item-input'>
                    <input placeholder={translate(getText("請輸入還幣數量"))} readOnly value={num}/>
                </div>
            </div>
            <div className='balance'>{balance} USDT</div>
            <div className="expect-fee">{translate(getText("預計到帳數量"))}：{num} USDT</div>
            <div className='btn' onClick={()=>{submit()}}>{translate(getText("提交"))}</div>
        </div>
    )
}