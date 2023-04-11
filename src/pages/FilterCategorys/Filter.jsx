import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterByCategory, getData, singleProducts } from "./../../store/api.slice";
import Container from "../../components/Global/Container";
import { searchByCategory } from "./../../store/api.slice";
import { Link, useLocation } from "react-router-dom";

function Filter() {
  const { categoryFilter, userPath,productsSearch, } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  
  const userselect = location.pathname;
  const lastPart = userselect.split("/").pop();
  // const lastNumber = parseInt(lastPart);


  useEffect(() => {
    dispatch({type: 'book/setUserPath', payload: location.pathname.slice(1)})
    
  }, [location, dispatch])

  useEffect(() => {
    dispatch(filterByCategory(lastPart))
    
  }, [lastPart, dispatch])

  // console.log(categoryFilter)
  useEffect(() => {
    if (searchTerm) {
      dispatch(searchByCategory(searchTerm.toLowerCase()));
    }
  }, [dispatch, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = Array.isArray(categoryFilter) ? categoryFilter.filter((product) =>
  product.title.toLowerCase().includes(searchTerm) ||
  product.description.toLowerCase().includes(searchTerm) ||
  product.brand.toLowerCase().includes(searchTerm)
) : [];

if (!categoryFilter) {
  return <>
  <div className="flex items-center justify-center h-[50vh]">
     <div className="p-4 mb-4 text-[20px] text-red-800 rounded-lg font-[700]  bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className=" font-[cairo]">Please Try Again Later</span> 
  </div>
 
</div>
  </>
}
  return (
    <Container>
      <div>
        
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required  value={searchTerm}
              onChange={handleSearch} />
        <button  type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {/* <h1 className="col-span-full mb-8">{userPath}</h1> */}
        {filteredProducts.map((item,index) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="relative">
               <a href="#">
              <img
                className="w-full h-48  object-contain rounded-t-lg relative"
                src={item.thumbnail}
                alt=""
              />
              
            </a>
            <div className="bg-[#f7ba00] p-1 rounded-r-[10px] absolute bottom-2">
              <p className="font-[500]">{item.rating} <i className="fa-solid fa-star text-white"></i></p>
            </div>
            </div>
           
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title.slice(0,15)}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description.slice(0, 20)}
              </p>
              <Link
              onClick={()=>{
                dispatch(singleProducts(item.id));
                  
                
              }}
                to={`${item.id}`}
                className="inline-flex items-center  justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#3bb214] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Filter;
