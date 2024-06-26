import React from "react";
import "../index.css";


function Checkout() {
  return (
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
        </div>
      </div>
    </div>
  );
}

export default Checkout;
