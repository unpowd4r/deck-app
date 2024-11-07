import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { DecksList } from './DecksList/DecksList.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam animi iure? Aliquid inventore quo
        reprehenderit aliquam alias, deserunt tempore molestiae magni dolore! Sapiente illum quos, nobis sint blanditiis
        optio!
      </footer>
    </div>
  )
}
