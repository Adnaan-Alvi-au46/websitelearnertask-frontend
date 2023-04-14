import React, { useState } from "react";
import axios from 'axios'

export const Login = (props) => {


  const[isuserName,setIsUsername]=useState(true)
  const[ispassword,setIspassword]=useState(true)

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    // console.log(credentials)
  };

  const submitHandler = async(e) => {
    e.preventDefault();

try {
  const res = await axios.post('https://websitelearnerstask-backend-bdap.onrender.comn',{
    ...credentials
   });
   console.log(res)
  
  if(res?.data?.status==='success'){
 
    localStorage.setItem("token", JSON.stringify(res?.data?.token));
    localStorage.setItem("Id", JSON.stringify(res?.data?.userId));
    localStorage.setItem("userName", JSON.stringify(res?.data?.userName));
    window.location.replace("/home");
    
    setIsUsername(true)
    setIspassword(true)
   }
} catch (error) {
    console.log(error)
    if(error.response.data.msg === "User not found"){
        setIsUsername(false)
        setIspassword(true)
    }
    else if(error.response.data.msg === 'Password Incorrect'){
      setIsUsername(true)
      setIspassword(false)
    }
}
  }
  
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit={submitHandler} className="login-form">
            <label htmlFor='email'>email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleInputChange}
            className="lInput"
          />
            <span className="email-not-valid">
            {isuserName?'':'Enter valid email!'}
            </span>

            <label htmlFor='password'>password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleInputChange}
            className="lInput"
          />
          
           <span className="incorrect-password">
            {ispassword?'':'Incorrect password!'}
            </span>

          <button type="submit" className="lButton">
            Login
          </button>
      </form>
      <button  onClick={() => props.onFormSwitch("register")} className="link-btn">
        Don't have an account? Register Here
      </button>
    </div>
  );
};

