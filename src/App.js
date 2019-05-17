import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
import './App.css';


class App extends Component {
  render() {
    return (

  <Router>

    <div className="App">

        <div className="App__Aside"></div>

            <div className="App__Form">

                <div classname="PageSwitcher">
                     
                  <NavLink to="/sign-in"   activeClassName="PageSwither__Item--Active" className="PageSwither__Item">Sign In</NavLink>

                  <NavLink to="/sign-up"   activeClassName="PageSwither__Item--Active" className="PageSwither__Item PageSwither__Item--Active">Sign Up</NavLink>

                </div> <br></br>

                <div classname="FormTitle">
                     
                     <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> ++++Or++++
   
                     <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link FormTitle__Link--Active">Sign Up</NavLink>
                </div>
                <Route exact path="/sign-up"  component={SignUpForm}>
                </Route>
                <Route exact path="/sign-in"  component={SignInForm}>
                </Route> 
               

              

               
                
                
            </div>
       </div>
      </Router>
  );
}
}
export default App;
