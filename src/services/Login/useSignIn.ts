import { api } from '../../config/Axios'
import { UserInfoSignIn } from '../../utils/Login/UserSign'

const config = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'Token',
    'Access-Control-Allow-Origin': '*',
  },
}

export function UseSignInPost(UserInfo: UserInfoSignIn) {
  const data = {
    email: UserInfo.email,
    password: UserInfo.password,
  }

  return api.post(`users/validation`, data, config).then(
    (response) => {
      localStorage.setItem(
        'loggedStatusVariable',
        JSON.stringify(response.data.status)
      )
      console.log(response.data)
      localStorage.setItem(
        'loggedUserId',
        JSON.stringify(response.data.user[0].id)
      )
      return response
    },
    (error) => {
      return error.response
    }
  )
}
