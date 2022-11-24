import { useRouter } from "next/router"

export const useLogout = () => {
  localStorage.removeItem('loggedStatusVariable')
  localStorage.removeItem('loggedUserId')
  const router = useRouter()
  router.push('/')
}
