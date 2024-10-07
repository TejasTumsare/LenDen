import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "../componentSell/ContextForListing";
import About from "../About/AboutUs";
import Home from "./Home";
import Contact from "../Contact/ContactUs";
import LoginForm from "../Login/Login";
import SignUpForm from "../Login/SignUp";
import ForgotPassword from "../Login/ForgotPassword";
import SellForm from "../componentSell/SellComponent";
import FeedbackForm from "../Login/Feedback";
import CarListingComponent from "../ProductListing/CarListing";
import BikeListingComponent from "../ProductListing/BikeListing";
import MobileListingComponent from "../ProductListing/MobileListing";
import ElectronicsListingComponent from "../ProductListing/ElectronicListing";

export default function LendenRouter() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/sellform" element={<SellForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/cars" element={<CarListingComponent />} />
          <Route path="/bikes" element={<BikeListingComponent />} />
          <Route path="/mobiles" element={<MobileListingComponent />} />
          <Route path="/electronics" element={<ElectronicsListingComponent />} />
          <Route path="/sell" element={<SellForm />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}
