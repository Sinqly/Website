export function useLogout() {
  localStorage.removeItem('loggedStatusVariable')
  localStorage.removeItem('loggedUserId')
}
