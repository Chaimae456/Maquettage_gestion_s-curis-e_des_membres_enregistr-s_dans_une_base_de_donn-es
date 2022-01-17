
import React,{Component} from 'react' ;
import axios from 'axios';
import { Form , Button ,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect } from 'react-router-dom';
import Header from './Header';



class LoginUser extends Component {

 constructor(props) {
   super(props)
let loggedIn =false;

 this.state = {
   email:'',
   password:'',
    users : [],
    loggedIn
  
  }
  this.onChange = this.onChange.bind(this)
  this.SubmitForm = this.SubmitForm.bind(this)
}



// get req data in the link 
componentDidMount (){
  axios.get("http://localhost/api/api/users")
  .then(res => {

      this.setState({
        users:res.data
        
      })
      

    })
  }



  onChange(e){
    this.setState({
     [e.target.name]:e.target.value

    })
  }

  SubmitForm(e){
 e.preventDefault()
 const{email,password}=this.state
 let data =this.state.users.map(user=>   user.password );
 let data1 =this.state.users.map(user=>   user.email );


 for(let i=0 ;i<this.state.users.length;i=i+1){
  if(password===data[i] &&  email===data1[i] ){
    localStorage.setItem("emailuser",email)

this.setState({
loggedIn:true
})


  }

}

 }

render(){
  if (this.state.loggedIn){
    return <Redirect to="/session"/>
  }
return(
  
 

    <>
    
    <Col md="5">
    <Header />
      <h1>Welcome to our services platfoom try to join us </h1>
<Form onSubmit={this.SubmitForm} className="d-grid gap-2 mt-5">


    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
    onChange={this.onChange} value={this.state.email}  name="email" type="email" placeholder="Enter email" required />

     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control    
     onChange={this.onChange} value={this.state.password} name="password" type="password" placeholder="Password" required />
        </Form.Group>
    <Link to="/" >Create Account !</Link>
<button class="btn"  type="submit" >
<span> Log in</span>
</button>
     </Form>
     </Col>
     <Col className="noPadding">
       <div class="acceuil-bg"></div>
      
       
       </Col>
    </>
)


}
}
export default LoginUser;






