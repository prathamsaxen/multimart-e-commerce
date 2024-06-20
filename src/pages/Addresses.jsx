import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AddressCard from "../components/AddressCard/AddressCard";
import { AddAddressCard } from "../components/AddressCard/AddressCard";
import AddressForm from "../components/AddressForm/AddressForm"; // Assuming it's a named export and a component
import { EditAddressForm } from "../components/AddressForm/AddressForm";
function Addresses() {
  const [address, setAddress] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEdit = () => {
    setSelectedAddress(null);
    setShowEdit(false);
  };
  const handleShowEdit = (data) => {
    setSelectedAddress(data);
    setShowEdit(true);
  };

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
      if (status.status === 200) {
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
      if (status.status === 200) {
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
      if (status.status === 200) {
        toast.success("Address Deleted Successfully!");
        getAllAddresses();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="Addresses">
        <h2>Addresses</h2>
        <div className="address-cards-display">
          <AddAddressCard show={handleShow} />
          {address.map((item) => {
            return (
              <AddressCard
                key={item._id}
                data={item}
                changeAddressFunction={ChangeDefaultAddress}
                deleteParticularAddress={DeleteParticularAddress}
                handleShowEdit={handleShowEdit}
              />
            );
          })}
        </div>
      </div>
      <AddressForm handleClose={handleClose} show={show} />
      <EditAddressForm
        handleCloseEdit={handleCloseEdit}
        showEdit={showEdit}
        selectedAddress={selectedAddress}
        getAllAddresses={getAllAddresses}
      />
    </>
  );
}

export default Addresses;
