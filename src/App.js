import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
