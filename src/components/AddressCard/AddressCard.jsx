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
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
      </div>
  );
}

export default AddressCard;
