import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import axios from 'axios';
import ThemeLayout from 'components/common/ThemeLayout';

const Main = loadable(() => import('pages/Main.js'));

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'production site url'
    : 'http://localhost:8080';

console.log('env :', process.env.NODE_ENV);

function App() {
  return (
    <Router>
      <ThemeLayout>
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Suspense>
      </ThemeLayout>
    </Router>
  );
}

export default App;
