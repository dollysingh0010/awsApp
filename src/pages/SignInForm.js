import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignInForm extends Component {

    constructor () {

        super();

        this.state = {

                 email  : '',
                 password : ''

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
    <label class="FormField__Label" for="name">Email Id</label>
    <input type="text" id="name" class="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}></input>
</div><br></br><br></br>

<div className="Formfields" >
    <label class="FormField__Label" for="password">Password</label>
    <input type="text" id="name" class="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}></input>
</div><br></br><br></br>



<div class="FormField">

<button className="FormField__Button mr-20">Sign In</button> 
<Link to="/sign-up" className="FormField__Link">Create an account</Link>
</div>
</form>



 </div>
        )}


}

export default SignInForm
