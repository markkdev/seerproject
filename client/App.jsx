import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import './constants/styles.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
};

App.propTypes = {};

export default App;
