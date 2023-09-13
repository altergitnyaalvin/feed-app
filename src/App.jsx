import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Layout from './layouts/Layout'
import Article from './pages/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Article />
    </Layout>
  )
}

export default App
