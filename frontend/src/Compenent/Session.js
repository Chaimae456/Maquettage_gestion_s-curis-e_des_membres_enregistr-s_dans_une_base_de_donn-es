import React,{Component} from "react";
import {Link } from 'react-router-dom'
import {Redirect} from "react-router-dom"
import ListUsers from "./ListUsers";
import Create from "./Create";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';


 class Session extends Component{
    constructor(props) {
        super(props)
    
      const email=localStorage.getItem("emailuser");


     let loggedIn =true;
     if(email == null){
         loggedIn = false;
     }
     this.state={
         loggedIn
     }
     }
     
    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/Login"/>
          }
        return(
            <>
    

            <Col xs={6}><Header/></Col> 
            <Col xs={6}><Link className="btn log-out"  to="/logout"><span>logout</span> </Link></Col>

            <Col xs={12}>
    {/* <h1> welcome  {localStorage.getItem("emailuser")}</h1> */}
</Col> 
                       <Col>
                            <ListUsers />
                        </Col>
                        <Col>
                            <Create />
                         </Col>
                     
                         </>
        )
    }
}
export default Session;