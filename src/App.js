import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cards from './pages/cards';
import Home from './pages/home';

const App = () => {
    return (
        // <Home/>
        <Router basename={process.env.PUBLIC_URL}>
            <Route path='/' exact component={Home} />
            <Route path='/cards' exact component={Cards} />
        </Router>
    );
};

export default App;
