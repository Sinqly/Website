export const useLogout = () => {
  localStorage.removeItem('loggedStatusVariable')
  localStorage.removeItem('loggedUserId')
  window.location.reload()
}
