import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
