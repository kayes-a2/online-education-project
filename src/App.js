////import components & external react node pakage
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFoud/NotFound";
import Service from "./Components/Service/Service";
import Support from "./Components/Support/Support";

function App() {
  return (
    //router path
    <div>
      <Router>
        <Header> </Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/course">
            <Service></Service>
          </Route>

          <Route path="/service">
            <Support></Support>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>

    </div>
  );
}
//component export
export default App;
