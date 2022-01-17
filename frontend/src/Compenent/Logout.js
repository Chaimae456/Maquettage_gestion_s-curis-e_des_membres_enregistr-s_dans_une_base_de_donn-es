import React,{Component} from "react";
import {Link } from 'react-router-dom'
import Header from "./Header";



 class Session extends Component{
    constructor(props) {
        super(props)
     
     const token = localStorage.removeItem("emailuser");
     

     
     }
    render() {
        return(
            <div className="center">
                <Header></Header>
                <h1>You have been looged out !! </h1>
               <Link className="btn" to="/Login"> <span>Try to login </span></Link>

            </div>
        )
    }
}
export default Session;