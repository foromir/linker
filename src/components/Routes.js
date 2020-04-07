import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

import { withRouter } from "react-router-dom";

const Routes = ({ history }) => {
  const path = history.location.pathname;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, [history, path]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

// Modal.propTypes = {
//   open: PropTypes.bool,
//   close: PropTypes.func,
//   children: PropTypes.node
// };

export default withRouter(Routes);
