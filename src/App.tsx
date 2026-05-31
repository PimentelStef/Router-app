import './App.css';
import { Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashBoardLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>

        <Route path="home" element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<Contact />} />

        <Route path="users" element={<Users />} />

        <Route path="users/:id" element={<UserPage />} />

        <Route path="search" element={<SearchPage />} />

      </Route>
    </Routes>
  );
}

export default App;