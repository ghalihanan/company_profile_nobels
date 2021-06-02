import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, NotFound } from "./screens";
import { Navbar } from "./components";
import { Footer } from "./components";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
