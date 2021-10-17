import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './components/SignIn';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/LogIn" component={Login} />
        <Route path="/SignUp" component={SignIn} />
        {/* <Route path="/" component={SignIn} /> */}
        <Redirect from="/" to="/SignUp" />
      </Switch>
    </div>
  );
}

export default App;
