import { request } from "./http.js"
// 列表  根据/admin/article?articleId= 获取文章的详情信息
export const getList = (params) => {
  return request('/api/admin/article',  {
    method: 'GET',
    params
  })
}

export const getComment = (params) => {
  return request('/api/admin/comment',  {
    method: 'GET',
    params
  })
}
// 添加评论
export const addComments = (data) => {
  return request('/api/admin/addComment',  {
    method: 'POST',
    data
  })
}


// 获取所有标签的接口
export const getTagsList = (params) => {
  return request('/api/admin/getTags', {
    method: 'GET',
    params
  })
}
export const getCategoryList = params => {
  return request('/api/admin/categoryList', {
    method: 'GET',
    params
  })
}
export const createArticle = (data) => {
  return request('/api/admin/create', {
    method: 'POST',
    data
  })
}
export const updateArticle = (data) => {
  return request('/api/admin/updateArticle', {
    method: 'POST',
    data
  })
}


export const addTagPost = (data) => {
  return request('/api/admin/addTag', {
    method: 'POST',
    data
  })
}