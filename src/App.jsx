import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Footer from './components/Footer'; 
import './styles/App.css';
import './styles/Themes.css';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
