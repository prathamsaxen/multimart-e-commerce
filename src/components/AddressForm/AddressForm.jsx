import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const validationCheckFunction = (inputAddress) => {
  if (!inputAddress.name) {
    toast.error("Full Name is required");
    return false;
  } else if (
    !inputAddress.mobileNumber ||
    !/^\d{10}$/.test(inputAddress.mobileNumber)
  ) {
    console.log(inputAddress.mobileNumber);
    toast.error("Valid 10-digit mobile number is required");
    return false;
  } else if (!inputAddress.country) {
    toast.error("Country is required");
    return false;
  } else if (!inputAddress.flat) {
    toast.error("Flat/House No. is required");
    return false;
  } else if (!inputAddress.area) {
    toast.error("Area is required");
    return false;
  } else if (!inputAddress.landmark) {
    toast.error("Landmark is required");
    return false;
  } else if (!inputAddress.city) {
    toast.error("City is required");
    return false;
  } else if (!inputAddress.state) {
    toast.error("State is required");
    return false;
  } else if (!inputAddress.pincode || !/^\d{6}$/.test(inputAddress.pincode)) {
    toast.error("Valid 6-digit pincode is required");
    return false;
  }
  return true;
};

function AddressForm({ show, handleClose, getAllAddresses }) {
  const [addaddress, setaddaddress] = useState({
    country: "",
    name: "",
    mobileNumber: 0,
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    default: false,
  });
  const [disabled, setDisabled] = useState(false);

  const addAddressFunction = async (event) => {
    event.preventDefault();
    // console.log(addAddress);
    if (validationCheckFunction(addaddress)) {
      setDisabled(true);
      try {
        const token = localStorage.getItem("token");
        const options = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const status = await axios.post(
          `${process.env.REACT_APP_API}api/address/`,
          addaddress,
          options
        );
        if (status.status === 200) {
          toast.success("Address added successfully");
          getAllAddresses();
          handleClose();
        }
      } catch (error) {
        toast.error("Error in adding Address!");
        console.error(error);
      }
      setDisabled(false);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container formCard">
            <form class="row g-3 needs-validation">
              <div class="col-md-12">
                <label for="validationCustom01" class="form-label">
                  Full Name (First and Last name)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  required
                  value={addaddress.name}
                  onChange={(event) => {
                    setaddaddress({ ...addaddress, name: event.target.value });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-12">
                <label for="validationCustomUsername" class="form-label">
                  Phone Number
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">
                    +91
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={addaddress.mobileNumber}
                    onChange={(event) => {
                      setaddaddress({
                        ...addaddress,
                        mobileNumber: event.target.value,
                      });
                    }}
                    disabled={disabled}
                  />
                </div>
              </div>
              <div class="col-md-12">
                <label for="validationCustom05" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={addaddress.country}
                  onChange={(event) => {
                    setaddaddress({
                      ...addaddress,
                      country: event.target.value,
                    });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom03" class="form-label">
                  Flat/House No.
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                  value={addaddress.flat}
                  onChange={(event) => {
                    setaddaddress({ ...addaddress, flat: event.target.value });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-6">
                <label for="validationCustom05" class="form-label">
                  Area
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={addaddress.area}
                  onChange={(event) => {
                    setaddaddress({ ...addaddress, area: event.target.value });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Landmark
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={addaddress.landmark}
                  onChange={(event) => {
                    setaddaddress({
                      ...addaddress,
                      landmark: event.target.value,
                    });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                  value={addaddress.city}
                  onChange={(event) => {
                    setaddaddress({ ...addaddress, city: event.target.value });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={addaddress.state}
                  onChange={(event) => {
                    setaddaddress({ ...addaddress, state: event.target.value });
                  }}
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={addaddress.pincode}
                  onChange={(event) => {
                    setaddaddress({
                      ...addaddress,
                      pincode: event.target.value,
                    });
                  }}
                  disabled={disabled}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addAddressFunction} disabled={disabled}>
            Add Address
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddressForm;

function EditAddressForm({
  showEdit,
  handleCloseEdit,
  selectedAddress,
  getAllAddresses,
}) {
  const [editAddress, setEditAddress] = useState({
    user: selectedAddress?.user || "",
    country: selectedAddress?.country || "",
    name: selectedAddress?.name || "",
    mobileNumber: selectedAddress?.mobileNumber || "",
    pincode: selectedAddress?.pincode || "",
    flat: selectedAddress?.flat || "",
    area: selectedAddress?.area || "",
    landmark: selectedAddress?.landmark || "",
    city: selectedAddress?.city || "",
    state: selectedAddress?.state || "",
    default: selectedAddress?.default || false,
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (selectedAddress) {
      setEditAddress({
        // user: selectedAddress.user || "",
        country: selectedAddress.country || "",
        name: selectedAddress.name || "",
        mobileNumber: selectedAddress.mobileNumber || "",
        pincode: selectedAddress.pincode || "",
        flat: selectedAddress.flat || "",
        area: selectedAddress.area || "",
        landmark: selectedAddress.landmark || "",
        city: selectedAddress.city || "",
        state: selectedAddress.state || "",
      });
    }
  }, [selectedAddress]);

  const UpdateAddress = async (event) => {
    event.preventDefault();
    if (validationCheckFunction(editAddress)) {
      setDisabled(true);
      try {
        const token = localStorage.getItem("token");
        const options = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const status = await axios.put(
          `${process.env.REACT_APP_API}api/address/${selectedAddress._id}`,
          editAddress,
          options
        );
        if (status.status === 200) {
          toast.success("Address updated successfully");
          getAllAddresses();
          handleCloseEdit();
        }
      } catch (error) {
        toast.error("Error in Updating Address!");
        console.error(error);
      }
      setDisabled(false);
    }
  };
  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container formCard">
            <form class="row g-3 needs-validation">
              <div class="col-md-12">
                <label for="validationCustom01" class="form-label">
                  Full Name (First and Last name)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  required
                  value={editAddress.name}
                  onChange={(event) =>
                    setEditAddress({ ...editAddress, name: event.target.value })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-12">
                <label for="validationCustomUsername" class="form-label">
                  Phone Number
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">
                    +91
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={editAddress.mobileNumber}
                    onChange={(event) =>
                      setEditAddress({
                        ...editAddress,
                        mobileNumber: event.target.value,
                      })
                    }
                    disabled={disabled}
                  />
                </div>
              </div>
              <div class="col-md-12">
                <label for="validationCustom05" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={editAddress.country}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      country: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom03" class="form-label">
                  Flat/House No.
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                  value={editAddress.flat}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      flat: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-6">
                <label for="validationCustom05" class="form-label">
                  Area
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={editAddress.area}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      area: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Landmark
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={editAddress.landmark}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      landmark: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                  value={editAddress.city}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      city: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={editAddress.state}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      state: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                  value={editAddress.pincode}
                  onChange={(event) =>
                    setEditAddress({
                      ...editAddress,
                      pincode: event.target.value,
                    })
                  }
                  disabled={disabled}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={UpdateAddress} disabled={disabled}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { EditAddressForm };
