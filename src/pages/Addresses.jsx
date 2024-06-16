import React from "react";

function Addresses() {
  return (
    <div className="Addresses">
      <h2>Adresses</h2>
      <div className="allCards">
        <div className="addAddressCard">
          <h1>+</h1>
          <h3>Add address</h3>
        </div>
        <div className="addressCard">
          <p>Sujal Varshney</p>
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
      </div>
    </div>
  );
}

export default Addresses;
