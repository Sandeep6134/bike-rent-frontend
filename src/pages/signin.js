import React from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import "./signup.css"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'',
            password:'',
            msg:''
        }
    }

    exist = () => {
        alert("Invalid Credentials")
    }

    success = () => {
        alert("Login successfull")
        
    }

    submit =  (event) =>{
        event.preventDefault()
         axios.post('https://bike-rental-portal-backend.herokuapp.com/usersignin',{
            username: this.state.userName,
            password: this.state.password,
        }).then(this.success).catch(this.exist)
    }

    render(){
        return(
            <div>
                <form className="bg" onSubmit={this.submit}>
                <div className="container forms">
                <TextField className="row col-sm-6" type="text" name="userName" margin="dense" label="Enter User Name" onChange={(e)=> this.setState({userName:e.target.value})} required></TextField>
                <TextField className="row col-sm-6" type="password" name="password" margin="dense" label="Enter your Password" onChange={(e)=> this.setState({password:e.target.value})} autoComplete="off" required></TextField>
                <Button variant="contained" color="success" className="btn btn-primary row col-sm-6 m-2" size="medium" margin="dense" type="submit">Login</Button>
                <Link to="/signup">
                <Button variant="contained" color="success" className="btn btn-primary row col-sm-6 m-2"  type="button">Sign Up</Button>
                </Link>
                <Link to="/bikes">
                    <Button variant="contained" color="success" className="btn btn-primary row col-sm-6 m-2" type="button">View Bikes</Button>   
                </Link>
                </div>
                </form>
            </div>
        )
    }
}
export default SignIn;