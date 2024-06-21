import { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import {
//   addToCart,
//   decreaseQty,
//   deleteProduct,
// } from "../app/features/cart/cartSlice";
import AuthenticationContext from "../context/AuthenticationContext";
import { NavLink } from "react-router-dom";
import CartItemCard from "../components/CartItemCard/CartItemCard";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  const { login } = useContext(AuthenticationContext);
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const [cartProducts, setProducts] = useState([]);
  const getCartProducts = async () => {
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
        console.log(response);
        setProducts(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="py-2">
            {cartProducts.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartProducts.map((item) => {
              return <CartItemCard item={item} key={item._id} getCartProducts={getCartProducts}/>;
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="cart-price-item">
                <h4>Price :</h4>
                <h3>₹{totalPrice}.00</h3>
              </div>
              <div className=" cart-price-item">
                <h4>Goods Service Tax :</h4>
                <h3>₹{totalPrice}.00</h3>
              </div>
              <div className=" cart-price-item">
                <h4>Delivery Charge :</h4>
                <h3>₹{totalPrice}.00</h3>
              </div>
              <div className="border-line-cart-price"></div>
              <div className=" cart-price-item">
                <h4>Total Price :</h4>
                <h3>₹{totalPrice}.00</h3>
              </div>
              <NavLink
                to={login ? "/me/checkout" : "/login?callbackurl=cart"}
                className="checkout-btn"
              >
                Checkout
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
