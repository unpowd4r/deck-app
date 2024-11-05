import { DeckItems } from './decks-api'

const initialState = {
  decks: [] as DeckItems[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {
        ...state,
        decks: action.decks,
      }

    case 'ADD-DECK':
      console.log({
        ...state,
        decks: [...state.decks, action.deck],
      })
      return {
        ...state,
        decks: [...state.decks, action.deck],
      }

    default:
      return state
  }
}

export type SetDecksActionType = ReturnType<typeof setDecksAC>
export type AddDecksActionType = ReturnType<typeof addDeckAC>

type DecksActions = SetDecksActionType | AddDecksActionType

export const setDecksAC = (decks: DeckItems[]) => {
  return { type: 'SET-DECKS', decks } as const
}

export const addDeckAC = (deck: DeckItems) => {
  return { type: 'ADD-DECK', deck } as const
}
