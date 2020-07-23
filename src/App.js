import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cards from './pages/cards';
import Home from './pages/home';

function App() {
    return (
        <Router>
            <div>
                {
                    // <Navbar />
                    // <br />
                    // <Route path='/' exact component={ExercisesList} />
                    // <Route path='/edit/:id' exact component={EditExercises} />
                    // <Route path='/create' exact component={CreateExercise} />
                }
                <Route path='/' exact component={Home} />
                <Route path='/cards' exact component={Cards} />
            </div>
        </Router>
    );
}

export default App;
