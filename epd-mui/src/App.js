import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ForgotPassword from './screens/ForgotPassword';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/forgotpassword" exact component={ForgotPassword} />
    </Router>
  );
};

export default App;
