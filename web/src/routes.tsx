import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { Landing, TeacherList, TeacherForm, Login } from "./pages";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated: boolean = true;

  const routeComponent = (props: any) =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );

  return <Route {...rest} render={routeComponent} />;
};

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />

      <PrivateRoute path="/" exact component={Landing} />
      <PrivateRoute path="/study" component={TeacherList} />
      <PrivateRoute path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
