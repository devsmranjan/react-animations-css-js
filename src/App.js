import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cards from './pages/cards';
import Home from './pages/home';

const App = () => {
    // console.log(this.state);
    console.log('This is the process.env', process.env.PUBLIC_URL);

    return (
        // <Home/>
        <Router>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/cards'} component={Cards} />
        </Router>
    );
};

export default App;

// "homepage": "https://devsmranjan.github.io/react-animations-css-js",
