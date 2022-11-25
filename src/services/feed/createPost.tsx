import { api } from '../../config/Axios'

const config = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'Token',
    'Access-Control-Allow-Origin': '*',
  },
}

export const CreatePost = async (data) =>  {
  
  // const currentPostData =  JSON.parse(localStorage.getItem('currentPostData') || `{}`)

  
    
    console.log(data);
    
  return await api.post(`posts`, data)
    .then(res => res.data)
    .then(post => console.log(post))
    .then(() => window.location.reload())
}
