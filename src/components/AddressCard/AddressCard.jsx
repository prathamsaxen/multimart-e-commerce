import React from "react";
import "./AddressCard.css";
import plus from "../../Images/plus.png";

function AddressCard({data,changeAddressFunction}) {
  return (
    <div className="addressCard">
      <h2>{data.name}</h2>
      <p>{data.flat}</p>
      <p> {data.landmark}, {data.area}</p>
      <p>{data.city}, {data.state} {data.pincode}</p>
      <p> {data.country}</p>
      <p>
        <b>Phone Number:</b> +91 {data.mobileNumber}
      </p>
      <div className="addressButton">
        <button>Edit</button>
        <button>Delete</button>
        {data.default?null:<button onClick={()=>changeAddressFunction(data._id)}>Set as Default</button>}
      </div>
    </div>
  );
}

function AddAddressCard(){
  return(
  <div className="addaddressCard">
    <img src={plus} alt="Error in Loading" />
  </div>
  );
}

export default AddressCard;
export {AddAddressCard};