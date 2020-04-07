import React, { Fragment} from "react";

import { BrowserRouter as Router, } from "react-router-dom";

import Routes from "./components/Routes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="container">
          <Routes />
        </div>
        <div className="footer">
          <div className="container">
            <div className="footer-copyright">
              © 2020 Box. All rights reserved. Handmade in Switzerland
            </div>
            <button className="btn link">Contact</button>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
