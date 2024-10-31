import axios from 'axios'

export type AddDeckParams = {
  name: string
}

export type Author = {
  id: string
  name: string
}

export type DeckItems = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string | null
  created: string
  updated: string
  cardsCount: number
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type DecksResponse = {
  items: DeckItems[]
  pagination: Pagination
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<DecksResponse>('/v2/decks')
  },
  addDeck(name: string) {
    const formData = new FormData()
    formData.append('name', name)

    return instance.post<DeckItems>('/v1/decks', formData)
  },
}
