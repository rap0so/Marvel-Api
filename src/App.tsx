import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'providers/theme';
import GlobalStyle from 'providers/theme/components/globalStyle';
import routes from 'routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Suspense fallback={<></>}>
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              component={lazy(() => import(`${route.component}`))}
              exact={route.exact}
              key={idx}
              path={route.path}
            />
          ))}

          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;
