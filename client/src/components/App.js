import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import AddRecipe from './AddRecipe'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>            
            <Route exact path="/" component={Landing} />
            <Route exact path="/addrecipe" component={AddRecipe} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
