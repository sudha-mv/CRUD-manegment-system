import React ,{ useState } from "react";
import "../style/Adduser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
    let [value, setValue] = useState({ name: "", email: "" });
    const handleChange = e => {
      setValue({ ...value, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:4000/users",value).then(res => {
            navigate("/")
        },);
  }
  
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adduser;
