import React, { useState, useEffect, useContext } from "react";
import "../styles/Checkout.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthenticationContext from "../context/AuthenticationContext";

function Checkout() {
  const [data, setData] = useState(undefined);
  const [activePaymentMethod, setActivePaymentMethod] = useState("online");
  // const today = new Date();
  // const dayOfWeek = today.getDay();
  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // function formatDate(date) {
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   };
  //   const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  //     date
  //   );
  //   return formattedDate.replace("at", " |");
  // }

  const checkOutUser = async () => {
    if (activePaymentMethod === "cod") {
      console.log("Cash On Delivery Function");
    } else if (activePaymentMethod === "online") {
      console.log("Payment Gateway Method");
    } else {
      toast.error("Please select a payment method!");
    }
  };
  const { login } = useContext(AuthenticationContext);

  const getCheckoutData = async () => {
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
        setData(response.data);
        // console.log(response.data);
      }
    } catch (err) {
      // console.error(err) ;
    }
  };

  useEffect(() => {
    getCheckoutData();
  }, []);
  return (
    <div className="checkout container">
      <div className="checkout-payment">
        <p className="fw-bold">SELECT PAYMENT METHOD</p>
        <div className="payment-modes">
          <div
            className={`mode-of-payment ${
              activePaymentMethod === "online" ? "active-mode-of-payment" : null
            }`}
            onClick={() => setActivePaymentMethod("online")}
          >
            <ion-icon name="card-outline"></ion-icon>
            <div>Online Payment</div>
          </div>
          {/* <div className="mode-of-payment">Bank Transfer</div> */}
          <div
            className={`mode-of-payment ${
              activePaymentMethod === "cod" ? "active-mode-of-payment" : null
            }`}
            onClick={() => setActivePaymentMethod("cod")}
          >
            <ion-icon name="home-outline"></ion-icon>
            <div>Cash On Delivery</div>
          </div>
        </div>
        <div className="checkout-form">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputName" className="form-label fw-bold">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={login.name}
                readOnly

              />
            </div>
            <div className="col-12">
              <label htmlFor="inputCard" className="form-label fw-bold">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control card-input"
                id="inputCard"
                placeholder="Enter your card number"
                value={login.phoneNumber}
                readOnly
              />
            </div>
            <NavLink to={"/me/addresses/?callbackurl=me/checkout"}>
              Change Your Default Address?
            </NavLink>
          </form>
        </div>
      </div>
      <div className="checkout-details">
        <div className="checkout-product">
          <p className="fw-bold">ORDER SUMMARY</p>
          {data?.data.map((item) => {
            // console.log(item);
            return (
              <div className="checkout-product-items" key={item._id}>
                <p>
                  {item.quantity} * {item.items.name}
                </p>
                <p>₹ {item.items.price * item.quantity}/-</p>
              </div>
            );
          })}

          {/* <p className="fs-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, itaque?
          </p> */}
        </div>
        <div className="checkout-date text-center price-data">
          {/* <p className="fw-bold">{days[dayOfWeek]}</p> */}
          <p>Grand Total : ₹ {data?.price.total} /-</p>
          {/* <p>Inclusive all taxes</p> */}
        </div>
        <div>
          <button className="payment-button" onClick={checkOutUser}>PURCHASE NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
