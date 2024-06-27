import React from "react";
import "../styles/Orders.css";

function Orders() {
  return (
    <div className="Orders container">
      <h2>Order</h2>
      <div className="allOrderCards">
        <div className="orderCard">
          <div className="upper">
            <div className="left">
              <div className="first">
                <div>ORDER PLACED</div>
                <div>12 june 2024</div>
              </div>
              <div className="second">
                <div>TOTAL PRICE</div>
                <div>
                  <p>897.00</p>
                </div>
              </div>
              <div className="third">
                <div>SHIP TO</div>
                <div>Sujal Varshney</div>
              </div>
            </div>
            <div className="right">
              <div>
                <div>ORDER ID</div>
                <div className="order">
                  <p>View order details</p>
                  <p>Invoice</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <p>Arriving Saturday</p>
              <p>On the way</p>
              <div className="orderImage">
                <img src="https://kraftvision.com/cdn/shop/files/0be9d5e102a9c3c43b238433014d6700.jpg?v=1696145148"></img>
                <p>name of the parcel</p>
              </div>
            </div>
            <div className="right">
              <button className="package">Track Package</button>
              <button>Cancel this delivery</button>
              <button>Leave seller feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
