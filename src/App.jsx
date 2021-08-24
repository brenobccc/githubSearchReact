import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchPage}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

