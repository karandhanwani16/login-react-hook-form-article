import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useState } from "react"
import Login from "./components/Login"
import AdminHome from "./components/AdminHome"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/" /> : <Login />
        } />
        <Route path="/" element={
          isLoggedIn ? <AdminHome /> : <Navigate to="/login" />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App