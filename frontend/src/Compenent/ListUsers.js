import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const urlGetAllUsers = "http://localhost/api/api/users";
    const getUsers = async () => {
        axios.get(urlGetAllUsers)
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => console.log(error.response));
        // console.log(users);
      };
      useEffect(() => {
        getUsers();
},[])

const  hundleDelete = (id) => {
  const urlDeleteUSer = "http://localhost/api/api/users/"+id; 
  axios.delete(urlDeleteUSer)
  .then((response) => {
    alert(response.data.message);
    window.location.reload();
  })
  .catch((error) => {
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


    return (
<>
    <table className="table">
      <thead>
        <tr>
        <th>Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user) => {
          const { id, name, email ,picturepath} = user;
          return (

        <tr key={id}>
        <td>
          <img className='img-pic' src={`http://localhost/api/uploads/${picturepath}`} />
        </td>
        <td>
            <p>
                {name}
            </p>
        </td>
        <td>
            <p>
                {email}
            </p>
        </td>
        <td>
          <Link to={"/Edit/"+id}  className="btn"><span>Edit</span></Link>   
          </td>
        <td name="delete">
          <button className="btn" onClick={() => hundleDelete(id)}>
                 <span>Delete</span> 
                </button>
                </td>
        </tr>
          );
        })}






      </tbody>
      </table>


</>
    )
}

export default ListUsers
