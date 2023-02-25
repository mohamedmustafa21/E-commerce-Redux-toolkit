import React, { useState,useEffect } from "react";
import Logo from "../../Assets/logo-png.png";
import Eg from "../../Assets/egypt.png";

function Navbar() {
  let links = [
    { name: "All Category", link: "/all"},
    { name: "Electronics", link: "/electronics" },
    { name: "Mobiles", link: "/mobiles" },
    { name: "Men", link: "/men" },
    { name: "Women", link: "/women" },
    { name: "Beauty&Health", link: "/beautyHealth" },
    { name: "Baby&Toys", link: "/babyToys" },
    { name: "Supermarket", link: "/supermarket" },
  ];

  // Menu Open And Close
  let [open,setOpen] = useState(true);

  // Handle Change The Navbar Color when user scroll down

    const [color,setColor] = useState(false)
    const changeCololr = () =>{
      if(window.pageYOffset >= 90){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener('scroll',changeCololr)

  return (
    <div className="">
      <div className={color ? 'bg-[rgba(72,122,72,0.9)] text-white   w-full fixed top-0 left-0 z-10': 'bg-transparent shadow-md w-full fixed top-0 left-0 z-10'} >
        <div className="flex  py-2 justify-between items-center">
          <div className="items-center md:px-10 px-7">
            <span className="mr-1 pt-1 flex  items-center">
              <div className=" ">
              <div className="logo flex items-center md:px-10 px-7">
            <span className="mr-1 pt-1 flex  items-center">
              <img src={Logo} className="w-24" alt="" />
            </span>
           
          </div>
              </div>
            </span>
          </div>
         
          <div className=" icons  items-center px-7 flex  max-md:mr-[50px]">
            <i className="fa-solid fa-magnifying-glass mr-1"></i>
            <i className="fa-regular fa-heart mr-1"></i>
            <i className="fa-solid fa-cart-shopping mr-1"></i>
            <i className="fa-solid fa-user-plus"></i>
          </div>
        </div>
        
        <div className="category flex justify-center items-center     ">
          <ul className={`md:flex items-center md:pb-0 pb  absolute md:static max-md:bg-white mb-3 left-0 w-full 
          md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[-500px]': 'top-[60px] -z-40 '}`}>
            {links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-[15px] md:my-0 my-7 font-medium hover:text-[#6DD471] max-md:text-black"
              >
                <a href={link.link}>
                  {link.name} {link.icon ? <><i className={link.icon}></i></> : <></>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={()=>setOpen(!open)} className="absolute right-[5%] top-[30%] cursor-pointer z-20 md:hidden ">
            <i className={open ? "fa-solid fa-bars " : "fa-solid fa-xmark "}  ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
