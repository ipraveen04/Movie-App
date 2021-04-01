import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
