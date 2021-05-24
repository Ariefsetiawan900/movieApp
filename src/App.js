import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Hero, LandingPage, Profile, NotFound } from "./pages";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {}, [user]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/landingpage" component={LandingPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
