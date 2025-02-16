import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Layouts = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}  
    </div>
  );
};

export default Layouts;
