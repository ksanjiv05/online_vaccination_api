import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/Pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Pages/Dashboard";
import ContactUs from "./components/Pages/ContactUs";
import Login from "./Authantication/Login";
import Register from "./Authantication/Register";
import Profile from "./components/dashboard/Profile";
import ChangePassword from "./components/dashboard/ChangePassword";

function App() {
  //return <Index />;
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/*  render={() => <About title="About" />} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Register} />
          {/* <Route
            exact
            path="/dashboard/profile"
            render={() => (
              <Dashboard>
                <Profile />
              </Dashboard>
            )}
          /> */}
          {/* <Route
            path="/dashboard/changepwd"
            render={() => (
              <Dashboard comp={<ChangePassword value="change pwd" />} />
            )}
          /> */}
          {/* <Route
            path="/dashboard/reminder"
            component={Dashboard(ChangePassword)}
          /> */}

          <NotFound />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
