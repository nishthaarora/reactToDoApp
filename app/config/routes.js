import React from 'react';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import toDoModel from '../components/toDoModel';
// import About from '../components/About'

module.exports = (
    <Router history={browserHistory}>
            <Route path="/" component={toDoModel} />
            {/*<Route path="about" component={About} />*/}
    </Router>
);
