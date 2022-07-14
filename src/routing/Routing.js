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
import Adopt from "../views/adopt/Adopt";
import About from "../views/about/About";
import ContactDetails from "../components/contactus/ContactDetails";
import Snack from "../components/snack/Snack";
import Error from "../components/error/Error";

import Table from "../components/form/Table";
import Sponsor from "../views/sponsor/Sponsor";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} replace={"/"} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<Normal />} />

        <Route path="/snack" element={< Snack/>} />
        <Route path="/*" element={< Error/>} />



        {/* <Route path="/table" element={<Table />} />
        <Route path="/sponsor" element={<Sponsor />} /> */}

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/adopt" element={<Adopt />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus/:id" element={<ContactDetails />}></Route>
       
        {/* <Route path="/image" element={< ImageSlider />}></Route> */}


      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
