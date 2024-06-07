import React, { useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { Container, Row, Col } from "react-bootstrap";
// import { serviceData } from "../Configuration/Home";
import { useNavigate } from "react-router-dom";
function User() {
  const { setLogin } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/");
  };

  return (
    <div>
      <section className="wrapper background">
        <Container>
          <Row>
            <Col
              md={3}
              sm={5}
              xs={9}
              style={{ backgroundColor: "#fdefe6" }}
              className="feature"
              // style={{maxWidth:"1200px"}}
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
              style={{ backgroundColor: "#ceebe9" }}
              className="feature"
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
              style={{ backgroundColor: "#e2f2b2" }}
              className="feature"
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
              style={{ backgroundColor: "#d6e5fb" }}
              className="feature"
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
      </section>
    </div>
  );
}

export default User;
