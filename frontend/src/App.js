import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './Compenent/Login';
import Edit from './Compenent/Edit'
import Nave from './Compenent/Nave';
import Register from './Compenent/Register';
import Logout from './Compenent/Logout';
import Session from './Compenent/Session';
import { Container, Row  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  render(){
   return (
    <BrowserRouter>

       <Container fluid>
        <Row>
    

      <Route  path="/Login" component={Login}/>
      <Route exact path="/" component={Register}/>
      <Route  path="/logout" component={Logout}/>
      <Route  path="/session" component={Session}/>
      <Route  path="/Edit/:id" component={Edit}/>
</Row>
       </Container>
 
    </BrowserRouter>
  );   
}
}
 

export default App;
