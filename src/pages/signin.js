import React from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Typography } from "@mui/material";
import "./signup.css"
import { Link } from "react-router-dom";


class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'',
            password:'',
            msg:''
        }
    }

    submit = async () =>{
        console.log(this.state)
        await axios.post('https://bike-rental-portal-backend.herokuapp.com/usersignin',{
            username: this.state.userName,
            password: this.state.password,
        }).then(this.setState(alert("Login successful"))).catch(this.setState({msg:"User does not exist"}))
    }

    render(){
        return(
            <div>
                <form onSubmit={(e)=>(this.submit())}>
                <TextField type="text" name="userName" label="Enter User Name" onChange={(e)=> this.setState({userName:e.target.value})} required></TextField>
                <TextField type="password" name="password" label="Enter your Password" onChange={(e)=> this.setState({password:e.target.value})} autoComplete="off" required></TextField>
                <button className="btn btn-primary" size="medium" type="submit">Login</button>
                <Link to="/signup">
                <button className="btn btn-primary" type="button">Sign Up</button>
                </Link>
                </form>
                <Typography>{this.state.msg}</Typography>
            </div>
        )
    }
}
export default SignIn;