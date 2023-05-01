//import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";
import Nav from "./components/Navigation/Nav";
import Footer from "./pages/Footer/Footer";
import FormData from "./../src/FormData/FormData";
import ServiceDetails from "./pages/Services/ServiceDetail/ServiceDetails";
import MainNavigation from "./components/Layout/MainNavigation";
import AuthForm from "./components/Auth/AuthForm";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const currentUser = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/loginform" />;
  };

  return (
    <div className="App">
      <Nav />
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/aboutus" element={<About />}></Route> */}
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/formdata"
          å
          element={
            <RequireAuth>
              <FormData />
            </RequireAuth>
          }
        ></Route>
        <Route path="/loginform" element={<AuthForm />}></Route>
        <Route path="/services/:serviceId" element={<ServiceDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
