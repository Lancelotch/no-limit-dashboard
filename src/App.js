import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import routes from "./routes";
import pathUrls from "./routes/pathUrls";
import { createBrowserHistory } from "history";

export default function App() {
  const RouteWithLayout = ({
    component: Component,
    layout: Layout,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );

  const routeComponents = routes.map(({ path, component, layout }, key) => {
    return (
      <RouteWithLayout
        key={key}
        exact
        path={path}
        layout={layout}
        component={component}
      />
    );
  });

  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to={pathUrls.dashboard} />}
        />
        {routeComponents}
      </Switch>
    </Router>
  );
}
