import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product-details.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (data, quantity) => {
    dispatch(addToCart({ product: data, num: quantity }));
    toast.success("Product has been added to cart!");
  };
  const { id } = useParams();
  const fetchProductDetails = async () => {
    try {
      const status = await axios.get(
        `${process.env.REACT_APP_API}api/getItems/${id}`
      );
      if (status.status === 200) {
        console.log(status);
        setData(status.data.item);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={data?.photo} alt="" />
          </Col>
          <Col md={6}>
            <h2>{data?.productName}</h2>
            <div className="rate">
              <div className="stars">
                {Array.from({ length: data.rating }).map((_, index) => (
                  <i key={index} className="fa fa-star"></i>
                ))}
              </div>
              <span>{data?.rating} Ratings</span>
            </div>
            <div className="info">
              <span className="price">${data?.price}</span>
              <span>Category:{data?.category}</span>
            </div>
            <p>{data?.description}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(data, quantity)}
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
