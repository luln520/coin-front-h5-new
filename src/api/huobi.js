/**
 * 火币
 */
import axios from 'axios';
import { getRequest, postRequest } from '../lib/axios';

const smartAxios = axios.create({
  baseURL: 'https://api.huobi.pro',
});
export const huobiApi = {
  /**
   * 火币单价
   */
  getPrice: async (name) => {

    return await smartAxios.request({
      method: 'get',
      url: `/market/history/kline?period=1day&size=1&symbol=${name?.toLowerCase()}usdt`,
      params: {},
    }).then((res) => {
      return res?.data;
    });
  }
};
