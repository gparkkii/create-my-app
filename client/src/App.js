import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import axios from 'axios';
import ThemeLayout from 'components/common/ThemeLayout';
import Auth from 'library/utils/auth';

const Main = loadable(() => import('pages/Main.js'));
const Login = loadable(() => import('pages/Login.js'));
const SignUp = loadable(() => import('pages/SignUp.js'));
const MyPage = loadable(() => import('pages/MyPage.js'));

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'production site url'
    : 'http://localhost:8080';

console.log('env :', process.env.NODE_ENV);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>...loading</div>}>
        <ThemeLayout>
          <Switch>
            <Route exact path="/" component={Auth(Main, null)} />
            <Route path="/login" component={Auth(Login, false)} />
            <Route path="/signup" component={Auth(SignUp, false)} />
            <Route path="/mypage" component={Auth(MyPage, true)} />
          </Switch>
        </ThemeLayout>
      </Suspense>
    </Router>
  );
}

export default App;
