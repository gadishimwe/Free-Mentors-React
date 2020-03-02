import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Landing from "./component/landing/Landing";
import './App.scss'
import Footer from "./component/Footer";
import Signupin from "./component/signupin/Signupin";

class App extends Component {
    render() {
      return (
        <React.Fragment>
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Signupin} />
            <Route exact path='/signin' component={Signupin} />
          <Footer />
        </React.Fragment>
      );
    }
  }
  
  export default App;