/**
 * Created by Nick on 2016/12/29.
 */
// import {win} from 'sdk/window'
import qs from 'qs'
import axios from '@mfs/sec-sign-axios'
/**
* @function request
* @param  {object} config {请求参数}
* @return {object} {description}
* @see {@link https://github.com/mzabriskie/axios}
*/

export const request = (config) => {
  return axios.request(config)
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
* @function parseUrl
* @param  {string} url {要解析的串，空则使用location.href}
* @return {object} {{uri, hash, params}}
*/
export const parseUrl = (url) => {
  url = url || window.location.href
  const decoder = (v) => {
    return window.decodeURIComponent(v)
  }
  let parts = url.split('?')
  let uri = parts[0]
  let [query, hash] = parts[1] ? parts[1].split('#') : ['', '']
  let params = qs.parse(query, {decoder})

  return {uri, hash, params}
}
/**
* @function buildQuery
* @param  {object} params     {参数对象}
* @param  {string} url = null {初始url串，null则使用location.href, ''则只返回query串}
* @return {string} {url}
*/
export const buildQuery = (params, url = null) => {
  let argUrl = url
  const encoder = (v) => {
    return window.encodeURIComponent(v)
  }
  if (url == null) {
    url = window.location.href
  } else if (argUrl === '') {
    return qs.stringify(params, {encoder})
  }

  let urlObj = parseUrl(url)
  params = Object.assign(urlObj.params, params)
  let query = qs.stringify(params, {encoder})
  let newUrl = urlObj.uri
  if (query) {
    newUrl = newUrl + '?' + query
  }
  if (urlObj.hash) {
    newUrl = newUrl + '#' + urlObj.hash
  }

  return newUrl
}