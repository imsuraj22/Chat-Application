import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import { AuthcontextProvider } from './context/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthcontextProvider>
    <App />
    </AuthcontextProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
