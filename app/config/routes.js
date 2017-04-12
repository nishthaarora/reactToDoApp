import React from 'react';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import ToDoMain from '../components/ToDoMain';
import ToDoAbout from '../components/todoAbout';
import ToDoFunStuff from '../components/todoFunStuff';

module.exports = (
    <Router history={browserHistory}>
            <Route path="/" component={ToDoMain} />
            <Route path="about" component={ToDoAbout} />
            <Route path="funstuff" component={ToDoFunStuff} />
    </Router>
);
