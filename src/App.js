import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home, Login, About, NotFound } from "./screens";
import { Navbar } from "./components";


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
