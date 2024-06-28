import { toast } from "react-toastify";

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

const addressValidation = (inputAddress) => {
  if (!inputAddress.name) {
    toast.error("Full Name is required");
    return false;
  } else if (!nameRegex.test(inputAddress.name)) {
    toast.error("Full Name can only contain alphabetic characters and spaces");
    return false;
  } else if (
    !inputAddress.mobileNumber ||
    !/^\d{10}$/.test(inputAddress.mobileNumber)
  ) {
    console.log(inputAddress.mobileNumber);
    toast.error("Valid 10-digit mobile number is required");
    return false;
  } else if (!inputAddress.country) {
    toast.error("Country is required");
    return false;
  } else if (!inputAddress.flat) {
    toast.error("Flat/House No. is required");
    return false;
  } else if (!inputAddress.area) {
    toast.error("Area is required");
    return false;
  } else if (!inputAddress.landmark) {
    toast.error("Landmark is required");
    return false;
  } else if (!inputAddress.city) {
    toast.error("City is required");
    return false;
  } else if (!inputAddress.state) {
    toast.error("State is required");
    return false;
  } else if (!inputAddress.pincode || !/^\d{6}$/.test(inputAddress.pincode)) {
    toast.error("Valid 6-digit pincode is required");
    return false;
  }
  return true;
};

export { addressValidation };
