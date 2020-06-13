import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import * as utils from "@lib/utils";
import { About, Home, Contact } from "@containers";
utils.removeHashFromAddressBar();

function Routes() {
  return (
    <Router>
      <Route
        render={() => (
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="*" component={Home} />
          </Switch>
        )}
      />
    </Router>
  );
}

export default Routes;
