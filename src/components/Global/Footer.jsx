import Logo from "../../assets/imgs/Logos/logo-pngwhite.png";

function Footer() {
  return (
    <div className="w-full bg-[#2E4620] p-5 ">
      <div className="grid grid-cols-2 sm:grid-cols-10 mx-auto py-5 place-items-stretch max-md:relative ">
        <div className="col-span-1 sm:col-span-2 px-5 mt-5 sm:w-64 hidden lg:block max-md:absolute max-md:top-[50%] max-md:left-0">
          <img className="w-full" src={Logo} alt="" />
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-xl font-[500] max-md:text-2xl mb-2">
            RESOURCES
          </h1>
          <ul className="text-[#e4e3e3] text-lg font-[300] max-md:text-base">
            <li>Application</li>
            <li>Documentation</li>
            <li>Systems</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-xl font-[500] max-md:text-2xl mb-2">
            PRICING
          </h1>
          <ul className="text-[#e4e3e3] text-lg font-[300] max-md:text-base">
            <li>Overview</li>
            <li>Premium Plans</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-xl font-[500] max-md:text-2xl mb-2">
            COMPANY
          </h1>
          <ul className="text-[#e4e3e3] text-lg font-[300] max-md:text-base">
            <li>About Us</li>
            <li>Blog</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="px-5 py-2 col-span-1 sm:col-span-2">
          <h1 className="text-[white] text-xl font-[500] max-md:text-2xl mb-2">
            SOCIAL
          </h1>
          <ul className="text-[#e4e3e3] text-lg font-[300] max-md:text-base">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
