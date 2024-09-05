
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


/* Import Components */
/* Import Components */
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FullStack from './components/FullStack';
import DataVisualization2 from './components/DataVisualization2';
import WebApps from './components/WebApps';


function App() {
  return (
    <div className="App">
     <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/fullStack" component={FullStack} />
      <Route path="/dataVisualization2" component={DataVisualization2} />
      <Route path="/WebApps" component={WebApps} />
    </div>
  </Router>,
    </div>
  );
}

export default App;
