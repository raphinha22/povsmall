import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/LOGO HKT RED.png";
import { useState } from "react";
import {X, Menu} from "lucide-react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "ទំព័រដើម",
    },
    {
      id: 2,
      path: "kind",
      title: "ប្រភេទម៉ូតូ",
    },
    {
      id: 3,
      path: "action",
      title: "រូបសកម្មភាព",
    },
    {
      id: 4,
      path: "location",
      title: "ព័ត៌មានបន្ថែម",
    },
  ];

  const [nav, setNav] =  useState(false);

  const HandleClick = () =>{
    setNav(!nav);
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[999]">
      <nav className="flex items-center justify-between px-[50px] h-[100px] bg-[#4c62bb]">
        <Link to={"/"}><img src={logo} alt="" className="md:w-[80px] w-[50px]" /></Link>
        <ul className="flex items-center space-x-10">
          {links.map(({ id, path, title }) => {
            return (
              <NavLink
                key={id}
                to={path}
                className="font-mainfont font-semibold text-white hidden md:block"
              >
                {title}
              </NavLink>
            );
          })}
        </ul>
        <button className="block md:hidden text-white" onClick={HandleClick}>
          {nav ? <X /> : <Menu />}
        </button>
      </nav>
      {nav && (
        <ul className="bg-black p-[20px] flex md:flex-row flex-col items-center md:space-x-10 md:gap-[0] gap-[30px]">
          {links.map(({ id, path, title }) => {
            return (
              <NavLink
                onClick={HandleClick}
                key={id}
                to={path}
                className="font-mainfont font-semibold text-white"
              >
                {title}
              </NavLink>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
