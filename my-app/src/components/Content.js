import React, { Component } from 'react';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
 import { BrowserRouter, Switch , Route } from 'react-router-dom'
 class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/profile'  component={Profile} />
          <Route exact path='/' component={Home} />
        </Switch>
        </BrowserRouter>
    );
  }
}
 export default Content;