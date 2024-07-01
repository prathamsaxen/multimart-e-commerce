import React from "react";
import "./OrdersCard.css";
function OrdersCard() {
  return (
    <div className="OrdersCard">
      <div className="orderCard-above">
        <div className="order-collapse">
          <p className="fw-semibold fs-4">Order Item</p>
          <i class="fas fa-angle-down fs-4"></i>
        </div>
        <p>
          <span className="order-status">Unfulfilled</span>
        </p>
        <p>Use this personalized guide to get your store up and running</p>
        <div className="orderCard-product">
          <div>
            <img
              className="orderCard-product-photo"
              src="https://kraftvision.com/cdn/shop/files/60afe312ae1447fec28a233b7e26b916.jpg?v=1694786623"
            ></img>
          </div>
          <div className="orderCard-product-theory">
            <p>Laptop</p>
            <div className="orderCard-product-name">
              <div>MacBook Air</div>
              <div className="orderCard-product-quantity">
                <p className="py-2">150000 x 3</p>
                <p>150000</p>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orderCard-bottom">
        <div className="py-3">
          Effortlessly manage your orders with our intuitive Order List Page
        </div>
        <div className="order-buttons">
          <button className="order-fulfill-button">Fullfill Item</button>
          <button className="order-shipping-button">
            Create Shipping label
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrdersCard;
