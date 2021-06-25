import React from "react";
import {  Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './BookingForm'
import LoginPage from './_components/LoginPage'
import ExecutiveLogin from './_components/ExecutiveLogin'
import ValidationForm from './_components/ValidationForm'
import SkipLogin from './_components/SkipLogin'
import OtpLogin from './_components/OtpLogin'

function App() {
  return ( 
    <div className="App">
      <Router>
        <Switch>
          <Route path="/booking" component={BookingForm} />
          <Route path="/login" component={LoginPage} />
          <Route path="/executivelogin" component={ExecutiveLogin} />
          <Route path="/validationform" component={ValidationForm} />
          <Route path="/skiplogin" component={SkipLogin} />
          <Route path="/otplogin" component={OtpLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
