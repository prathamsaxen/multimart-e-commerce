import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
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
  useEffect(()=>{
    fetchProductDetails();
  },[id]);
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={product?.name} />
      <ProductDetails data={product} />
      {/* <ProductReviews selectedProduct={selectedProduct} /> */}
      {/* <section className="related-products"> */}
        {/* <Container> */}
          {/* <h3>You might also like</h3> */}
        {/* </Container> */}
        {/* <ShopList productItems={relatedProducts} /> */}
      {/* </section> */}
    </Fragment>
  );
};

export default Product;
