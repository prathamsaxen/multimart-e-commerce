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
<<<<<<< HEAD
    <div className="checkout container">
      <div className="checkout-payment">
        <p className="fw-bold">SELECT PAYMENT METHOD</p>
        <div className="payment-modes">
          <div className="mode-of-payment">
            <ion-icon name="card-outline"></ion-icon>
            <div>Online Payment</div>
          </div>
          {/* <div className="mode-of-payment">Bank Transfer</div> */}
          <div className="mode-of-payment">
            <ion-icon name="logo-paypal"></ion-icon>
            <div>Cash On Delivery</div>
          </div>
        </div>
        <div className="checkout-form">
          <form class="row g-3">
            <div class="col-12">
              <label for="inputName" class="form-label fw-bold">
                NAME ON CARD
              </label>
              <input type="text" class="form-control" id="inputName" />
            </div>
            <div class="col-12">
              <label for="inputCard" class="form-label fw-bold">
                CARD NUMBER
              </label>
              <input
                type="text"
                class="form-control card-input"
                id="inputCard"
                placeholder="Enter your card number"
              />
            </div>
            <div class="col-4">
              <label for="inputMonth" class="form-label fw-bold">
                Month
              </label>
              <input type="text" class="form-control" id="inputMonth" />
            </div>
            <div class="col-4">
              <label for="inputYear" class="form-label fw-bold">
                Year
              </label>
              <input type="Number" class="form-control" id="inputYear" />
            </div>
            <div class="col-4">
              <label for="inputCVV" class="form-label fw-bold">
                CVV
              </label>
              <input type="Number" class="form-control" id="inputCVV" />
            </div>
          </form>
        </div>
      </div>
      <div className="checkout-details">
        <div className="checkout-product">
          <p className="fw-bold">ORDER SUMMARY</p>
          <div className="product">
            <p>Samsung FE 23</p>
            <p>129999</p>
          </div>
          <p className="fs-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, itaque?
          </p>
        </div>
        <div className="checkout-date text-center">
          <p className="fw-bold">WEDNESDAY</p>
          <div className="d-flex justify-content-center fw-bold">
            <p>January 18, 2017 | </p>
            <p className="px-1">11:00 AM</p>
          </div>
        </div>
        <div>
          <button  className="payment-button">PURCHASE NOW</button>
=======
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
>>>>>>> c714049a1245ff6a20a78b6b6616560337816d23
        </div>
      </div>
    </div>
  );
}

export default Checkout;
