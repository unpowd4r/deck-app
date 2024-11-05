import { Dispatch } from 'redux'
import { decksApi } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'
import { useAppDispatch } from '../../app/store'

export const fetchDecksThunk = (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckThunk = (name: string) => (dispatch: Dispatch) => {
  decksApi.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
