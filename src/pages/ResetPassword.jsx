import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
    if(passwordValidator())
      {
        console.log("Password has been reset");
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
