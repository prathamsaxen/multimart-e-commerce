import { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import Loader from "../components/Loader/Loader";
import "../styles/Cart.css";

const Cart = () => {
  const { login, fetchCartLength } = useContext(AuthenticationContext);
  const [cartProducts, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [price, setPrice] = useState({
    amount: 0,
    gstAmount: 0,
    deliveryCharges: 0,
    total: 0,
  });
  const getCartProducts = async () => {
    setLoader(true);
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_API}api/cart`,
        options
      );
      if (response.status === 200) {
        // console.log(response);
        setProducts(response.data.data);
        setPrice(response.data?.price);
        fetchCartLength();
        // console.log(price);
      }
    } catch (err) {
      console.error(err);
    }
    setLoader(false);
  };
  useEffect(() => {
    getCartProducts();
  }, []);
  // console.log(login);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className="cart-items">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} className="py-2 pt-0">
                {cartProducts.length === 0 && (
                  <h1 className="no-items product">No Items are add in Cart</h1>
                )}
                {cartProducts.map((item) => {
                  return (
                    <CartItemCard
                      item={item}
                      key={item._id}
                      getCartProducts={getCartProducts}
                    />
                  );
                })}
              </Col>
              <Col md={4}>
                <div className="cart-total">
                  <h2>Cart Summary</h2>
                  <div className="cart-price-item">
                    <h4>Price :</h4>
                    <h3>₹{price?.amount || 0.0}</h3>
                  </div>
                  <div className=" cart-price-item">
                    <h4>Goods Service Tax :</h4>
                    <h3>₹{price?.gstAmount || 0.0}</h3>
                  </div>
                  <div className=" cart-price-item">
                    <h4>Delivery Charge :</h4>
                    <h3>₹{price?.deliveryCharges || 0.0}</h3>
                  </div>
                  <div className="border-line-cart-price"></div>
                  <div className=" cart-price-item">
                    <h4>Total Price :</h4>
                    <h3>₹{price?.total || 0.0}</h3>
                  </div>
                  {login.cartItems === 0 ? null : (
                    <NavLink
                      to={login ? "/me/checkout" : "/login?callbackurl=cart"}
                      className="checkout-btn"
                    >
                      Checkout
                    </NavLink>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Cart;
