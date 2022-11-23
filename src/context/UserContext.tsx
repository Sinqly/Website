import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../config/Axios'
import { User } from '../utils/UserInterface'

interface UserContextData {
  loggedStatus?: boolean
  UserInfo?: User
}

interface Props {
  children?: React.ReactNode
}

const UserContext = createContext({} as UserContextData)

export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [loggedStatus, setLoggedStatus] = useState<boolean>()
  const [loggedUserId, setLoggedUserId] = useState<string | null>()
  const [UserInfo, setUserInfo] = useState<User>()

  const Run = useCallback(async () => {
    console.log(loggedUserId)
    const GetUserInfo = await api
      .get(`users/${loggedUserId}`)
      .then((response) => {
        return response.data
      })
    setUserInfo(GetUserInfo)
  }, [loggedUserId])

  useEffect(() => {
    const status = localStorage.getItem('loggedStatusVariable')
    const loggedUserIdData = localStorage.getItem('loggedUserId')
    setLoggedUserId(loggedUserIdData)
    setLoggedStatus(!!status)
    if (loggedUserId == null) {
      console.log(loggedUserId)
    } else {
      Run()
    }
  }, [Run, loggedUserId])

  useEffect(() => {
    if (!!loggedStatus === true) setLoggedStatus(true)
    else if (!!loggedStatus === false || !!loggedStatus === null)
      setLoggedStatus(false)
  }, [loggedStatus])

  const handleSetloggedStatus = useCallback((newStatus: boolean) => {
    setLoggedStatus(newStatus)
  }, [])

  return (
    <UserContext.Provider value={{ loggedStatus, UserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
