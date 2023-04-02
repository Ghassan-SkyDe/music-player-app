import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = () => (
  <div className="mt-10 px-3">
    {links.map((item) => (
      <NavLink
        to={item.to}
        end
        key={item.name}
        className="my-8 flex flex-row items-center justify-start text-sm 
       font-medium text-gray-400 hover:text-cyan-400"
      >
        <item.icon className="mr-2 h-6 w-6" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden w-[240px] select-none flex-col bg-[#191624] py-4 md:flex">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer flex-col items-center justify-around"
        >
          <img src={logo} alt="logo" className="h-14 w-full object-contain" />
          <h6 className="gradiant-text text-white">Online Music Player</h6>
        </div>
        <NavLinks />
      </div>

      <div className="absolute top-6 right-3 z-10 block select-none md:hidden">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="mr-2 h-8 w-8 text-white"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="mr-2 h-8 w-8 text-white"
          />
        )}
      </div>
      <div
        className={`smooth-transition absolute top-0 z-10 
    h-screen w-1/2 bg-gradient-to-tl 
    from-white/10 to-[#483D8B] p-6 backdrop-blur-lg md:hidden 
    ${mobileMenuOpen ? "left-0" : "-left-full"}`}
      >
        <img src={logo} alt="logo" className="h-14 w-full object-contain" />
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
