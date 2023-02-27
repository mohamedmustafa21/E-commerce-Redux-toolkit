import Logo from "../../assets/imgs/Logos/logo-pngwhite.png";

function Footer() {
  return (
<<<<<<< HEAD
    <div className='w-full h-[35vh] bg-[#2E4620] p-5  '>
      <div className='flex justify-around max-md:justify-between max-md:items-center py-5  max-md:relative'>
         <div className='p-5 mt-5  max-md:absolute max-md:top-[50%] max-md:left-0 '>
        <img className='w-32 max-md:w-16' src={Logo}  alt="" />
=======
    <div className="w-full bg-[#2E4620] p-5 ">
      <div className="grid grid-cols-2 sm:grid-cols-10 mx-auto py-5 place-items-stretch max-md:relative ">
        <div className="col-span-1 sm:col-span-2 p-5 mt-5  sm:w-64 hidden sm:block max-md:absolute max-md:top-[50%] max-md:left-0">
          <img className="w-full" src={Logo} alt="" />
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-[20px] font-[500] max-md:text-[15px]">
            RESOURCES
          </h1>
          <ul className="text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]">
            <li>Application</li>
            <li>Documentation</li>
            <li>Systems</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-[20px] font-[500] max-md:text-[15px]">
            PRICING
          </h1>
          <ul className="text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]">
            <li>Overview</li>
            <li>Premium Plans</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-[20px] font-[500] max-md:text-[15px]">
            COMPANY
          </h1>
          <ul className="text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]">
            <li>About Us</li>
            <li>Blog</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-[20px] font-[500] max-md:text-[15px]">
            SOCIAL
          </h1>
          <ul className="text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
>>>>>>> 7984262 (blah)
      </div>
    </div>
  );
}

export default Footer;
