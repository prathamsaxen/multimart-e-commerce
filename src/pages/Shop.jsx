import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
// import { Fragment } from "react";
// import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const status = await axios.get(`${process.env.REACT_APP_API}api/getItem`);
      if (status.status === 200) {
        // console.log(status);
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
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          {/* <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={products} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={products} />
            </Col>
          </Row> */}
        </Container>
        <Container>
          <ShopList productItems={products} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
