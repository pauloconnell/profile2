import logo from './logo.svg';
import './App.css';
const React = require("react");
const ReactDOM = require("react-dom");
const Route = require("react-router-dom").Route;
const BrowserRouter = require("react-router-dom").BrowserRouter;
const hashHistory = require("react-router-dom").hashHistory;
const bootstrap = require("bootstrap/dist/css/bootstrap.css");

/* Import Components */
const Header = require("./components/Header");

const Home = require("./components/Home");
const About = require("./components/About");
const Contact = require("./components/Contact");
const FullStack = require("./components/FullStack");
const DataVisualization2 = require("./components/DataVisualization2");
const WebApps = require("./components/WebApps");

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/fullStack" component={FullStack} />
      <Route path="/dataVisualization2" component={DataVisualization2} />
      <Route path="/WebApps" component={WebApps} />
    </div>
  </BrowserRouter>,
    </div>
  );
}

export default App;
