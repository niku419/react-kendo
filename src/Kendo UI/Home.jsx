import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Cards from './Cards'
import StepForm from './StepForm'
import ConditionalDropdown from './ConditionalDropdown';

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/drop" component={ConditionalDropdown} />
        <Route exact path='/signup' component={StepForm}/>
        <Route exact path='/old-signup' component={Signup}/>
        <Route exact path='/' component={Signin}/>
        <Route exact path='/cards' component={Cards}/>
      </Switch>
    </Router>
  );
}