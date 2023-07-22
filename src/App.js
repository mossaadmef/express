import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkingHours from './components/WorkingHours';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles/Navbar.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <WorkingHours>
          <>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
          </>
        </WorkingHours>
      </div>
    </Router>
  );
};

export default App;
