import React, { Component } from 'react';
import { Route, Link, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Topics from "./pages/Topics";

class App extends Component {
  render() {
    return(
    <HashRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pages/About">About</Link></li>
        <li><Link to="/pages/Topics">Topics</Link></li>
      </ul>
      <hr/>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/pages/About" component={About} />
      <Route path="pages/Topics" component={Topics}/>
    </div>
    </div>
  </HashRouter>
  );
  }
} 
export default App;
