import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './Root';
import ErrorPage from './ErrorPage';
// import {Router, Route, Link, IndexRoute,  browserHistory, Switch } from 'react-router'

// import {Router, Route, Switch } from 'react-router'
// import registerServiceWorker from './registerServiceWorker';

// const app = document.getElementById('root');

//ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(<ErrorPage />, document.getElementById('root'));
// registerServiceWorker();
// ReactDOM.render(
//     <Router>
// <Switch>
//     <Route exact path="/" component={App} />
//     <Route exact path="/errorpage" component={ErrorPage} />
//   </Switch>
//   </Router>,
//   app);



ReactDOM.render(<Root />, document.getElementById('root'))

// ReactDOM.render(<ErrorPage />, document.getElementById('root'))