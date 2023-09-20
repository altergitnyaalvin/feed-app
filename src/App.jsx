import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Layout from './layouts/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Article from './pages/Articles/Article'
import ArticleContent from './pages/ArticleContent/ArticleContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/article/:id" element={<ArticleContent />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
