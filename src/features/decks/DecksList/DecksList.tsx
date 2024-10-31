import { useEffect } from 'react'
import { fetchDecksThunk } from '../decks-thunks'
import { useAppDispatch, useAppSelector } from './../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decksReducer.decks)

  useEffect(() => {
    dispatch(fetchDecksThunk)
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
