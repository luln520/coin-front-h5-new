import { getRequest, postRequest } from '../lib/axios';

export function pledgeList(data){
    return getRequest('/api/pc/pledge/pledgeList',data)
}
export function pledgeBack(data){
    return getRequest('/api/pc/pledge/backpledge',data)
}
export function pledgeInfo(data){
    return getRequest('/api/pc/pledge/info',data)
}

export function pledgeLng(data){
    return getRequest('/api/pc/pledge/pledgIng',data)
}