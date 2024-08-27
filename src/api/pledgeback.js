import { getRequest } from "../lib/axios";

export function pledgeBackPayCoin(data){
    return getRequest('/api/pc/pledgeback/paycoin',data)
}