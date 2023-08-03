import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import Signin from './pages/Signin.jsx'
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes
      >
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path={'/admin/*'}
        
        element={<AdminDashboard />} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
