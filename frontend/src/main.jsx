import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
import { NotificationContextProvider } from './context/NotificationContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <SocketContextProvider>
    <NotificationContextProvider>
          <App />
          </NotificationContextProvider>
     </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
