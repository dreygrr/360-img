import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './home/home.tsx'
import { Footer } from './footer/footer.tsx'
// import { App } from './App.tsx'

import "./main.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>,
)
