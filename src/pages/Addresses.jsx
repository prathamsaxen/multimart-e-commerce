import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AddressCard from "../components/AddressCard/AddressCard";
import { AddAddressCard } from "../components/AddressCard/AddressCard"; // Assuming it's a named export and a component

function Addresses() {
  const [address, setAddress] = useState([]);
  const getAllAddresses = async () => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const status = await axios.get(
        `${process.env.REACT_APP_API}api/address`,
        options
      );
      if (status.status == 200) {
        // console.log(status);
        setAddress(status.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllAddresses();
  }, []);

  const ChangeDefaultAddress = async (ID) => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const status = await axios.put(
        `${process.env.REACT_APP_API}api/address/${ID}`,
        { default: true },
        options
      );
      if (status.status == 200) {
        toast.success("Changed Default Address!");
        getAllAddresses();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteParticularAddress = async (ID) => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const status = await axios.delete(
        `${process.env.REACT_APP_API}api/address/${ID}`,
        options
      );
      if (status.status == 200) {
        toast.success("Address Deleted Successfully!");
        getAllAddresses();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Addresses">
      <h2>Addresses</h2>
      <div className="address-cards-display">
        <AddAddressCard />
        {address.map((item) => {
          return (
            <AddressCard
              key={item._id}
              data={item}
              changeAddressFunction={ChangeDefaultAddress}
              deleteParticularAddress={DeleteParticularAddress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Addresses;
