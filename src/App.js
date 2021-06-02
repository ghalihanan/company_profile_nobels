import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home, Login, NotFound } from "./screens";
import { About } from "./screens";
import { Navbar } from "./components";
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
    </ChakraProvider>
  );
}

export default App;
