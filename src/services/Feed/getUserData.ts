import { api } from '../../config/Axios'

export async function getCurrentUserFeedId() {
  const id = localStorage.getItem('currentUserFeedId')
  const data = await api.get(`/users/${id}`)
  return data.data
}
