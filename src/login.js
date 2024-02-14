import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  Segment,
  Modal,
  Popup,
  Icon,
  Menu,
} from 'semantic-ui-react'


const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/")
    }
  })

  const collectdata = async () => {
    // console.log(name,email,password);
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      let result = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      result = await result.json();
      // console.log(await result.json());
      localStorage.setItem("user", JSON.stringify(result));
      setName(""); setEmail(""); setPassword("");
      navigate("/")
    }
    else {
      alert("fill all fields");
    }

  }

  const style = {
    width: "50vw",
    margin: "auto",
    padding: "40px",
    border: "5px solid green",
    borderRadius: "12px"
  }

  return (
    <>
      <Form className="add-note-form" style={style}>
        <Form.Field>
          <label>What is your name?</label>
          <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="text" value={email} placeholder="your email here" onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Set your password</label>
          <input type="text" value={password} placeholder="set your password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <input type="submit" onClick={collectdata} value="Sign Up" style={{ height: "40px", width: "80px", margin: "10px", border: "3px solid green", borderRadius: '8px', color: "green" }} />
        </Form.Field>

        <h4>Already signed up?<Link to="/login"> Login</Link></h4>
      </Form>



    </>

  )
};
export default Login;