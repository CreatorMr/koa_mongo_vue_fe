import { request } from "./http.js"

export const getUserInfo = (params) => {
  return request('/api/loginUser/info',  {
    method: 'GET',
    params
  })
}

export const register = (data) => {
  return request('/api/loginUser/register',  {
    method: 'POST',
    data
  })
}
export const login = (data) => {
  return request('/api/loginUser/login',  {
    method: 'POST',
    data
  })
}