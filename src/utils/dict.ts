// 状态（1 未申请，2 申请中，3.质押成功，4，质押失败 5.还款） ,
export const PledgeListStatus:any[] = [
    { value: 1, label: "未申请" },
    { value: 2, label: "申请中" },
    { value: 3, label: "质押成功" },
    { value: 4, label: "质押失败" },
    { value: 5, label: "已还款" },
]


export function getLabel( arr:any[],value:number | string) {
    return arr.find((item:any) => item.value === value)?.label
}