import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function ForgetPasswordModal({ show, handleClose }) {
  const [mail, setMail] = useState("");
  const [otpInput, setOTPInput] = useState(true);
  const resetPassword = async (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!otpInput) {
      if (!emailPattern.test(mail)) {
        toast.error("Email is invalid!");
        return;
      }

      setOTPInput(true);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Forget Password?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {otpInput ? (
          <p>
            We send a mail on your registered mail account with password reset
            link. Link will be expired in 5 mins.
          </p>
        ) : (
          <Form className="form-login" onSubmit={resetPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll send an OTP on your email.
              </Form.Text>
            </Form.Group>
            {/* {otpInput ? (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>One Time Password</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter OTP..."
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
          ) : null} */}
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        {otpInput ? null : (
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        )}
        {otpInput ? (
          <Button
            style={{ backgroundColor: "#0f3460", border: "none" }}
            onClick={() => {
              setOTPInput(false);
              handleClose();
            }}
          >
            OK!
          </Button>
        ) : (
          <Button
            variant="primary"
            type="submit"
            onClick={resetPassword}
            style={{ backgroundColor: "#0f3460", border: "none" }}
          >
            Send Mail
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ForgetPasswordModal;
