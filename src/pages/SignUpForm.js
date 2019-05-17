import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,NavLink} from 'react-router-dom';



class SignUpForm extends Component {


    constructor () {

        super();

        this.state = {

                 name : '',
                 email  : '',
                 password : '',
                 hasAgreed: false

        };

    this.handleChange=this.handleChange.bind(this);
    
    this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted data');
        console.log(this.state);
    }
   

    render () {

        return (


<div className="FormCenter">

                <form className="FormFields" onSubmit={this.handleSubmit}><br></br>

                  <div className="Formfields" >
                      <label class="FormField__Label" for="name">Full Name</label>
                      <input type="text" id="name" class="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                  </div><br></br><br></br>

                  <div className="Formfields" >
                      <label class="FormField__Label" for="password">Password</label>
                      <input type="text" id="name" class="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                  </div><br></br><br></br>

                  <div className="Formfields" >
                      <label class="FormField__Label" for="email">Email</label>
                      <input type="text" id="name" class="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                  </div> <br></br><br></br>

                  <div className="FormField" >
                      <label className="FormField__CheckboxLabel" ></label>
                      <input class="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}></input>
                      I agree all statements in 
                      <a href="" class="FormField__TermsLink">terms of service</a>
                  </div>

                  <div class="FormField"><button class="FormField__Button mr-20">Sign Up</button> 
                  <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                  </div>
                  
                
                </form>
                
                
                
                </div>
        )}


}

export default SignUpForm
