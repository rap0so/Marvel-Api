import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'providers/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Switch>
          <Route path="/" component={lazy(() => import('pages/home'))} />
          <Route path="/404" component={lazy(() => import('pages/notFound'))} />

          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;
