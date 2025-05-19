import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import App from './App.jsx'

import './index.css'
import { GenreProvider } from './contexts/GenreContext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <GenreProvider>
        <App />
      </GenreProvider>
    </BrowserRouter>
  </Provider>
)
