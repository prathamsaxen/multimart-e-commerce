import { Fragment, useState, useEffect } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import axios from "axios";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      const status = await axios.get(`${process.env.REACT_APP_API}api/getItem`);
      if (status.status === 200) {
        setProducts(status.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useWindowScrollToTop();
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <SliderHome />
          <Wrapper />
          <Section
            title="Big Discount"
            bgColor="#f6f9fc"
            productItems={products.filter(
              (product) => product.field === "Big Discounts"
            )}
          />
          <Section
            title="New Arrivals"
            bgColor="white"
            productItems={products.filter(
              (product) => product.field === "New Arrivals"
            )}
          />
          <Section
            title="Best Sales"
            bgColor="#f6f9fc"
            productItems={products.filter(
              (product) => product.field === "Best Sales"
            )}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
