import React,{useContext} from 'react'
import AuthenticationContext from '../context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
function User() {
    const {setLogin}=useContext(AuthenticationContext);
    const navigate=useNavigate();
    
    const logoutUser=()=>{
        localStorage.removeItem('token');
        setLogin(false);
        navigate("/");
    }
    
  return (
    <div>
      <h2>About me!</h2>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default User
