import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Signin from "../components/signin/Signin";
import Signup from "../components/signup/Signup";
import Contactus from "../components/contactus/Contactus";
import Donate from "../components/donate/Donate";
import LandingPage from "../views/landingPage/LandingPage";
import Form from "../components/form/Form";
import Normal from "../components/form/Normal";

import Table from "../components/form/Table";
import Sponsor from "../views/sponsor/Sponsor";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<Normal/>} />

        <Route path="/table" element={<Table/>} />
        <Route path="/sponsor" element={<Sponsor/>} />




        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
