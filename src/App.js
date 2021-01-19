import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Game from './Game';
import Spinner from './Spinner';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/game">Board</Link>
                        </li>
                        <li>
                            <Link to="/spinner">Spinner</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/spinner">
                        <Spinner />
                    </Route>
                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
