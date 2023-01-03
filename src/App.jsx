import { Route, Routes } from 'react-router-dom'
import { PageNotFound } from './components'
import Layout from './components/Layout'
import { About, Contact, Home, User } from './pages'

function App() {

 

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/user' element={<User />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
