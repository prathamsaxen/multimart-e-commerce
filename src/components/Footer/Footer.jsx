import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  quickMenu,
  Policies,
  SocialMediaIcons,
  paragraphaboutcompany
} from "../../Configuration/Footer";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Kraft Vision</h1>
            </div>
            <p>
              {paragraphaboutcompany}
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Quick Menu</h2>
            <ul>
              {quickMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Policies</h2>
            <ul>
              {Policies.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Follow Us</h2>
            <ul>
              {SocialMediaIcons.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
