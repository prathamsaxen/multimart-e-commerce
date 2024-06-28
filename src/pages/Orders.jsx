import React from "react";
import "../styles/Orders.css";
import OrdersCard from "../components/OrdersCard/OrdersCard";

function Orders() {
  return (
    <div className="Orders container">
      <h2>Order</h2>
      <OrdersCard />
    </div>
  );
}

export default Orders;
