import React from "react";
import "./AddressCard.css";

function AddressCard() {
  return (
      <div className="addressCard">
        <h2>Sujal Varshney</h2>
        <p>1/305 Naurangabad Chhawani, Aligarh naurangabad</p>
        <p>ALIGARH, UTTAR PRADESH 202001 India</p>
        <p>Phone number: 790635963</p>
        <div className="addressButton">
            <button>Edit</button>
            <button>Delete</button>
            <button>Set as Default</button>
        </div>
      </div>
  );
}

export default AddressCard;
