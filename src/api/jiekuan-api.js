/**
 * 借款
 */
import { getRequest, postRequest } from '../lib/axios';

export const jiekuanApi = {
  /**
   * 列表信息
   */
  list: (param) => {
    return getRequest('/api/pc/pledge/pledgeList', param);
  },
  /**
  * 单条信息
  */
  info: (param) => {
    return getRequest('/api/pc/pledge/info', param);
  },
  /**
  * 添加
  */
  add: (param) => {
    return postRequest('/api/pc/pledge/pledge', param);
  },
}
