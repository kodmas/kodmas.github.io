import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mx-auto p-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
