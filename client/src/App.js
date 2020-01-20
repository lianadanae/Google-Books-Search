import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Search from './pages/Search/Search.js';
import Saved from './pages/Saved/Saved.js';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          {/* <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} /> */}
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;