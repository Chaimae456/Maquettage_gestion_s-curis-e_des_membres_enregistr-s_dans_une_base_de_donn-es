import React,{Component} from 'react' ;
import axios from 'axios';
import { Form , Button , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Compenent/Header';
import { Link,Redirect } from 'react-router-dom';


class Create extends Component {

   constructor(props) {
   super(props)

 this.state = {
  myfile:'',
   name:'',
   email:'',
   password:'',
  
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
     const url = "http://localhost/api/api/users";
axios.post(url ,fd).then(res => {
        alert(res.data.message);
        window.location.reload();
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
return(
  <>
  <h1>Add new user</h1>
  
  <Form className="d-grid gap-2 mt-5" onSubmit={this.SubmitForm}>
  <Form.Group className="mb-3">
          <Form.Control type="file" name="myfile" onChange={this.fileSelectHundler} accept=".jpg,.jpeg,.png"  required />
       </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" onChange={this.onChange} value={this.state.name}  placeholder="Enter Name" required />

       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter email" required />

       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required />
          </Form.Group>
<button className="btn" type="submit" >
 <span> ADD user </span>
</button>

       </Form>
      </>

)
}
}
export default Create;

