import React, { useState, useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { toast } from "react-toastify";
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

  const EditUserData = async (event) => {
    event.preventDefault();
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
      const phonePattern = /^[0-9]{10}$/;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!data.name) {
        toast.error("Please enter your name!");
        setEdit(false);
        return;
      } else if (!data.phoneNumber) {
        toast.error("Please enter your phone number!");
        setEdit(false);
        return;
      } else if (!phonePattern.test(data.phoneNumber)) {
        toast.error("Phone number is invalid!");
        setEdit(false);
        return;
      } else if (!data.email) {
        toast.error("Please enter your email!");
        setEdit(false);
        return;
      } else if (!emailPattern.test(data.email)) {
        toast.error("Email is invalid!");
        setEdit(false);
        return;
      }

      try {
        const token = localStorage.getItem("token");
        const options = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const status = await axios.put(
          `${process.env.REACT_APP_API}api/user/${login._id}`,
          data,options
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
  };
  return (
    <div className="container Account">
      <h2 className="py-4">Login & Security</h2>
      <div className="detailsForm">
        <form
          class="row g-3 needs-validation"
          novalidate
          onSubmit={EditUserData}
        >
          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">
              Full Name (First and Last name)
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              disabled={edit}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <div class="valid-feedback">Looks good!</div>
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
                disabled={edit}
                value={data.phoneNumber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
              />
              <div class="invalid-feedback">Please choose a mobile Number</div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@gmail.com"
              disabled={edit}
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div class="col-12">
            <button class="detailsFormButton" type="submit">
              {edit ? "Edit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
