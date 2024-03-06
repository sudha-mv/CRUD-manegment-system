import React from "react";
import "../style/Getuser.css"
import { useState, useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
const Getuser = () => {
    let [state, setState] = useState([])

    useEffect(() => {      
        axios.get("http://localhost:4000/users").then(res => {
          console.log(res)
          setState(res.data);
        });     
    },[])
   const handleDelete = userId => {
     axios.delete(`http://localhost:4000/users/${userId}`).then(() => {
       setState(state.filter(user => user.id !== userId));
     },[]);
  };
  
  
  const Navigate=useNavigate();
  
  function add() {
    Navigate("/adduser")
  }

    return (
      <div>
        <strong>React table</strong>
        <button onClick={add}>ADD</button>
        <center>
          <table border={"2px"} rules="all">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {state.map(item => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={`/update/${item.id}`}>
                          <button>edit</button>
                        </Link>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(item.id)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    );
}
 
export default Getuser;
