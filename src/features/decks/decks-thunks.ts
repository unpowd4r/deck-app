import { Dispatch } from 'redux'
import { setAppStatusAC } from '../../app/app-reducer.ts'
import { handleServerAppError, handleServerNetworkError } from '../../common/utils/handle-error.ts'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    return decksAPI
      .fetchDecks()
      .then((res) => {
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setDecksAC(res.data.items))
      })
      .catch((error) => {
        let errorMessage = error.response?.data?.errorMessages[0]?.message || error.message
        handleServerNetworkError(errorMessage, dispatch)
      })
  } catch (e: any) {
    let errorMessage = e.message
    handleServerAppError(errorMessage, dispatch)
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    return decksAPI
      .addDeck(name)
      .then((res) => {
        dispatch(setAppStatusAC('succeeded'))
        dispatch(addDeckAC(res.data))
      })
      .catch((error) => {
        let errorMessage = error.response?.data?.errorMessages[0]?.message || error.message
        handleServerNetworkError(errorMessage, dispatch)
      })
  } catch (e: any) {
    let errorMessage = e.message
    handleServerAppError(errorMessage, dispatch)
  }
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    return decksAPI
      .deleteDeck(id)
      .then((res) => {
        dispatch(setAppStatusAC('succeeded'))
        dispatch(deleteDeckAC(res.data.id))
      })
      .catch((error) => {
        let errorMessage = error.response?.data?.errorMessages[0]?.message || error.message
        handleServerNetworkError(errorMessage, dispatch)
      })
  } catch (e: any) {
    let errorMessage = e.message
    handleServerAppError(errorMessage, dispatch)
  }
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    return decksAPI
      .updateDeck(params)
      .then((res) => {
        dispatch(setAppStatusAC('succeeded'))
        dispatch(updateDeckAC(res.data))
      })
      .catch((error) => {
        let errorMessage = error.response?.data?.errorMessages[0]?.message || error.message
        handleServerNetworkError(errorMessage, dispatch)
      })
  } catch (e: any) {
    let errorMessage = e.message
    handleServerAppError(errorMessage, dispatch)
  }
}
