import { DeckItem } from './DecksList/DecksList'

const initialState = {
  decks: [] as DeckItem[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS ':
      return {
        ...state,
        decks: action.decks,
      }

    default:
      return state
  }
}

export type SetDecksActionType = ReturnType<typeof setDecksAC>

type DecksActions = SetDecksActionType

export const setDecksAC = (decks: DeckItem[]) => {
  return { type: 'SET-DECKS ', decks } as const
}
