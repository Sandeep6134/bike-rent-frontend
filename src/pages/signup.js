import React from "react";
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import "./signup.css"
import axios from "axios";

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

    submit = async (event) =>{
      event.preventDefault();
        console.log(this.state)

        const response = await axios.post('https://bike-rental-portal-backend.herokuapp.com/usersignup',{
            username: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            age: this.state.age,
            booking: this.state.booking,
            bill: this.state.bill
        }).then(this.setState({msg:"Successfully registered"})).catch(this.setState({msg:"This user name is already in use. Try another one"}))
        console.log(response)
    
    }

    render(){
        console.log("rerendering")
        return(
            <div className="bg">
                <form onSubmit={(e)=>this.submit(e)}>
                <div className="forms container ">
                <TextField className="row col-sm" margin="normal" type="text" name="userName" label="Enter User Name" onChange={(e)=> this.setState({userName:e.target.value})} required></TextField>
                <TextField className="row col-sm" margin="normal" type="password" name="password" label="Enter your Password" onChange={(e)=> this.setState({password:e.target.value})} autoComplete="none" required></TextField>
                <TextField className="row col-sm" margin="normal" type="email" name="email" label="Enter your email" onChange={(e)=> this.setState({email:e.target.value})} autoComplete="none" required></TextField>
                <TextField className="row col-sm" margin="normal" type="number" name="number" label="Enter your Age" onChange={(e)=> this.setState({age:e.target.value})} autoComplete="none" required></TextField>
                <Button className="btn btn-primary" variant="contained" size="large" type="submit">Sign Up</Button>
                <Typography>{this.state.msg}</Typography>
                </div></form>
            </div>
        )
    }
}
export default SignUp;