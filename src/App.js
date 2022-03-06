import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import Footer from './components/Footer';
import Team from './components/team/Team';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Sidebar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/developers' component={Team} />
          <Route path='/projects' component={Product} />
          <Route path='/contact-us' component={SignUp} />
        </Switch>
      <Submenu />
      <Footer />
      </Router>
    </>
  );
}

export default App;
