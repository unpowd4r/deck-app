import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { Decks } from '../features/decks/Decks.tsx'
import './App.css'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'

export const App = () => {
  const status = useAppSelector((state) => state.app.status)
  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
