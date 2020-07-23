import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './pages/cards';
import Home from './pages/home';

const App = () => {
    return (
        // <Home/>
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route
                    path={`${process.env.PUBLIC_URL}/cards`}
                    exact
                    component={Cards}
                />
            </Switch>
        </Router>
    );
};

export default App;
