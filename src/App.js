import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Hero, LandingPage, Profile, NotFound } from "./pages";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const history = useHistory();

  useEffect(() => {}, [user]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (user ? <Redirect to="/landingpage" /> : <Hero />)}
          />
          <Route
            exact
            path="/landingpage"
            component={() => (!user ? <Redirect to="/" /> : <LandingPage />)}
          />
          <Route
            exact
            path="/profile"
            component={() => (!user ? <Redirect to="/" /> : <Profile />)}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
