import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import AuthenticationContext from "./context/AuthenticationContext";
// import Checkout from "./pages/Checkout";
// import RefundPolicy from "./pages/RefundPolicy";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const User = lazy(() => import("./pages/User"));
const Orders = lazy(() => import("./pages/Orders"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Account = lazy(() => import("./pages/Account"));
const Addresses = lazy(() => import("./pages/Addresses"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const TermsOfServices= lazy(() => import("./pages/TermsOfServices"));
const Error404= lazy(() => import("./pages/Error404"));

function App() {
  const [login, setLogin] = useState(false);
  const [loading,setLoading]=useState(true);
  const fetchUserByToken = async () => {
    setLoading(true);
    try { 
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_API}api/authUser`,
        options
      );
      if (response.status === 200) {
        console.log(response.data);
        setLogin(response.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUserByToken();
  }, []);
  return (
    <Fragment>
    {
      loading?
      <Loader/>
      :<AuthenticationContext.Provider value={{ login, setLogin }}>
      <Suspense fallback={<Loader />}>
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <NavBar />
          <Routes>
            {login ? (
              <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:name/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/me" element={<User />} />
                <Route path="/me/orders" element={<Orders />} />
                <Route path="/me/checkout" element={<Checkout />} />
                <Route path="/me/account" element={<Account />} />
                <Route path="/me/addresses" element={<Addresses />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/terms-of-services" element={<TermsOfServices />} />
                <Route path="*" element={<Error404/>}/>

              </Fragment>
            ) : (
              <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:name/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/terms-of-services" element={<TermsOfServices />} />
                <Route path="*" element={<Error404/>}/>                

              </Fragment>
            )}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </AuthenticationContext.Provider>
    }
    </Fragment>
  );
}

export default App;
