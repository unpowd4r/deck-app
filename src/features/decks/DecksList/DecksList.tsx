import { DeckItem } from './DeckItem/DeckItem.tsx'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'
import s from './DecksList.module.css'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()

  return (
    <>
      <ul className={s.list}>
        {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} />}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>
  )
}
