import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';
import Hero from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Footer />
      
    </div>
  );
}



export default App;
