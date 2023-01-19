import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/common/header';
import Footer from './components/common/footer';
import EmployeeLandingPage from "./components/employee/employeeLandingPage";
import EmployerLandingPage from "./components/employer/employerLandingPage";
import AboutUs from './components/home/aboutUs';
import HomePage from "./components/home/homepage";
import ResetPassword from './components/home/resetPassword';
import ScrollToTop from './components/common/ScrollToTop'; 
import Jobpost from './components/common/Jobpost';


export class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop/>
          <Header />  
          <Switch>  
            <Route exact path="/" component={HomePage} />
            <Route exact path="/employee" component={EmployeeLandingPage} />
            <Route exact path="/employer" component={EmployerLandingPage} />
            <Route exact path='/reset' component={ResetPassword} />
            <Route exact path='/contact' component={AboutUs} />
            <Route exact path='/post' component={Jobpost} />
          </Switch>
          {/* <Footer /> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;