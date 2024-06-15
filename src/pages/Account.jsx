import React from "react";

function Account() {
  return (
    <div className="container Account">
      <h2 className="py-4">Login & Security</h2>
      <div className="detailsForm">
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">
              Full Name (First and Last name)
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
          <div class="col-12">
            <button class="detailsFormButton" type="submit">
              Edit details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
