/**
 * 统一接口请求request方法
 */

import Cookies from 'js-cookie'
import { request as httpRequest, parseQuery } from './http'

const getCommonParam = () => {
  const param = {}
  const queryParams = parseQuery()
  if (queryParams.fromSource) {
    param.fromSource = queryParams.fromSource
  }
  return param
}

const getCommonHeader = () => {
  const headers = {}
  return headers
}

export const getRejection = (rejection) => {
  let rj = {
    data: {
      code: 999,
      msg: '网络不给力，重试一下吧～'
    },
    status: 999,
    statusText: '网络错误',
    config: {},
    headers: {}
  }
  console.log('response', rejection.response)
  if (rejection.response) {
    rj = rejection.response
  } else {
    // 用默认错误，并把config拿进来
    rj.config = rejection.config
  }
  // 发生错误，服务端返回404，500一个html串
  if (typeof rj.data !== 'object') {
    rj.data = { code: 998, msg: '出错了，重试一下吧～' }
  }
  return rj
}



/**
* @function request
* @param  {object} config {请求数据}
* @description as请求通用处理
* 通用请求参数
*/
export const request = async ({ url, data, method = 'get', params = {}, timeout, flags, apiUrl }) => {
  const headers = getCommonHeader()
  const commonParams = getCommonParam()
  timeout = timeout || 10000
  const allParams = Object.assign({}, commonParams, params)
  const config = {
    url,
    method,
    data,
    headers,
    timeout,
    params: allParams,
  }
  const successFun = function (res) {
    if (res.data && res.data.code && res.data.msg !== undefined) {
      return Promise.reject(res)
    } else {
      return Promise.resolve(res.data)
    }
  }
  const failFun = function (rejection) {
    console.log('request rej', rejection)
    const rj = getRejection(rejection)
    console.log('rj', rj)
    if (rj.status === 401) { // 鉴权
      // TODO 重新登录
    } 
    return Promise.reject(getRejection(rejection))
  }

  return httpRequest(config).then(successFun, failFun)
}
