import { api } from '../../config/Axios'

var config = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'Token',
    'Access-Control-Allow-Origin': '*',
  },
}

export function useSignUpPost() {
  const firstDataObject = JSON.parse(
    localStorage.getItem('registerFirstData') || '{}'
  )
  const secondDataObject = JSON.parse(
    localStorage.getItem('registerSecondData') || '{}'
  )

  const data = Object.assign(firstDataObject, secondDataObject)

  console.log(data)

  return api.post(`users`, data, config).then(
    (response) => {
      localStorage.setItem('loggedStatusVariable', JSON.stringify(true))
      localStorage.setItem('loggedUserId', JSON.stringify(response.data.id))
      return response
    },
    (error) => {
      return error
    }
  )
}
