import React, { useState, useEffect } from "react";
import "../index.css";
// import AddressCard from "../components/AddressCard/AddressCard";
import axios from "axios";

function Checkout() {
  const [data, setData] = useState(undefined);

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
      console.error(err);
    }
  };

  useEffect(() => {
    getCheckoutData();
    // console.log(data);
  }, []);
  return (
    <div className="container checkout">
      <div className="left">
        <div className="upper">
          {/* {data &&
            data.address &&
            data.address.map((item, index) => {
              return <AddressCard key={index} data={item} />;
            })} */}
        </div>
        <div className="lower">
          <h3>Payment Method</h3>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Cash On Delivery
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Online
              </label>
            </div>
          </div>
        </div>
        <div className="returnPayButton">
          <button>Return to Cart</button>
          <button className="paymentButton">Continue to payment</button>
        </div>
      </div>
      <div className="right">
        <div className="cartProduct">
          <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"></img>
          <p>Brain Blend</p>
          <p>852</p>
        </div>
        <div className="pt-5">
          <div className="payment">
            <p>Subtotal</p>
            <p>464.00</p>
          </div>
          <div className="payment">
            <p>Shipping</p>
            <p>5.00</p>
          </div>
          <div className="payment">
            <p>Estimated taxes</p>
            <p>28.14</p>
          </div>
          <div className="totalPayment">
            <p>Total</p>
            <p>497.14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
