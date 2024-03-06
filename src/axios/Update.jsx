import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {

    let { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:4000/users/", +id).then(res => {
            setValue(res.data)
        },[])
    })

  let [value, setValue] = useState({ name: "", email: "" });
  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
    };
   

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    axios.put("http://localhost:4000/users/" +id, value).then(res => {
      navigate("/");
    });
  };

  return (
    <div>
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="enter name"
            type="text"
            id="name"
            name="name"
            value={value.name}
            required
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            placeholder="enter the email"
            type="email"
            id="email"
            name="email"
            value={value.email}
            required
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
