import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { toast } from "react-toastify";
import AuthenticationContext from "../../context/AuthenticationContext";
import "./product-card.css";

const ProductCard = ({ title, productItem }) => {
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.name.replace(/\s+/g, "-")}/${productItem._id}`);
  };
  const { login, fetchUserByToken, fetchCartLength } = useContext(
    AuthenticationContext
  );
  const handelAdd = async (productItem) => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API}api/cart`,
        { product: productItem },
        options
      );
      if (response.status === 200) {
        toast.success("Product has been added to cart!");
        fetchCartLength();
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in adding product to cart");
    }
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}10 % Off</span>
      ) : null}
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.photo}
        alt=""
      />
      {/* <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div> */}
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.name}</h3>
        <div className="rate">
          <div className="rate">
            {Array.from({ length: productItem.rating }).map((_, index) => (
              <i key={index} className="fa fa-star"></i>
            ))}
          </div>
        </div>
        <div className="price">
          <h4>₹ {productItem.price}</h4>
          {login ? (
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(productItem)}
            >
              <ion-icon name="add"></ion-icon>
              Add to Cart
            </button>
          ) : (
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => router("/login?callbackurl=shop")}
            >
              <ion-icon name="add"></ion-icon>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
