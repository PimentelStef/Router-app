import './App.css';
import { Routes, Route } from 'react-router-dom';

import DashboardLayout from './DashBoardLayout';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import UserPage from './UserPage';
import SearchPage from './SearchPage';

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