import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ClassRoom from './ClassRoom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClassRoom><App /></ClassRoom>
  </React.StrictMode>,
)
