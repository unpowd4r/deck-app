export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

export type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.payload.status }

    case 'SET_ERROR':
      return { ...state, error: action.payload.error }

    case 'CLEAR_ERROR':
      return { ...state, error: null }

    default:
      return state
  }
}

type ActionsType =
  | ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setAppErrorAC>
  | ReturnType<typeof clearErrorAC>

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: 'SET_STATUS',
    payload: { status },
  } as const
}

export const setAppErrorAC = (error: string | null) => {
  return {
    type: 'SET_ERROR',
    payload: { error },
  } as const
}

export const clearErrorAC = () => {
  return {
    type: 'CLEAR_ERROR',
  } as const
}
