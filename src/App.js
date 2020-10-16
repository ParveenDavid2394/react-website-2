import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/ServicesPage/Services';
import Products from './components/pages/ProductsPage/Products';
import SignUp from './components/pages/SignUpPage/SignUp';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
