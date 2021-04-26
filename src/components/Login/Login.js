import React, { useState } from 'react'
import { auth } from '../../firebase'
import './Login.css'
function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[name,setName]=useState("")
    const register = () =>{
        
    }
    const loginToApp = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="login">
           <img src="images/link.png" alt=""/> 
           <form >
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" type="text"/>
                <input placeholder="Profile pic Url (Optional)" type="text"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
           </form>

           <p>
               Not a member ? {"  "}
               <span className="login__register" onClick={register}>Register Now</span>
           </p>
        </div>
    )
}

export default Login
