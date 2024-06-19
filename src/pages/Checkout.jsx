import React from "react";
import "../index.css";

function Checkout() {
  return (
    <div className="container checkout">
      <div className="left">
        <div className="upper">
          <div className="checkoutContact">
            <p className="firstWidth">Contact</p>
            <p className="secondWidth">forelsketsteam@gmail.com</p>
            <button>Change</button>
          </div>
          <div className="checkoutShip">
            <p className="firstWidth">Ship to</p>
            <p>1/305 Naurangabad Chhawani, naurangabad, ALIGARH</p>
            <button>Change</button>
          </div>
        </div>
        <div className="lower">
        <h3>Payment Method</h3>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Cash On Delivery
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
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
