import ReactDOM from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { App } from './app/App.tsx'
import { store } from './app/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <SkeletonTheme baseColor="#293747" highlightColor="#17212D">
      <App />
    </SkeletonTheme>
  </Provider>
)
