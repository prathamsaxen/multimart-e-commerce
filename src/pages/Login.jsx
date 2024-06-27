import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import "../styles/Login.css";
import AuthenticationContext from "../context/AuthenticationContext";
import CenteredModalExample from "../components/ForgetPassword/ForgetPasswordModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setLogin } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const paramValue = query.get("callbackurl");
  const loginUser = async (event) => {
    event.preventDefault();
    setDisable(true);
    if (!user.email) {
      toast.error("Please enter your email!");
      setDisable(false);
      return;
    } else if (!user.password) {
      toast.error("Please enter your password!");
      setDisable(false);
      return;
    }
    try {
      const status = await axios.post(
        `${process.env.REACT_APP_API}api/login`,
        user
      );
      if (status.status === 200) {
        toast.success("Logged In Successfully!");
        localStorage.setItem("token", status.data.token);
        setLogin(status.data);
        if (paramValue) {
          navigate(`/${paramValue}`);
        } else {
          navigate("/me");
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setDisable(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="Login">
      <CenteredModalExample show={show} handleClose={handleClose} />
      <Container style={{ width: "28%" }}>
        <Form className="form-login" onSubmit={loginUser}>
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <div style={{ position: "relative" }}>
            <Form.Group className="mb-1" controlId="formBasicPassword">
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
                  top: "53%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <Form.Text
                className="text-muted forget-password-text"
                onClick={handleOpen}
              >
                Forget your password?
              </Form.Text>
            </Form.Group>
          </div>
          <Button
            variant="primary"
            type="submit"
            className="m-auto d-block mt-4 w-100"
            disabled={disable}
          >
            Login
          </Button>
        </Form>
        <Form className="d-flex justify-content-center align-items-center mt-4 pt-3 pb-3 form-login">
          <Button
            className="w-100"
            variant="primary"
            onClick={() => navigate("/signup")}
          >
            Create Account!
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
