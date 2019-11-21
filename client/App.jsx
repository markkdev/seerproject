import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Verification from './pages/Verification';
import Confirmation from './pages/Confirmation';
import './constants/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/verify" component={Verification} />
          <Route exact path="/confirmed" component={Confirmation} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {};

export default App;
