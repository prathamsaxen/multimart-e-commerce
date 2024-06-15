import React from "react";

function Contact() {
  return (
    <div className="Contact container">
      <h2 className="py-4">Contact Us</h2>
      <div className="contactForm">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-12">
            <label for="validationCustomUsername" class="form-label">
              Phone Number
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">
                +91
              </span>
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a mobile Number</div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@gmail.com"
            />
          </div>
          <div class="form-floating ">
            <textarea
              class="form-control "
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
          <div class="col-12">
            <button class="detailsFormButton contactButton" type="submit">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
