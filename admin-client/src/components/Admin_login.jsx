import React, { useState } from 'react'
import './Admin_login.css'
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../actions/action';







function Admin_login() {
  
  const [username, setEmail] = useState("");
  const navigate = useNavigate();
  
  const [password, setPassword] = useState("");

  const handleChange = async (e) => {
  
    
  
    e.preventDefault();

      const response = await adminLogin(username,password)
      if (response.status === true) {
        alert("login success");
        navigate('/Admin_home')

      } else {
        alert("not registered");
      }
    
  };  
  
  
  return (
    <div className='alogin1'>
        <div>
            <h1 className='h1'>Admin Login</h1>
        </div>
        <div className='alogin2'>
           <input type="text" className="a" placeholder="username" onChange={(e) => setEmail(e.target.value)} />
		   <input type="text" className="a" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
         <button  className="adminlog" onClick={handleChange}>
						Login
					</button>
           </div>
           <div className="butnlog">
		 
          <div>
          <img className="frameimg5" src="./Frame2.png" alt="" />
          </div>

          </div>
    </div>
  )
}

export default Admin_login