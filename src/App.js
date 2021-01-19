import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from 'react-router-dom';
import './App.css';
import Game from './Game';
import Spinner from './Spinner';

function App() {

    function PageNotFound() {
        let location = useLocation();
        return (
            <div>
                <h3>
                    No page found at <code>{location.pathname}</code>
                </h3>
                <h3>Please check and try again or return
                    <Link to="/">Home</Link>
                </h3>
            </div>
        );
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/game">Game</Link>
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
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
