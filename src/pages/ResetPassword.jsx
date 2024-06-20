import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../index.css";

function ResetPassword() {
  const { token } = useParams();
  const [passwordData, setPasswordData] = useState({
    pasword: "",
    confirmPassword: "",
  });

  const passwordValidator = () => {
    if (passwordData.pasword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return false;
    } else if (passwordData.pasword !== passwordData.confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const resetPasswordFunction = async (event) => {
    event.preventDefault();
    if (passwordValidator()) {
      try {
        const status = await axios.post(
          `${process.env.REACT_APP_API}api/reset-password/`,
          { token: token, password: passwordData.pasword }
        );
        console.log(status);
        if (status.status === 200) {
          toast.success("Password Changed Successfully!");
        }
      } catch (error) {
        toast.error("Error in changing password!");
        console.error(error);
      }
    }
  };

  return (
    <div className="reset-password">
      <div className="reset-password-container">
        <h2>Update Password!</h2>
        <form action="" onSubmit={resetPasswordFunction}>
          <div className="reset-password-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={passwordData.pasword}
              onChange={(event) =>
                setPasswordData({
                  ...passwordData,
                  pasword: event.target.value,
                })
              }
            />
          </div>
          <div className="reset-password-form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={passwordData.confirmPassword}
              onChange={(event) =>
                setPasswordData({
                  ...passwordData,
                  confirmPassword: event.target.value,
                })
              }
            />
          </div>
          <input
            type="submit"
            value={"Reset Password"}
            className="reset-password-form-group-submit"
          />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
