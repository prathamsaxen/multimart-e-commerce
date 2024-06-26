import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../index.css";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [disable, setDisable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const signUpUser = async (event) => {
    event.preventDefault();
    setDisable(true);

    const namePattern = /^[A-Za-z ]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern =
      /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!user.name) {
      toast.error("Please enter your name!");
      setDisable(false);
      return;
    } else if (!namePattern.test(user.name)) {
      toast.error("Please enter a valid name!");
      setDisable(false);
      return;
    } else if (!user.phoneNumber) {
      toast.error("Please enter your phone number!");
      setDisable(false);
      return;
    } else if (!phonePattern.test(user.phoneNumber)) {
      toast.error("Phone number is invalid!");
      setDisable(false);
      return;
    } else if (!user.email) {
      toast.error("Please enter your email!");
      setDisable(false);
      return;
    } else if (!emailPattern.test(user.email)) {
      toast.error("Email is invalid!");
      setDisable(false);
      return;
    } else if (!user.password) {
      toast.error("Please enter your password!");
      setDisable(false);
      return;
    } else if (!passwordPattern.test(user.password)) {
      toast.error(
        "Password must be at least 8 characters long and include at least one letter, one number, and one special character"
      );
      setDisable(false);
      return;
    } else if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      setDisable(false);
      return;
    }

    try {
      const status = await axios.post(
        `${process.env.REACT_APP_API}api/register`,
        user
      );
      if (status.status === 200) {
        toast.success("Signed Up Successfully!");
        navigate("/login");
        console.log(status);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setDisable(false);
  };

  return (
    <div className="SignUp">
      <Form
        className="form-signup"
        style={{ width: "30%" }}
        onSubmit={signUpUser}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={user.name}
            disabled={disable}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={user.phoneNumber}
            disabled={disable}
            onChange={(e) => {
              setUser({ ...user, phoneNumber: e.target.value });
            }}
            maxLength={10}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            disabled={disable}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </Form.Group>

        <div style={{ position: "relative" }}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={user.password}
              disabled={disable}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            disabled={disable}
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="m-auto d-block mt-5 w-100"
          disabled={disable}
          style={{ backgroundColor: "#0f3460", border: "none" }}
        >
          Sign Up
        </Button>
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form>
    </div>
  );
}

export default SignUp;
