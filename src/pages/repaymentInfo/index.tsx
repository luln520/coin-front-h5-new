

import './index.css'
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import { useEffect, useState } from 'react';
import { pledgeInfo } from '../../api/pledge';
import { getLabel, PledgeListStatus } from '../../utils/dict';
export default function repaymentList() {

    const navigate = useNavigate();
    const { t: translate } = useTranslation();
    const params = useParams();
    const [field,setField] = useState({})

    const getField = () => {
        pledgeInfo({
            orderNo:params.id
        }).then(res => {
            setField(res.data)
        })
    }

    useEffect(() => {
        getField()
    }, [])

    return (
        <div className='page'>
            <TopBar title={translate(getText("借幣明細"))} isBack={true} />
            <div className='item-info'>
                <label>{translate(getText('訂單編號'))}</label>
                <div>{field?.orderNo}</div>
            </div>
            <div className='item-info'>
                <label>{translate(getText('貨幣'))}</label>
                <div>USDT</div>
            </div>
            <div className='item-info'>
                <label>{translate(getText('邀請碼'))}</label>
                <div>{field.code}</div>
            </div>
            <div className='item-info'>
                <label>{translate(getText('邀請人驗證碼'))}</label>
                <div>{field.invite}</div>
            </div>
            <div className='item-info'>
                <label>{translate(getText('借幣數量'))}</label>
                <div>{field.num}</div>
            </div>
            <div className='item-info'>
                <label>{translate(getText('時間'))}</label>
                <div>{field.createTime}</div>
            </div>
            <div className='item-info'>
                <label></label>
                <div>{translate(getText(getLabel(PledgeListStatus,field.status)))}</div>
            </div>
            {/* {field.status == 3 && (
                <div className='container' onClick={() => navigate(`/repayment/${field.orderNo}/${field.num}`)}>
                    <div className='btn'>{translate(getText('還幣'))}</div>
                </div>
            )} */}
        </div>
    )
}