import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";

function ResetPassword() {
  const { token } = useParams();
  console.log(token);
  return (
    <div className="reset-password">
      <div className="reset-password-container">
        <h2>Update Password!</h2>
        <form action="">
          <div className="reset-password-form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="reset-password-form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
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
