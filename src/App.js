
import React, { Suspense, lazy } from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



/* Import Components */
import Header from './components/header/Header';
import Home from './components/home/Home';
const About = lazy(() => import('./components/about/About'));
const Contact = lazy(() => import('./components/contact/Contact'));
const FullStack = lazy(() => import('./components/fullStack/FullStack'));
const DataVisualization2 = lazy(() => import('./components/dataVisualization/DataVisualization2'));
const WebApps = lazy(() => import('./components/webApps/WebApps'));



function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<div style={{display: 'flex', alignItems:'center'}}>Loading...</div>}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div class="text-center">Loading...</div>}><Contact /></Suspense>} />
          <Route path="/fullStack" element={<Suspense fallback={<div>Loading...</div>}><FullStack /></Suspense>} />
          <Route path="/dataVisualization2" element={<Suspense fallback={<div>Loading...</div>}><DataVisualization2 /></Suspense>} />
          <Route path="/WebApps" element={<Suspense fallback={<div>Loading...</div>}><WebApps /></Suspense>} />
        </Routes>
    
    
      </Router >
    </div>
  );
}

export default App;
