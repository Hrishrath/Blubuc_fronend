import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() && isAuthenticated().user.role == 1 ? (
          <Component {...props} />
        ) : isAuthenticated().user.role != 1 ?
        (  <>
            {alert("You are not Authorized")}
             <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
           />
        </>
          ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;