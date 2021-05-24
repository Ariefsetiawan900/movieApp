import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Hero, LandingPage, Profile } from "./pages";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {}, [user]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Switch>
            <Route exact path="/" component={Hero} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/landingpage" component={LandingPage} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
