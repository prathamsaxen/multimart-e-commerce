import React, { useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { Container, Row, Col } from "react-bootstrap";
import "../components/wrapper/wrapper.css";
import "../styles/User.css";

// import { serviceData } from "../Configuration/Home";
import { useNavigate } from "react-router-dom";
function User() {
  const { setLogin, setCartLength } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setCartLength(0);
    navigate("/");
  };

  return (
    <div className="background-color-whole-app User">
      <section
        className="wrapper background"
        style={{ backgroundColor: "rgb(246, 249, 252)" }}
      >
        <Container>
          <Row>
            <Col
              md={3}
              sm={5}
              xs={9}
              style={{ backgroundColor: "#fdefe6", cursor: "pointer" }}
              className="feature"
              onClick={() => navigate("/me/orders")}
            >
              <div className="icon">
                <ion-icon name="cart"></ion-icon>
              </div>
              <h3>{"Your Orders"}</h3>
              <p>
                {
                  "You can view your past orders, track and return them, and repurchase items with ease."
                }
              </p>
            </Col>
            <Col
              md={3}
              sm={5}
              xs={9}
              style={{ backgroundColor: "#ceebe9", cursor: "pointer" }}
              className="feature"
              onClick={() => navigate("/me/account")}
            >
              <div className="icon">
                <ion-icon name="log-in"></ion-icon>
              </div>
              <h3>{"Login & Security"}</h3>
              <p>
                {
                  "You can review and update your credentials and personal information."
                }
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              md={3}
              sm={5}
              xs={9}
              style={{ backgroundColor: "#e2f2b2", cursor: "pointer" }}
              className="feature"
              onClick={() => navigate("/me/addresses")}
            >
              <div className="icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <h3>{"Your Addresses"}</h3>
              <p>
                {
                  "You can add or delete multiple addresses here for product delivery."
                }
              </p>
            </Col>
            <Col
              md={3}
              sm={5}
              xs={9}
              style={{ backgroundColor: "#d6e5fb", cursor: "pointer" }}
              className="feature"
              onClick={() => navigate("/contact-us")}
            >
              <div className="icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <h3>{"Contact Us"}</h3>
              <p>
                {
                  "For any queries or issues related to Craft Vision, you can contact us directly here."
                }
              </p>
            </Col>
          </Row>
        </Container>
        <button onClick={logoutUser}>Logout!</button>
      </section>
    </div>
  );
}

export default User;
