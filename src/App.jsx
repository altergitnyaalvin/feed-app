import { useState } from 'react'
// import './App.css'
import Layout from './layouts/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home'
import Article from './pages/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
