import { useContext, useState } from 'react'
// import './App.css'
import Layout from './layouts/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home'
import Article from './pages/Article'
import Login from './pages/Login'
import PrivateRoute from './layouts/PrivateRoute'
import { AuthContext, AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/article/:id" element={<Article />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
