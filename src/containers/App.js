import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import {data} from './data';
import BookArray from '../components/BookArray';
import Add from '../components/Add';
import ScrollBar from '../components/ScrollBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books : data
    };
  }

  callBackforChild = (event) => {
    event.preventDefault();
    console.log("Child Callback in parent");
    console.log(event);
  }

  render() {
    const bookList = this.state.books;
    return (
      <Router>
      <div className="tc">
        <h1 className='f1'>My Library</h1>
        <ul className='f2 b mr4' style={{listStyle: 'none', textAlign: 'right'}}>
        <li><Link to={'/Add'} childcallback={this.callBackforChild}>Add a Book</Link></li>
        <li><Link to={'/'}>Hide</Link></li>
        </ul>
        <hr />
        <Route exact path={'/Add'} component={Add} /> 
        <Route exact path={'/App'} component={App} />   
          
        <ScrollBar>
          <BookArray books={this.state.books}/>
        </ScrollBar>
      </div>
      </Router>
    );
  }
}

export default App;
