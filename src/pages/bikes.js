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
            <div className="container">
                {bikes.map((bike)=>(
                    <div className="row col" key={bike.id} >
                        <MediaCard className="col-sm" name={bike.name} price={bike.price} image={bike.image}></MediaCard>     
                    </div>
                ))}
            </div>
        )
    }
}

export default Bikes;