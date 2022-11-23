import { api } from '../../config/Axios'

export async function getUserData() {
  const id = localStorage.getItem('loggedUserId')
  const data = await api.get(`/users/${id}`)
  return data.data
}
