import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Login from "../view/Login";
import NewsSandBox from "../view/SandBox";

const Approuter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={NewsSandBox}></Route>
        {/* <Route
          path="/"
          render={() => {
            localStorage.getItem("token") ? (
              <NewsSandBox></NewsSandBox>
            ) : (
              <Redirect to="/login" />
            );
          }}
        /> */}
      </Switch>
    </HashRouter>
  );
};
export default Approuter;
