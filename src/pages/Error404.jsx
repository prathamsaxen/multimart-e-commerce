import React from "react";
import img from "../Images/404.png";
import { useNavigate } from "react-router-dom";
import "../styles/Error404.css";

function Error404() {
    const navigate=useNavigate();
  return (
    <div className="Error404">
      <img src={img} alt="Error in Loading" />
      <div className="content404">
        <h2>Error404</h2>
        <p>Sorry, the page you are looking for cannot be found. Please check the URL or try navigating back to home page.</p>
        <button onClick={()=>navigate("/")}>Go to HomePage</button>
      </div>
    </div>
  );
}

export default Error404;
