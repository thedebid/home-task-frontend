import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Home from "./components/Home/home";
import AddProduct from "./components/Product/addProduct";
import { NavBar } from "./components/Nav/nav";
import ViewProduct from "./components/Product/viewProduct";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem("isLoggedIn") ? (
          <>
            {/* <NavBar /> */}
            <Component {...routeProps}></Component>
          </>
        ) : (
          <Redirect to="/login"></Redirect>
        )
      }
    ></Route>
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <>
          {/* <NavBar /> */}
          <Component {...routeProps}></Component>
        </>
      )}
    ></Route>
  );
};

export const AppRouting = (props) => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <PublicRoute exact path="/" component={Home}></PublicRoute>
          <PublicRoute path="/login" component={Login}></PublicRoute>
          <PublicRoute path="/register" component={Register}></PublicRoute>
          <ProtectedRoute
            path="/addProduct"
            component={AddProduct}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/viewProduct"
            component={ViewProduct}
          ></ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
};
