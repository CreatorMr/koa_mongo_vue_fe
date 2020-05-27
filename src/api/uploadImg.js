import { request } from "./http.js"

export const uploadImg = (formData) => {
  return request('/api/uploadImg/uploadImg',  {
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
  })
}