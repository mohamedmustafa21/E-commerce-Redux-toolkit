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
    buyCart,
    error,
    favCart
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const [showInput, setShowInput] = useState(false);

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleCloseClick = () => {
    setShowInput(false);
  };


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };


  const cartItems = buyCart;
  const favItems = favCart;

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
  const [favBar, setfavBar] = useState(false);

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
      <div>
        
        {/* <i className="fa-solid fa-magnifying-glass mr-2" onClick={handleSearchClick}></i> */}
      </div>
      {/* {showInput && (
        <div>
          <input type="text" placeholder="Search..." className="mr-2" />
          <i className="fa-solid fa-times-circle" onClick={handleCloseClick}></i>
        </div>
      )} */}
      <div>
      <i onClick={()=>{
        setfavBar(!favBar)
        console.log(favBar)

      }} className="fa-solid fa-heart text-[25px] text-[red]"></i>
        <i
          onClick={() => setSideBar(!siderBar)}
          className={`fa-solid fa-cart-shopping ml-2 cursor-pointer rotate-12 ${
            color ? "text-white" : "text-[#2da252]"
          } text-[25px]  relative`}
        >
          {/* <p className="absolute top-3 right-2 text-[red]">0</p> */}
        </i>
      </div>
      
    </div>

                {/* Cart Side Bar */}
    <div
  className={`sidebar transform ${siderBar ? "" : "hidden translate-x-full"}  h-[100vh] overflow-y-scroll overflow-x-hidden  max-md:w-[70vw]  w-[30vw] bg-cover bg-no-repeat bg-center bg-opacity-50 z-50 absolute top-0 right-0   `}
  style={{ backgroundImage: `url(${bgSideBar})`, transition: "transform 0.3s ease-in-out" }}
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
            <div key={item.id} className="grid grid-cols-2 justify-between items-center">
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

          </>
        ))}
      </>
    ) : (
      <>''</>
    )}
  </div>
  <div className="w-full flex justify-center text-black ">
    <p className="text-[20px font-bold]">
      Total: {buyCart.cartTotalAmount}$
    </p>
  </div>
</div>
{/* End */}
{/* Favourite Car */}
<div
  className={`sidebar transform ${favBar ? "" : "hidden translate-x-full"}  h-[100vh] overflow-y-scroll overflow-x-hidden  max-md:w-[70vw]  w-[30vw] bg-cover bg-no-repeat bg-center bg-opacity-50 z-50 absolute top-0 right-0   `}
  style={{ backgroundImage: `url(${bgSideBar})`, transition: "transform 0.3s ease-in-out" }}
>
  <div className="float-right" onClick={() => setfavBar(!favBar)}>
    <i className="fa-solid fa-xmark text-black text-[25px] p-5 font-[500] cursor-pointer"></i>
  </div>
  <div className="w-full flex justify-center">
    <img className="w-[150px] h-auto" src={Logo} alt="" />
  </div>
  <h1 className="text-center uppercase mt-2 font-[700]">Your Favourite Products </h1>
  <div className="text-white mt-[5%] flex-col justify-center items-center">
    {favItems ? (
      <>
    
        {favItems.cartItems.map((item) => (
          <>
            <div key={item.id} className="grid grid-cols-2 justify-between items-center">
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

          </>
        ))}
      </>
    ) : (
      <>''</>
    )}
  </div>
  {/* <div className="w-full flex justify-center text-black ">
    <p className="text-[20px font-bold]">
      Total: {buyCart.cartTotalAmount}$
    </p>
  </div> */}
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
