import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './Interview-questions/6-custom-filter/styles/styles-custom.css'
import './index.css'
import { Providers } from './providers/Providers.tsx'
// import './Interview-questions/5-context-and-performance/styles/context-global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)
