import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SeachBar/SearchBar";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import Loader from "../components/Loader/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    try {
      const status = await axios.get(`${process.env.REACT_APP_API}api/getItem`);
      if (status.status === 200) {
        // console.log(status);
        setProducts(status.data);
        setFilteredProducts(status.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title="Product" />
      {loading ? (
        <Loader />
      ) : (
        <section className="filter-bar">
          <Container className="filter-bar-contianer">
            <Row className="justify-content-center">
              <Col md={4}>
                {/* <FilterSelect setFilterList={products} /> */}
              </Col>
              <Col md={8}>
                <SearchBar
                  setProducts={setFilteredProducts}
                  products={products}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <ShopList productItems={filteredProducts} />
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Shop;
