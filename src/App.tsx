import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import UserPage from './UserPage'
import DashBoardLayout from './DashBoardLayout'
import SearchPage from './SearchPage'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoardLayout />} >
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
