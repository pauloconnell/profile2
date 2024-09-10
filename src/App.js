
import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fullStack" element={<FullStack />} />
            <Route path="/dataVisualization2" element={<DataVisualization2 />} />
            <Route path="/WebApps" element={<WebApps />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
