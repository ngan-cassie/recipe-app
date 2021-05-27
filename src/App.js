import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Homepage";
import Recipes from "./pages/Recipes";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* nav bar displayed in every page */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            {/* error page: no path set up */}
            <Route component={Default} />
            <Recipes />
            <Default />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
