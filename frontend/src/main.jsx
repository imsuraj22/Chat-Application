import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthcontextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthcontextProvider>z
        <SocketContextProvider>
          <App />
        </SocketContextProvider>

      </AuthcontextProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
