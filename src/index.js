import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route } from 'react-router';
// import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// const taDa = () => (
// 	<div>taDa
// 	  <Link to='/about'>About</Link>
// 	</div>
// )
// const About = () => (
// 	<div>About
// 	  <Link to='/'>taDa</Link>
// 	</div>
// )

// ReactDOM.render(
// 	<BrowserRouter>
// 	  <div>
// 	    <Route path='/' component={taDa} />
// 	    <Route path='/about' component={About} />
// 	  </div>
// 	</BrowserRouter>, 
// 	document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();