import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import { Route, Switch, HashRouter } from 'react-router-dom'

const loading = (
  <div>
    <h2>Loading ...</h2>
  </div>
)


// Pages 
const Login = React.lazy(() => import('./components/pages/Login'))
const Register = React.lazy(() => import('./components/pages/Register'))
const Dashboard = React.lazy(() => import('./components/pages/Dashboard'))

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route path="/" name="Home" render={props => <Dashboard {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
