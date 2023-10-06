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
import AddArticle from './pages/AddArticle/AddArticle'
import {Provider} from 'react-redux'
import store from './redux/store'
import AddPost from './pages/AddPost'
import Pokemons from './pages/Pokemons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AuthProvider>
      <Provider store={store}>
        <Layout>
          {/* Routes -> Sebagai kumpulan Routing dalam satu aplikasi */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-article" element={<AddArticle />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/pokemon" element={<Pokemons />} />
            {/* <Route element={<PrivateRoute />}>
              <Route path="/article/:id" element={<Article />} />
            </Route> */}
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </Layout>
      </Provider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
