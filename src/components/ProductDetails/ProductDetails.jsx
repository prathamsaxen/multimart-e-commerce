import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useDispatch } from "react-r edux";
// import { addToCart } from "../../app/features/cart/cartSlice";
import { toast } from "react-toastify";
import "./product-details.css";
import axios from "axios";

const ProductDetails = ({ data }) => {
  // const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);
  // const handleQuantityChange = (e) => {
  //   setQuantity(e.target.value);
  // };
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
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in adding product to cart");
    }
  };
  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={data?.photo} alt="Error in Loading" />
          </Col>
          <Col md={6}>
            <h2>{data?.name}</h2>
            <div className="rate">
              <div className="stars">
                {Array.from({ length: data?.rating }).map((_, index) => (
                  <i key={index} className="fa fa-star"></i>
                ))}
              </div>
              <span>{data?.rating} Ratings</span>
            </div>
            <div className="info">
              <span className="price">${data?.price}</span>
              <span>Category : {data?.category}</span>
            </div>
            <p>{data?.description}</p>
            {/* <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            /> */}
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(data)}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
