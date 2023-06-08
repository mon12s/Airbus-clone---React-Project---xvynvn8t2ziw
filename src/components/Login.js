import React, {useState} from 'react'
import './Login.css'
//import { auth } from './firebase';

function Login() {

    const [register, setRegister] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const registeration =  (e) => {
        e.preventDefault();

        if(!name)
        {
            return alert("Name is required.")
        }

        if(!email)
        {
            return alert("Email is required.")
        }

        if(!password)
        {
            return alert("Password is required.")
        }

     

        setName("");
        setEmail("");
        setPassword("");

    }
  return (

    <>
   
    <div className="loginScreen">
            
    
      {

      register===true ? (
        <form onSubmit={registeration}>
             <h1 >Registration</h1>
     
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}/>
      
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
  
          <input type="submit" value="Register" />
  
          <h4>Already a member?<span onClick={e => setRegister(false)}>Login Here</span></h4>
        </form>) 
        :
         (
           <form >
       <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <input type="submit" value="Login" />

        <h4>Not a member?<span onClick={e => setRegister(true)}>Register Here</span></h4>
      </form>
      )

    }
    
     
    </div>
    </>
    
    
  )
};

export default Login
