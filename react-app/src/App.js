import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import UserProfile from "./components/UserProfile";
import Gmap from "./components/Maps/Map.js";
import LocationList from './components/Location/Location.js';
import LocationView from './components/Location/LocationView.js';
import { authenticate } from "./services/auth";
import { setUser } from "./store/session"
import "./components/NavBar/Navbar.css"

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(setUser(user))
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar className="nav" setAuthenticated={setAuthenticated} authenticated={authenticated} />
      {loaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
          </Route>
          <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
            <UserProfile />
          </ProtectedRoute>
          <Route path='/map'>
            <Gmap />
          </Route>
          <Route path="/locations" exact={true}>
            <LocationList />
          </Route>
          <Route path="/locations/:locationId" exact={true}>
            <LocationView />
          </Route>

        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
