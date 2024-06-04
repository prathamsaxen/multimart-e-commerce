import { Fragment, useState, useEffect } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
// import { products, discoutProducts } from "../utils/products";
import axios from "axios";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const [products, setProducts] = useState([]);
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
  // const newArrivalData = products.filter(
  // (item) => item.category === "mobile" || item.category === "wireless"
  // );
  // const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={products} />
      <Section title="New Arrivals" bgColor="white" productItems={products} />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={products} />
    </Fragment>
  );
};

export default Home;
