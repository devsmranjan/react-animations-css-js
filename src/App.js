import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './pages/cards';
import Home from './pages/home';

const App = () => {
    console.log(process.env.PUBLIC_URL);
    return (
        // <Home/>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route
                    path={`/cards`}
                    exact
                    component={Cards}
                />
            </Switch>
        </Router>
    );
};

export default App;

// "homepage": "https://devsmranjan.github.io/react-animations-css-js",
