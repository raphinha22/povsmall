import logo from "../assets/image/LOGO HKT RED.png";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-[100%] h-[80px] bg-[#4c62bb] fixed left-0 right-0 bottom-0 flex items-center justify-center gap-[20px]">
      <img src={logo} alt="LOGO" className="w-[70px]" />
      <span className="h-[60px] w-[5px] bg-[red] rounded-xl"></span>
      <span className="text-[white]">
        <MapPin />
      </span>
      <h5 className="font-mainfont text-white text-xl">ផ្ទះលេខ 300-302 ផ្លូវ 274 សង្កាត់អូឡាំពិក ខណ្ឌបឹងកេងកង រាជធានីភ្នំពេញ</h5>
    </div>
  );
};

export default Footer;
