import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
