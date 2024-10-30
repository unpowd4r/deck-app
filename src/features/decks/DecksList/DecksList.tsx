import { useEffect } from 'react'
import { decksApi } from '../decks-api'
import { setDecksAC } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from './../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'

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

export const DecksList = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksApi.getDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((d) => (
        <DeckItem key={d.id} deck={d} />
      ))}
    </ul>
  )
}
