import { toast } from "react-toastify";

// Regex patterns
const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const mobileNumberRegex = /^\d{10}$/;
const pincodeRegex = /^\d{6}$/;
const countryRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
const flatNumberRegex = /^[A-Za-z0-9\s\-\/]+$/;
const areaRegex = /^[A-Za-z0-9\s\-,]+$/;
const landmarkRegex = /^[A-Za-z0-9\s\-,]+$/;
const stateRegex = /^[A-Za-z\s]+$/;

const addressValidation = (inputAddress) => {
  if (!inputAddress.name) {
    toast.error("Full Name is required");
    return false;
  } else if (!nameRegex.test(inputAddress.name)) {
    toast.error("Full Name can only contain alphabetic characters and spaces");
    return false;
  } else if (!inputAddress.mobileNumber) {
    toast.error("Mobile number is required");
    return false;
  } else if (!mobileNumberRegex.test(inputAddress.mobileNumber)) {
    toast.error("Valid 10-digit mobile number is required");
    return false;
  } else if (!inputAddress.country) {
    toast.error("Country is required");
    return false;
  } else if (!countryRegex.test(inputAddress.country)) {
    toast.error("Country can only contain alphabetic characters, spaces, and hyphens");
    return false;
  } else if (!inputAddress.flat) {
    toast.error("Flat/House No. is required");
    return false;
  } else if (!flatNumberRegex.test(inputAddress.flat)) {
    toast.error("Flat/House No. can only contain alphanumeric characters, spaces, hyphens, and slashes");
    return false;
  } else if (!inputAddress.area) {
    toast.error("Area is required");
    return false;
  } else if (!areaRegex.test(inputAddress.area)) {
    toast.error("Area can only contain alphanumeric characters, spaces, hyphens, and commas");
    return false;
  } else if (!inputAddress.landmark) {
    toast.error("Landmark is required");
    return false;
  } else if (!landmarkRegex.test(inputAddress.landmark)) {
    toast.error("Landmark can only contain alphanumeric characters, spaces, hyphens, and commas");
    return false;
  } else if (!inputAddress.city) {
    toast.error("City is required");
    return false;
  } else if (!inputAddress.state) {
    toast.error("State is required");
    return false;
  } else if (!stateRegex.test(inputAddress.state)) {
    toast.error("State can only contain alphabetic characters and spaces");
    return false;
  } else if (!inputAddress.pincode) {
    toast.error("Pincode is required");
    return false;
  } else if (!pincodeRegex.test(inputAddress.pincode)) {
    toast.error("Valid 6-digit pincode is required");
    return false;
  }
  return true;
};

export { addressValidation };
