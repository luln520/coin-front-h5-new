import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getText } from '../../../../utils/util'
import { financeApi } from '../../../../api/finance-api'
import { SpinLoading, Dialog } from 'antd-mobile'
import { ArrowLeftOutlined, FieldTimeOutlined, RightOutlined } from '@ant-design/icons'
import './index.css'
import { useState, useEffect } from 'react'
import { Dropdown } from 'antd'
import { Toast } from 'antd-mobile'
import { companyApi } from '../../../../api/company'

export default function CenterPage({ add, loading }) {
  const uid = localStorage.getItem('uid')
  const navigate = useNavigate()
  const { t: translate } = useTranslation()
  const lan = localStorage.getItem('i18n')
  const [isAggres, setisAggres] = useState(false)
  const [num, setNum] = useState(0)
  const [type, setType] = useState(1)
  const [code, setCode] = useState('code')
  const [invite, setInvite] = useState('')
  const [applicationAmount, setApplicationAmount] = useState(0)
  const [companyData, setCompanyData] = useState({} as any)

  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain()
    if (res.ok) {
      console.log('faith=============res.data', res.data)
      setCompanyData(res.data)
    }
  }

  const items = [
    {
      key: '1',
      label: <span>{translate(getText('活期利率'))}</span>
    }
    // {
    //   key: "2",
    //   label: <span>定期利率</span>,
    // },
  ]

  const LoanAgreementContent = ({ name, userId }) => {
    const agreementSections = [
      {
        title: translate(getText('协议签订方')),
        content: [
          translate(getText('本协议由以下各方签订:')),
          `${translate(getText('贷款人：'))}${name}${translate(getText('(本平台)'))}`,
          translate(getText(`借款人：(本平台)-ID${userId}`))
        ]
      },
      {
        title: translate(getText('一、贷款金额和期限')),
        content: [
          translate(getText('1. 借款人必须同意平台的条款和条件。')),
          translate(getText('2. 放款人同意向借款人提供USDT的贷款金额。')),
          translate(getText('3. 贷款期限为15天、30天或60天，从签署本协议之日起计算。在免息天数内，如果超过免息天数，将按照规定计息。')),
          translate(
            getText('4. 如果借款人未能在贷款期限内偿还全部本金，将按免息日后未偿还本金每天1%的利率计息。如果超过还款天数,将计入违约金。')
          )
        ]
      },
      {
        title: translate(getText('二、贷款目的')),
        content: [translate(getText('借款人同意仅将本协议项下的贷款用于加密货币交易。借款人不得将贷款用于加密货币活动以外的任何用途。'))]
      },
      {
        title: translate(getText('三、贷款条件')),
        content: [
          translate(getText('1. 借款人需要提供贷款交易账户中的加密货币资产作为抵押。')),
          translate(getText('2. 借款人需提供个人身份证件。')),
          translate(getText('3. 借款人必须提供一名近亲的姓名和联系电话。')),
          translate(getText('4. 借款人必须提供个人住址和银行对账单照片。')),
          translate(getText('5. 一旦获得批准,放款人会在30分钟内将贷款转入借款人的加密货币账户。')),
          translate(getText('6. 当借款人要偿还贷款时,必须通过个人外部钱包或交易所软件向指定的支付地址还款。')),
          translate(getText('注：在此期间,您交易账户的所有提现功能都将暂停,直到贷款全部还清,您的提现功能才会恢复。'))
        ]
      },
      {
        title: translate(getText('四、还款方式')),
        content: [
          translate(getText('1. 借款人应在贷款期满后全额偿还本金和利息。')),
          translate(getText('2. 借款人应在到期日之前全额偿还贷款本息。还款应直接支付给本平台。'))
        ]
      },
      {
        title: translate(getText('五、提前还款')),
        content: [translate(getText('借款人可提前偿还贷款,若违约,则必须支付所有适用的利息和滞纳金。'))]
      },
      {
        title: translate(getText('六、保密条款')),
        content: [
          translate(getText('1. 本协议签署后,除非获得另一方的书面同意或法律要求,否则任何一方不得向第三方披露本协议的内容。')),
          translate(getText('2. 但是，如果一方未能遵守协议，给另一方造成损失，则有必要披露协议的相关内容，以保护自己的权益。'))
        ]
      },
      {
        title: translate(getText('七、违约责任')),
        content: [
          translate(getText('1. 借款人未按本协议约定履行还款义务的,应承担违约责任，并按贷款人的要求进行赔偿。')),
          translate(getText('2. 借款人未在约定期限内按时还本付息的,应承担逾期违约责任，并按贷款人要求进行赔偿。'))
        ]
      },
      {
        title: translate(getText('八、违约条款')),
        content: [
          translate(
            getText(
              '1. 因借款人原因导致借款人不能按时履行还款义务的,除按贷款人要求承担违约责任外,还应承担违约责任,并按本协议规定进行赔偿。'
            )
          ),
          translate(getText('2. 因投资失败造成的经济损失由借款人承担,并在规定期限内偿还。')),
          translate(getText('3. 如果拒绝还款,您将收到我们法律团队的信函。')),
          translate(getText('4. (本平台)有权在不事先通知的情况下更改本协议,并保留最终解释权。'))
        ]
      }
    ]

    return (
      <div className='loan-agreement'>
        {agreementSections.map((section, index) => (
          <div key={index} className='agreement-section'>
            <h3 className='section-title'>{section.title}</h3>
            <div className='section-content'>
              {section.content.map((item, itemIndex) => (
                <p key={itemIndex} className='content-item'>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // 在Dialog中使用
  const showLoanAgreement = () => {
    Dialog.show({
      title: translate(getText('借币服务协议')),
      content: <LoanAgreementContent name={companyData.name} userId={localStorage.getItem('userCode')} />,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          text: translate(getText('我已阅读并同意')),
          primary: true
        }
      ]
    })
  }

  function getRandomString(length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const getCode = () => {
    let randomString = getRandomString(6)
    setCode(randomString)
  }

  const loadData = async () => {
    const data = await financeApi.userCoin({ uid }).then((resp) => {
      // setNum((Number(resp.data.usdt) * 0.8).toFixed(2));
      setApplicationAmount((Number(resp.data.usdt) * Number(localStorage.getItem('pledgeFee'))) / 100)
    })
    // if (data.ok) {

    // }
  }

  useEffect(() => {
    getCode()
    loadData()
    initCompany()
  }, [])

  return (
    <div className='jiekuanOutDiv'>
      <div className='jiekuanTopHeadDiv'>
        <ArrowLeftOutlined
          className='jiekuanTopHeadLeft'
          onClick={() => {
            navigate(-1)
          }}
        />
        <FieldTimeOutlined
          className='jiekuanTopHeadRight'
          onClick={() => {
            navigate('/jiekuanlist')
          }}
        />
      </div>
      <div className='jiekuanTopHeadTopFont'>{translate(getText('借款'))}</div>
      {/* 输入框 */}
      <Dropdown menu={{ items }}>
        <div className='jiekuanInputDiv'>
          <div className='jiekuanInputFontDiv'>
            <b>{translate(getText('借币类型'))}</b>
          </div>
          <div className='jiekuanInputBorderDiv'>
            <span className='jiekuanInputFont'>{translate(getText('活期利率'))}</span>
            <span className='jiekuanInputTagFont'>{translate(getText('低利率'))}</span>
            <RightOutlined className='jiekuanInputicon' />
          </div>
        </div>
      </Dropdown>

      {/* 借款输入 */}
      <div className='jiekuanInputDiv'>
        <div className='jiekuanInputFontDiv'>
          <b>{translate(getText('我想要借'))}</b>
        </div>
        <div className='jiekuanInputBorderDiv'>
          <img className='jiekuanInputiconimg' src='https://1.gqjys.co/imgs/upload/f5644127e8fb4edc95a3ab721e4d2bb6.png'></img>
          <div className='jiekuanInputFont'>USDT</div>
          <RightOutlined className='jiekuanInputicon2' />
          <span className='jiekuanInputcenterFont'>|</span>
          <span className='jiekuanInputcenterFontnum'>
            <input
              className='jiekuanInput'
              placeholder={translate(getText('请输入数量'))}
              value={num}
              onChange={(e) => {
                setNum(e.target.value)
              }}
            />
          </span>
        </div>
      </div>
      <div className='jiekuanInputDiv'>
        <div className='jiekuanInputFontDiv'>
          <b>
            {translate(getText('申请额度'))}: {applicationAmount} USDT
          </b>
        </div>
      </div>
      {/* <div className="jiekuanInputDiv">
        <div className="jiekuanInputFontDiv">
          <b>{translate(getText("抵押物数量"))}</b>
        </div>
        <div className="jiekuanInputBorderDiv">
          <img
            className="jiekuanInputiconimg"
            src="https://1.gqjys.co/imgs/upload/edd99b47b3894bea9030695d4da68120.png"
          ></img>
          <div className="jiekuanInputFont">BTC</div>
          <RightOutlined className="jiekuanInputicon2" />
          <span className="jiekuanInputcenterFont">|</span>
          <span className="jiekuanInputcenterFontnum">
            <b>0.21976</b>
          </span>
          <span className="jiekuanInputcenterFontnumMax">
            <b>{translate(getText("最大"))}</b>
          </span>
        </div>
      </div> */}
      {/* 资产数量 */}
      {/* <div
        style={{
          padding: "0 6px",
        }}
      >
        <div className="jiekuanzcDiv">
          <b>{translate(getText("您的资产仅有"))}0BNB</b>
        </div>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <div className="jiekuantsDiv">
          <b>{translate(getText("已抵押的BNB收益池资产将无法获得Launchpool奖励。"))}</b>
        </div>
      </div> */}
      {/* 明细 */}
      <div
        style={{
          height: '5px'
        }}></div>
      {/* <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("年利率"))}</b>
        <b className="jiekuanmxrightDiv">11.05%</b>
      </div>*/}
      <div className='jiekuanInputDiv'>
        <div className='jiekuanInputFontDiv'>
          <b>{translate(getText('担保人验证码'))}</b>
        </div>
        <div className='jiekuanInputBorderDiv'>
          <span className='jiekuanInputcenterFontnum'>
            <input
              className='jiekuanInput'
              placeholder={translate(getText('请输入担保人验证码'))}
              value={invite}
              onChange={(e) => {
                setInvite(e.target.value)
              }}
            />
          </span>
        </div>
      </div>
      <div className='jiekuanInputDiv'>
        <div className='jiekuanInputFontDiv'>
          <b>{translate(getText('邀请码'))}</b>
        </div>
        <div className='invite'>{code}</div>
      </div>
      {/* <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("预估小时利率"))}</b>
        <b className="jiekuanmxrightDiv">0.00126226 USDT</b>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("初始质押率"))}</b>
        <b className="jiekuanmxrightDiv">78%</b>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("借贷后质押率"))}</b>
        <b className="jiekuanmxrightDiv">78%</b>
      </div> */}
      <div
        style={{
          height: '160px'
        }}></div>
      {/* 底部 */}
      <div className='jiekuanbottomDiv'>
        <div className='jiekuanbottomCenterDiv'>
          <div className='jiekuandx-9'>
            <i
              onClick={() => {
                setisAggres(!isAggres)
              }}
              className={isAggres ? 'jiekuandx-10' : 'jiekuandx-14'}></i>
          </div>
          <div className='jiekuanbottomCenteragreeDiv'>
            <b>{translate(getText('您已阅读并同意'))}</b>
          </div>
          <div className='jiekuanbottomCenteragreexyDiv' onClick={showLoanAgreement}>
            <b>- {translate(getText('借币服务协议。'))}</b>
          </div>
          <div className='jiekuanbottomCenteragreexyDiv' onClick={showLoanAgreement}>
            <b>- {translate(getText('赚币服务协议。'))}</b>
          </div>
          <div
            className='jiekuanbottomCenteragreeqrDiv'
            onClick={() => {
              if (!isAggres) {
                Toast.show(translate(getText('请先同意协议！')))
                return
              }
              if (loading) {
                return
              }
              if (num <= 0) {
                return
              }
              add({
                num,
                type,
                code,
                invite
              })
            }}>
            {loading && <SpinLoading color='#ffffff' style={{ '--size': '20px', marginTop: '-20px', marginRight: '10px' }} />}
            {translate(getText('确认'))}
          </div>
        </div>
      </div>
    </div>
  )
}
