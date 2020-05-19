import qs from 'qs'
import axios from 'axios'
/**
* @function request
* @param  {object} config {请求参数}
* @return {object} {description}
* @see {@link https://github.com/mzabriskie/axios}
*/

export const request = (url, options = {}, baseUrl = 'http://localhost:3000') => {
  const params = options.params || {}
  return axios(url, Object.assign(options, { params, withCredentials: true}))
    .then((response) => {
      const data = response.data
      // 登陆失效码
      if (data.errno === 9999) {
        // 登录接口
      }
      return response.data
    })
}






/**
* @function parseUrl
* @param  {string} url {要解析的串，空则使用location.href}
* @return {object} {{uri, hash, params}}
*/
export const parseUrl = (url) => {
  url = url || window.location.href
  const decoder = (v) => {
    return window.decodeURIComponent(v)
  }
  const parts = url.split('?')
  const uri = parts[0]
  const [query, hash] = parts[1] ? parts[1].split('#') : ['', '']
  const params = qs.parse(query, { decoder })
  return { uri, hash, params }
}
/**
* @function parseQuery
* @param  {string} url {要解析的串，空则使用location.href}
* @return {object} {参数对象}
*/
export const parseQuery = (url) => {
  return parseUrl(url).params
}


/**
* @function buildQuery
* @param  {object} params     {参数对象}
* @param  {string} url = null {初始url串，null则使用location.href, ''则只返回query串}
* @return {string} {url}
*/
export const buildQuery = (params, url = null) => {
  const argUrl = url
  const encoder = (v) => {
    return window.encodeURIComponent(v)
  }
  if (url == null) {
    url = window.location.href
  } else if (argUrl === '') {
    return qs.stringify(params, { encoder })
  }

  const urlObj = parseUrl(url)
  params = Object.assign(urlObj.params, params)
  const query = qs.stringify(params, { encoder })
  let newUrl = urlObj.uri
  if (query) {
    newUrl = newUrl + '?' + query
  }
  if (urlObj.hash) {
    newUrl = newUrl + '#' + urlObj.hash
  }

  return newUrl
}