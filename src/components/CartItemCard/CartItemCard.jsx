import React from "react";
import "./cartitemcard.css";
import axios from "axios";
import { toast } from "react-toastify";
// import { Col, Container, Row } from "react-bootstrap";

function CartItemCard({ item, getCartProducts }) {
  console.log(item);

  const AddCartItem = async (product) => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API}api/cart`,
        { product: product },
        options
      );
      if (response.status === 200) {
        toast.success("Quantity Increased!");
        getCartProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const RemoveCartItem = async (data) => {
    // console.log(_id);
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          _id: data,
        },
      };
      const response = await axios.delete(
        `${process.env.REACT_APP_API}api/cart`,
        // `${'localhost:3000'}api/cart`,
        options
      );
      if (response.status === 200) {
        toast.success("Quantity Decreased!");
        getCartProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-item-cart" key={item._id}>
      <div className="image-cart-item">
        <img src={item.items.photo} alt="Error in Loading" />
      </div>
      <div className="content-cart-item">
        <h3>{item.items.name}</h3>
        <div className="cart-content-data">
          <div className="data-section-cart">
            <p>Total Price : ₹{item.items.price * item.quantity}</p>
            <p>Price Per Item : ₹{item.items.price}</p>
          </div>
          <div className="data-section-cart">
            <p>Quantity : {item.quantity}</p>
            <p>Category : {item.items.category}</p>
          </div>
        </div>
      </div>
      <div className="action-cart">
        <div className="display-quantity">
          <button onClick={() => AddCartItem(item.items)}>
            <i class="fa-solid fa-plus"></i>
          </button>
          <input
            type="number"
            name=""
            id=""
            value={item.quantity}
            inputmode="numeric"
          />
          <button onClick={() => RemoveCartItem(item._id)}>
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
