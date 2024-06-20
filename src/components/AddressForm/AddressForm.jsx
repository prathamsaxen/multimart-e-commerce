import React from "react";
import { Modal, Button } from "react-bootstrap";

function AddressForm({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container formCard">
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
                  <div class="invalid-feedback">
                    Please choose a mobile Number
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <label for="validationCustom05" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid Country
                </div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom03" class="form-label">
                  Flat/House No.
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a Flat / House Number
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom05" class="form-label">
                  Area
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid Area</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Landmark
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid Landmark
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid State</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip</div>
              </div>
              <div className="cols-12">
                <div class="form-check cols-12">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Make this my default address
                  </label>
                </div>
              </div>
              <div class="col-12">
                {/* <Button class="addressFormButton" type="submit">
                  add Address
                </Button> */}
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Address
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddressForm;

function EditAddressForm({ showEdit, handleCloseEdit, selectedAddress }) {
  console.log(selectedAddress);
  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container formCard">
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
                  <div class="invalid-feedback">
                    Please choose a mobile Number
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <label for="validationCustom05" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid Country
                </div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom03" class="form-label">
                  Flat/House No.
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a Flat / House Number
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom05" class="form-label">
                  Area
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid Area</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Landmark
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid Landmark
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid State</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip</div>
              </div>
              <div className="cols-12">
                <div class="form-check cols-12">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Make this my default address
                  </label>
                </div>
              </div>
              <div class="col-12">
                {/* <Button class="EditAddressFormButton" type="submit">
                  add Address
                </Button> */}
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseEdit}>
            Add Address
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { EditAddressForm };
