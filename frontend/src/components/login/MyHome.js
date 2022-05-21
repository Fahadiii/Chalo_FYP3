import React, { Component } from "react";
import Login from "./Login";
import SignUp from "../signup/SignUp";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";
import Add from "../Add/Add";
import Tours from "../Tours/Tours";
import Edit from "../Edit/Edit";
import ViewTours from "../ViewTours//ViewTours";
import Tour from "../../pages/Tour";
import Tour2 from "../../pages/Tour2";
import Admin_portal from "../../pages/AdminPage/Admin_portal";
import User_portal from "../../pages/UserPage/User_portal";

import View_UserInfo from "../../pages/View_UserInfo/View_UserInfo";
import add_tour_guide from "../add_tour_guide/add_tour_guide";
import add_user from "../add_user/add_user";
import add_tour_company from "../add_tour_company/add_tour_company";
import add_package from "../add_package/add_package";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default class MyHome extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            <Route path="/home" exact component={HomePage}></Route>

            <Route path="/dashboard" exact component={Dashboard}></Route>

            <Route path="/contact" exact component={Contact}></Route>

            <Route path="/add" exact component={Add}></Route>

            <Route path="/login" exact component={LoginPage}></Route>

            <Route path="/signup" exact component={SignUp}></Route>

            <Route path="/edit" exact component={Edit}></Route>

            <Route path="/view" exact component={ViewTours}></Route>

            <Route path="/tour" exact component={Tour}></Route>
            <Route path="/tour2" exact component={Tour2}></Route>
            <Route path="/admin_portal" exact component={Admin_portal}></Route>
            <Route path="/User_portal" exact component={User_portal}></Route>

            <Route
              path="/View_UserInfo"
              exact
              component={View_UserInfo}
            ></Route>

            <Route
              path="/add_tour_guide"
              exact
              component={add_tour_guide}
            ></Route>

            <Route
              path="/add_tour_company"
              exact
              component={add_tour_company}
            ></Route>
            <Route path="/add_user" exact component={add_user}></Route>
            <Route path="/add_package" exact component={add_package}></Route>

            <PrivateRoute
              path="/tours"
              exact
              component={Tours}
              loggedIn={function () {
                console.log(localStorage.getItem("authToken"));
                if (localStorage.getItem("authToken")) {
                  return true;
                } else {
                  return false;
                }
              }}
            ></PrivateRoute>

            {/* <Route path="/signup" component={SignUp}></Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

//Authentication of Login
export const fakeAuth = {
  isAuthenticated: false,

  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <div className={"row justify-content-center  p-2"}>
//       {/* <label className={"text-black mr-5"}>You are now logged in...</label> */}

//       {/* <button
//         className={"btn btn-danger"}
//         onClick={() => {
//           fakeAuth.signOut(() => history.push("/home"));
//         }}
//       >
//         <i className="fa fa-send"></i>&nbsp; Sign out
//       </button> */}
//     </div>
//   ) : (
//     <div>
//       <p>You are not logged in.</p>
//       <button type={"button"} onClick={LoginPage()}>
//         Log in
//       </button>
//     </div>
//   );
// }

function PrivateRoute({ component: Comp, loggedIn, path, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? <Comp {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/tours" } };

  //here login is a callback function
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Login loginFunc={login} />
    </div>
  );
}
