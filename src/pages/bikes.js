import React from "react";
import axios from "axios";
import MediaCard from "../components/card";
import "./bikes.css"

class Bikes extends React.Component{
    constructor(){
        super();
        this.state={
            bikes:[],

        }
    }
    componentDidMount(){
        axios.get("https://bike-rental-portal-backend.herokuapp.com/bike/list")
        .then((res)=>{
            this.setState({bikes:res.data})
        })
    }

    render(){
        const {bikes} =this.state;
        console.log(bikes)
        return(
            <div className="back">
            <div className="container">
                <p className="text-center"> Choose A bike </p>
                <div className="row">
                {bikes.map((bike)=>(
                   
                        <MediaCard name={bike.name}  key={bike.id}  price={bike.price} image={bike.image}></MediaCard>     
       
                ))}
            </div>
            </div>
            </div>
        )
    }
}

export default Bikes;