import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
// import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import axios from "axios";

const Product = () => {
  const { name,id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [allproducts, setAllProducts] = useState([]);
  const fetchProductDetails = async () => {
    try {
      const status = await axios.get(
        `${process.env.REACT_APP_API}api/getItems/${id}`
      );
      if (status.status === 200) {
        console.log(status);
        setProduct(status.data.item);
        console.log(product);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(name,id);
  const fetchAllProducts = async () => {
    try {
      const status = await axios.get(`${process.env.REACT_APP_API}api/getItem`);
      if (status.status === 200) {
        setAllProducts(status.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProductDetails();
    fetchAllProducts();
  }, [id]);
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={product?.name} />
      <ProductDetails data={product} />
      {/* <ProductReviews data={product} /> */}
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={allproducts} />
      </section>
    </Fragment>
  );
};

export default Product;
