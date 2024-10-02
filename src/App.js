
import React, { Suspense, lazy } from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



/* Import Components */
import Header from './components/Header';
import Home from './components/Home';
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const FullStack = lazy(() => import('./components/FullStack'));
const DataVisualization2 = lazy(() => import('./components/DataVisualization2'));
const WebApps = lazy(() => import('./components/WebApps'));

// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import FullStack from './components/FullStack';
// import DataVisualization2 from './components/DataVisualization2';
// import WebApps from './components/WebApps';


function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
          <Route path="/fullStack" element={<Suspense fallback={<div>Loading...</div>}><FullStack /></Suspense>} />
          <Route path="/dataVisualization2" element={<Suspense fallback={<div>Loading...</div>}><DataVisualization2 /></Suspense>} />
          <Route path="/WebApps" element={<Suspense fallback={<div>Loading...</div>}><WebApps /></Suspense>} />
        </Routes>
    
    
      </Router >
    </div>
  );
}

export default App;
