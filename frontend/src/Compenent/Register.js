import React,{Component} from 'react' ;
import axios from 'axios';
import { Form , Button , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Compenent/Header';
import { Link,Redirect } from 'react-router-dom';

class AddUser extends Component {

   constructor(props) {
   super(props)
let loggedIn =false;
 this.state = {
   myfile:'',
   name:'',
   email:'',
   password:'',
    loggedIn
  
  }
  this.fileSelectHundler = this.fileSelectHundler.bind(this)
  this.onChange = this.onChange.bind(this)
  this.SubmitForm = this.SubmitForm.bind(this)
}



  

  onChange(e){
    this.setState({
     [e.target.name]:e.target.value

    })
  } 
  fileSelectHundler(event){
    this.setState({
    [event.target.name] : event.target.files[0]
    })
  }

  
  SubmitForm(e){
 e.preventDefault()
 const fd = new FormData(); 
 fd.append('picture',this.state.myfile);
 fd.append('name',this.state.name);
 fd.append('email',this.state.email);
 fd.append('password',this.state.password);
 console.log(fd);
     localStorage.setItem("token","data")
     localStorage.setItem("emailuser",this.state.email)
     const url = "http://localhost/api/api/users";
axios.post(url ,fd).then(res => {
        alert(res.data.message);
        this.setState({
          loggedIn:true
          })
      }).catch(function (error) {
        if (error.response) {
          let x = error.response.data;
          JSON.parse(JSON.stringify(x));
          alert(x.Error)
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });


 }



 
render(){
 if (this.state.loggedIn){
  return <Redirect to="/session"/>
  }
return(
  <>
  
  <Col  md="5">
  <Header />
  <h1>Welcome to our services platfoom try to join us </h1>
  <Form className="d-grid gap-2 mt-5" onSubmit={this.SubmitForm}>
  <Form.Group className="mb-3">
          <Form.Control type="file" name="myfile" onChange={this.fileSelectHundler} accept=".jpg,.jpeg,.png"  required />
       </Form.Group>
  <Form.Group className="mb-3">
          <Form.Control type="text" name="name" onChange={this.onChange} value={this.state.name}  placeholder="Enter Name" required />

       </Form.Group>

      <Form.Group className="mb-3">
          <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter email" required />

       </Form.Group>

       <Form.Group className="mb-3">
          <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required />
          </Form.Group>
          <Link to="/Login" >already have an Account ?</Link>

<button className="btn" type="submit" >
       <span> Register</span>
      </button>

       </Form>
       </Col>
       <Col className="noPadding">
       <div className="acceuil-bg"></div>
      
       
       </Col>
      </>

)
}
}
export default AddUser;

