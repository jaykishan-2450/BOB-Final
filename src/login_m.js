import {React,useState} from "react";
import {Form} from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom'



const Login_m = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()
    const collectdata=async()=>{
        console.log(email,password);
        let result= await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate("/");

        }else{
            alert(result.err)
        }

        setEmail("");setPassword("")
    }
    return (
        <Form className="add-note-form" style={{width:"50vw",height:"60vh",margin:'auto',border:"7px solid green" ,padding:"40px",borderRadius:"12px"}}>
           
            <Form.Field>
                <label>Email</label>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="your email here"  />
            </Form.Field>
            <Form.Field>
                <label>Enter your password</label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Enter your password"  />
            </Form.Field>
            <Form.Field>
                <input type="button" onClick={collectdata}   value="Log In" style={{height:"40px",width:"80px" ,margin:"10px",border:"3px solid green",borderRadius:'8px', color:"green"}} />
            </Form.Field>
            {/* <FormCheckbox label='I agree to the Terms and Conditions'  /> */}


        </Form>

       
    )

}
export default Login_m;