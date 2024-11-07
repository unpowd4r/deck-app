import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { clearErrorAC } from '../app-reducer'
import { useAppDispatch, useAppSelector } from '../store'

export const GlobalError = () => {
  const errorMessage = useAppSelector((state) => state.app.error)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearErrorAC())
    }
  }, [errorMessage, dispatch])

  return <ToastContainer theme="dark" autoClose={3000} />
}
