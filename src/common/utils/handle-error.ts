import { Dispatch } from 'redux'
import { setAppErrorAC, setAppStatusAC } from '../../app/app-reducer'

export const handleServerNetworkError = (error: string, dispatch: Dispatch) => {
  dispatch(setAppErrorAC(error))
  dispatch(setAppStatusAC('failed'))
}

export const handleServerAppError = (error: string, dispatch: Dispatch) => {
  dispatch(setAppErrorAC(error))
  dispatch(setAppStatusAC('failed'))
}
