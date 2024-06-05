import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
// import Login from "./pages/Login";/
// import SignUp from "./pages/SignUp";
import { Fragment, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AuthenticationContext from "./context/AuthenticationContext";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const User = lazy(() => import("./pages/User"));

function App() {
  const [login, setLogin] = useState(true);

  return (
    <AuthenticationContext.Provider value={{login,setLogin}}>
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
        <NavBar/>
        <Routes>
          {login ? (
            <Fragment>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/me" element={<User />} />
            </Fragment>
          ) : (
            <Fragment>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Fragment>
          )}
        </Routes>
        <Footer />
      </Router>
    </Suspense>
    </AuthenticationContext.Provider>
  );
}

export default App;
