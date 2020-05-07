import { request } from "./http"


export const getList = (param) => {
  return request('/article/article',  {
    method: 'GET'
  })
}


// 添加评论
export const addComment = (data) => {
  return request('/admin/addComment',  {
    method: 'POST',
    data
  })
}

