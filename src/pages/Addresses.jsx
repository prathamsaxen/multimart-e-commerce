import React from "react";
import AddressCard from "../components/AddressCard/AddressCard";
import { AddAddressCard } from "../components/AddressCard/AddressCard"; // Assuming it's a named export and a component

function Addresses() {
  return (
    <div className="Addresses">
      <h2>Addresses</h2>
      <div className="address-cards-display">
        <AddAddressCard />
        <AddressCard />
      </div>
    </div>
  );
}

export default Addresses;
