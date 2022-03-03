import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./signup.css"
import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'',
            password:'',
            email:'',
            age:'',
            booking:'',
            bill:'',
            msg:''
        }
    }

     exist = () => {
        alert("User Name already exist")
    }

    success = () => {
        alert("User Successfully created")
        
    }

    submit = async (event) =>{
      event.preventDefault();
        console.log(this.state)

         await axios.post('https://bike-rental-portal-backend.herokuapp.com/usersignup',{
            username: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            age: this.state.age,
            booking: this.state.booking,
            bill: this.state.bill
        }).then(this.success).catch(this.exist)
    
    }

    render(){
        return(
            <div className="bg">
                <form onSubmit={(e)=>this.submit(e)}>
                <div className="forms container ">
                <TextField className="row col-sm-6" variant="filled" color="success" margin="normal" type="text" name="userName" label="Enter User Name" onChange={(e)=> this.setState({userName:e.target.value})} required></TextField>
                <TextField className="row col-sm-6" variant="filled" color="success" margin="normal" type="password" name="password" label="Enter your Password" onChange={(e)=> this.setState({password:e.target.value})} autoComplete="none" required></TextField>
                <TextField className="row col-sm-6" variant="filled" color="success" margin="normal" type="email" name="email" label="Enter your email" onChange={(e)=> this.setState({email:e.target.value})} autoComplete="none" required></TextField>
                <TextField className="row col-sm-6" variant="filled" color="success" margin="normal" type="number" name="number" label="Enter your Age" onChange={(e)=> this.setState({age:e.target.value})} autoComplete="none" required></TextField>
                <Button className="btn btn-primary row col-sm-6" variant="contained" color="success" size="large" type="submit">Sign Up</Button><br/>
                <Link to="/bikes">
                <Button className="btn btn-primary row col-sm-6" variant="contained" color="success" size="large">View Bikes</Button><br/>
                </Link>
                </div>
                </form>
            </div>
        )
    }
}
export default SignUp;