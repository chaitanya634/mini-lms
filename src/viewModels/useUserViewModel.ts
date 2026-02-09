import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../models/userSlice"
import { AppDispatch, RootState } from "../store"


interface UserViewModel {
  isLoading: boolean
  error?: string
  login: (username: string, password: string) => void
}

const useUserViewModel = (): UserViewModel => {
  const status = useSelector((state: RootState) => state.user.status)
  const error = useSelector((state: RootState) => state.user.error)
  const dispatch: AppDispatch = useDispatch()

  const isLoading = (status === 'loading' || status === 'idle')

  function login(username: string, password: string) {
    dispatch(loginUser({ username, password }))
  }

  return {
    isLoading, error, login
  }
}

export default useUserViewModel