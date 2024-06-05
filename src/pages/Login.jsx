import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "../index.css";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(false);
  const loginUser = async (event) => {
    event.preventDefault();
    setDisable(true);
    if(!user.email)
      {
        toast.error("Please enter your email!");
        setDisable(false);
        return;
      }
    else if(!user.password)
      {
        toast.error("Please enter your password!");
        setDisable(false);
        return;
      }
      try{
        const status=await axios.post(`${process.env.REACT_APP_API}api/login`,{user});
        if(status.status===200)
          {
            toast.success("Logged In Successfully!");
            console.log(status);
          }
      }
      catch(error){
        toast.error(error.response.data.message);
        console.log(error);
      }
      setDisable(false);
  };
  return (
    <div className="Login">
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            disabled={disable}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="m-auto d-block mt-5 w-100"
          disabled={disable}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
