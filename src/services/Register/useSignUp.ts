import { api } from '../../config/Axios'

const config = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'Token',
    'Access-Control-Allow-Origin': '*',
  },
}

export function UseSignUpPost() {
  const firstDataObject = JSON.parse(
    localStorage.getItem('registerFirstData') || '{}'
  )
  const secondDataObject = JSON.parse(
    localStorage.getItem('registerSecondData') || '{}'
  )

  const imgUrl = JSON.parse(localStorage.getItem('imgURLActual') || '{}')
  const ImgObject = {
    profileImage: imgUrl,
  }

  const data = Object.assign(firstDataObject, secondDataObject)
  const finalData = Object.assign(data, ImgObject)

  return api.post(`users`, finalData, config).then(
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
