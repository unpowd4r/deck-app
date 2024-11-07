import { useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  const [isLoading, setIsLoading] = useState(false)

  useLayoutEffect(() => {
    setIsLoading(true)
    dispatch(fetchDecksTC()).finally(() => setIsLoading(false))
  }, [dispatch])

  return {
    decks,
    isLoading,
  }
}
