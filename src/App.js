import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home";
import Login from './pages/Login'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/login" component={Login}  />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
