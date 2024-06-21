import React from "react";
import "./cartitemcard.css";
import { Col, Container, Row } from "react-bootstrap";

function CartItemCard({ item }) {
  console.log(item);
  return (
    <div className="cart-item-cart" key={item._id}>
      <div className="image-cart-item">
        <img src={item.photo} alt="Error in Loading" />
      </div>
      <div className="content-cart-item">
        <h3>{item.name}</h3>
        <div className="cart-content-data">
          <div className="data-section-cart">
            <p>Total Price : ₹{item.price * item.qty}</p>
            <p>Price Per Item : ₹{item.price}</p>
          </div>
          <div className="data-section-cart">
            <p>Quantity : {item.qty}</p>
            <p>Category : {item.category}</p>
          </div>
        </div>
      </div>
      <div className="action-cart">
        <div className="display-quantity">
          <button>
            <i class="fa-solid fa-plus"></i>
          </button>
          <input type="number" name="" id="" value={item.qty} inputmode="numeric"/>
          <button>
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
