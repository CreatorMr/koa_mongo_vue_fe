import { request } from "./http.js"

export const getList = (param) => {
  return request('/api/admin/article',  {
    method: 'GET',
    param
  })
}


// 添加评论
export const addComment = (data) => {
  return request('/api/admin/addComment',  {
    method: 'POST',
    data
  })
}


// 获取所有标签的接口
export const getTagsList = (data) => {
  return request('/api/admin/getTags', {
    method: 'POST',
    data
  })
}

