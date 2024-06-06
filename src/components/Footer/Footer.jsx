import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { quickMenu,Policies,SocialMediaIcons } from "../../Configuration/Footer"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Kraft Vision</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Quick Menu</h2>
              <ul>
                {
                  quickMenu.map((item,index)=>{
                    return <li key={index}>
                      <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                  })
                }
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Policies</h2>
              <ul>
                <li>Privacy Policy </li>
                <li>Contact Information </li>
                <li>Refund Policy </li>
                <li>Shipping Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>70 Washington Square South, New York, NY 10012, United States </li>
                <li>Email: uilib.help@gmail.com</li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
