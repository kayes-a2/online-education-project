import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFoud/NotFound";
import Service from "./Components/Service/Service";

function App() {
  return (
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

          <Route path="/service">
            <Service></Service>
          </Route>

          <Route path="/details">
            <Details></Details>
          </Route>

          <Route path="/about">
            <About></About>
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

export default App;
