import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={SharedLayout} >
            <Route index Component={Home} />
            <Route path='about_us' Component={AboutUs} />
            <Route path='products' Component={Products} />
            <Route path='contact_us' Component={Contact} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App