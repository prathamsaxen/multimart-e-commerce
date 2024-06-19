import React from "react";
import "./AddressCard.css";
import plus from "../../Images/plus.png";

function AddressCard() {
  return (
    <div className="addressCard">
      <h2>Sujal Varshney</h2>
      <p>1/305</p>
      <p> Naurangabad Chhawani, Aligarh naurangabad</p>
      <p>ALIGARH, UTTAR PRADESH 202001</p>
      <p> India</p>
      <p>
        <b>Phone Number:</b> 790635963
      </p>
      <div className="addressButton">
        <button>Edit</button>
        <button>Delete</button>
        <button>Set as Default</button>
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