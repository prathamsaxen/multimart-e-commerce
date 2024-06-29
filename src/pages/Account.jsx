import React, { useState, useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { toast } from "react-toastify";
import { loginandSecurityValidation } from "../validations/validations";
import axios from "axios";
import "../styles/Account.css";

function Account() {
  const [edit, setEdit] = useState(true);
  const { login } = useContext(AuthenticationContext);
  // console.log(login);
  const [data, setData] = useState({
    name: login.name,
    email: login.email,
    phoneNumber: login.phoneNumber,
  });

  const findUpdatedFields = (oldData, newData) => {
    const updatedFields = {};

    // Check each field
    if (oldData.name !== newData.name) {
      updatedFields.name = newData.name;
    }
    if (oldData.email !== newData.email) {
      updatedFields.email = newData.email;
    }
    if (oldData.phoneNumber !== newData.phoneNumber) {
      updatedFields.phoneNumber = newData.phoneNumber;
    }

    return updatedFields;
  };

  const EditUserData = async (event) => {
    event.preventDefault();
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);

      if (!loginandSecurityValidation(data)) {
        setEdit(false);
        return;
      } else {
        const submissionData = findUpdatedFields(login, data);
        try {
          const token = localStorage.getItem("token");
          const options = {
            headers: {
              authorization: `Bearer ${token}`,
            },
          };
          const status = await axios.put(
            `${process.env.REACT_APP_API}api/user/`,
            submissionData,
            options
          );
          if (status.status === 200) {
            toast.success("Account Details Updated Successfully!");
            console.log(status);
          }
        } catch (error) {
          toast.error(error.response.data.message);
          console.log(error);
        }
        setEdit(true);
      }
    }
  };
  return (
    <div className="container Account">
      <h2 className="py-4">Login & Security</h2>
      <div className="detailsForm">
        <form
          className="row g-3 needs-validation"
          // novalidate
          onSubmit={EditUserData}
        >
          <div className="col-md-12">
            <label htmlFor="validationCustom01" className="form-label">
              Full Name (First and Last name)
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required
              disabled={edit}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustomUsername" className="form-label">
              Phone Number
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                +91
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
                disabled={edit}
                value={data.phoneNumber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
              />
              <div className="invalid-feedback">Please choose a mobile Number</div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@gmail.com"
              disabled={edit}
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="col-12">
            <button className="detailsFormButton" type="submit">
              {edit ? "Edit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
