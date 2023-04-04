// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/Home/logo-png.png";
import LogoWhite from "../../assets/imgs/Home/logo-pngwhite.png";
import { useSelector, useDispatch } from "react-redux";
import bgSideBar from "../../assets/imgs/Sidebar/pexels-karolina-grabowska-5650028.jpg"

function Navbar() {
  const {
    categoryFilter,
    userPath,
    productInfo,
    products,
    isLoading,
    addToCart,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };


  const cartItems = addToCart;
  // useEffect(() => {

  //   dispatch(getData());
  // }, [dispatch, cart]);

  let links = [
    { name: "All Category", link: "/All" },
    { name: "smartphones", link: "/smartphones" },
    { name: "laptops", link: "/laptops" },
    { name: "fragrances", link: "/fragrances" },
    { name: "skincare", link: "/skincare" },
    { name: "groceries", link: "/groceries" },
    { name: "Decoration", link: "/home-decoration" },
  ];

  // Menu Open And Close
  let [open, setOpen] = useState(true);

  // Handle Change The Navbar Color when user scroll down

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.pageYOffset >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [siderBar, setSideBar] = useState(false);
  // useEffect(() => {
  //   if (searchTerm) {
  //     dispatch(searchByCategory(searchTerm.toLowerCase()));
  //   }
  // }, [dispatch, searchTerm]);

  
  return (
    <>
      <div
        className={
          color
            ? "bg-[rgba(72,122,72,0.9)] sticky text-white w-full  top-0 left-0 z-10"
            : "bg-transparent w-full sticky top-0 left-0 z-10"
        }
      >
        <div className="flex  py-2 justify-between items-center">
          <div className="items-center md:px-10 px-7">
            <span className="mr-1 pt-1 flex  items-center">
              <div className=" ">
                <div className="logo flex items-center md:px-10 px-7">
                  <span className="mr-1 pt-1 flex  items-center">
                    <Link to="/">
                      {" "}
                      <img
                        src={color ? LogoWhite : Logo}
                        className="w-24"
                        alt=""
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </span>
          </div>

          <div className="items-center px-7 flex  max-md:mr-[50px]">
            <div
             
            >
              {/* {
                searchOpen ? 
                <>
                 <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                 
                </div>
              </form>
                </>:<></>
              } */}
             
              {" "}
              <i 
              //  onClick={() => {
              //   setSearchOpen(!searchOpen)
              // }}
              className={`${searchOpen ? "":"fa-solid fa-magnifying-glass mr-2"}`}></i>
            </div>
            {/* <i className="fa-regular fa-heart mr-2"></i> */}
            <div>
              <i
                onClick={() => setSideBar(!siderBar)}
                className={`fa-solid fa-cart-shopping ml-2 cursor-pointer rotate-12 ${
                  color ? "text-white" : "text-[#2da252]"
                } text-[25px]  relative`}
              >
                {/* <p className="absolute top-3 right-2 text-[red]">0</p> */}
              </i>
            </div>
            {/* <i className="fa-solid fa-user-plus"></i> */}
          </div>
                
<div
  className={`sidebar h-[100vh] overflow-y-scroll overflow-x-hidden max-md:w-[50vw]  w-[30vw] bg-cover bg-no-repeat bg-center bg-opacity-50 z-50 absolute top-0 right-0 transform  ${
    siderBar ? "" : "translate-x-full"
  } transition-transform duration-300 ease-in-out`}
  style={{ backgroundImage: `url(${bgSideBar})` }}
>
  <div className="float-right" onClick={() => setSideBar(!siderBar)}>
    <i className="fa-solid fa-xmark text-black text-[25px] p-5 font-[500] cursor-pointer"></i>
  </div>
  <div className="w-full flex justify-center">
    <img className="w-[150px] h-auto" src={Logo} alt="" />
  </div>
  <div className="text-white mt-[5%] flex-col justify-center items-center">
    {cartItems ? (
      <>
        {cartItems.cartItems.map((item) => (
          <>
            <div className="grid grid-cols-2 justify-between items-center">
              <div>
                <img
                  src={item.thumbnail}
                  className="w-[100px] rounded-[50%]"
                  alt=""
                />
              </div>
              <div className=" flex-col items-center justify-center text-center text-black">
                <p className="">{item.title}</p>
                <p>{item.price} $</p>
              </div>
            </div>
            <div></div>
          </>
        ))}
      </>
    ) : (
      <>''</>
    )}
  </div>
  <div className="w-full flex justify-center text-black ">
    <p className="text-[20px font-bold">
      Total: {cartItems.cartTotalAmount}$
    </p>
  </div>
</div>

        </div>

        <div className="category flex justify-center items-center">
          <ul
            className={`md:flex items-center md:pb-0 absolute md:static max-md:bg-white mb-3 left-0 w-full 
          md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in-out ${
            open ? "top-[-500px]" : "top-[60px] -z-40"
          }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer md:ml-8 text-[15px] md:my-0 my-7 font-medium hover:text-[#6DD471] duration-150 max-md:text-black"
                // onClick={(e)=>{
                //   console.log(e.target)
                // }}
              >
                <Link
                  onClick={() => {
                    setOpen(true);
                  }}
                  to={link.link}
                >
                  {link.name}
                  {link.icon ? (
                    <>
                      <i className={link.icon}></i>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-[5%] top-[30%] cursor-pointer z-20 md:hidden "
        >
          <i className={open ? "fa-solid fa-bars " : "fa-solid fa-xmark "}></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
