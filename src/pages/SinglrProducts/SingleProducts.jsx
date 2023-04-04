import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, singleProducts } from "./../../store/api.slice";
import Container from "../../components/Global/Container";
import { useLocation } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./single.css";
import Cart from "../../components/Global/Cart/Cart";
import { addToCart } from "./../../store/api.slice";


function SingleProducts() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    updateCartTotals();
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      updateCartTotals();
    }
  };


  const { categoryFilter, userPath, productInfo, products } =
    useSelector((state) => state.products);
  const location = useLocation();

  const userselect = location.pathname;
  const lastPart = userselect.split("/").pop();
  const lastNumber = parseInt(lastPart);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(singleProducts(lastNumber));
    dispatch(getData());
  }, [dispatch, lastNumber]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleProductClick = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
  };

  if (!productInfo) {
    return <h1>Loading ....</h1>;
  }

  const thumbnail = productInfo.thumbnail || productInfo.images[0];
  const renderStars = (rating) => {
    const stars = Array(5)
      .fill()
      .map((_, index) => {
        if (index < Math.floor(rating)) {
          return (
            <i key={index} className="fa-solid fa-star text-[#EECA16]"></i>
          );
        } else if (index < Math.ceil(rating)) {
          return (
            <i
              key={index}
              className="fa-solid fa-star-half-stroke text-[#EECA16]"
            ></i>
          );
        } else {
          return <i key={index} className="fa-regular fa-star"></i>;
        }
      });
    return stars;
  };

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    console.log(`User is at position (${x}, ${y}) relative to the image.`);
  };


    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
    }

  return (
    <Container>
      {/* <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[20px] mr-auto">{productInfo.title}</h1>
      </div> */}
      <div className="grid grid-cols-2  md:grid-cols-2 gap-4 max-md: mb-4 mt-4 max-md:flex max-md:flex-col">
        <div className=" justify-center items-center">
          <div className="flex mt-2 items-center justify-center">
            {/* Small Image */}
            <div className="flex-col">
              {productInfo.images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className="w-20 h-20 cursor-pointer "
                  src={image}
                  alt={`image${index}`}
                />
              ))}
            </div>
                {/* Bid Image */}
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "product image",
                  isFluidWidth: true,
                  src: selectedImage || thumbnail,
                },
                largeImage: {
                  src: selectedImage || thumbnail,
                  
                  width: 1000,
                  height: 1000,
                },
                shouldUsePositiveSpaceLens: true,
                lensStyle: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
                hoverDelayInMs: 50,
                hoverOffDelayInMs: 100,
                enlargedImageContainerStyle: {
                  zIndex: 9999,
                },
              }}
            />
          </div>
        </div>
        <div className=" mt-2 box-border  ">
          <div>
            <div className="">
              <div className="flex justify-around items-center">
                <h1 className="  font-[700] text-[35px]">{productInfo.title}</h1>
                <i className="fa-regular fa-heart font-[700] text-[30px] ml-5 text-black"></i>
              </div>
              <div className="flex justify-around items-center">
                <p className="font-[700] text-[30px]">{productInfo.price} $</p>
                <div className="rating">{renderStars(productInfo.rating)}</div>
              </div>
              <hr />
              <div className="desc flex justify-center items-center text-center text-[20px] p-7">
                <h1 className="w-[70%]">{productInfo.description}</h1>
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center ">
              <div className="p-3 bg-[#D9D9D9] rounded-lg mt-3 text-black">
                  <button onClick={decrement}><i className="fa-solid fa-trash-can mr-2 cursor-pointer"></i></button>
                  <span className="mr-2">{count}</span>
                  <button onClick={increment}><i className="fa-sharp fa-solid fa-plus cursor-pointer"></i></button>
                </div>
                <button onClick={()=> handleAddToCart(productInfo)}
                  className="bg-[#E8C851]  text-black font-bold py-2 px-4 rounded mt-3"
                  
                >
                  Add To Cart <i className="fa-sharp fa-solid fa-cart-plus"></i>
                </button>
                {/* <div className="ml-3">{count} in cart</div> */}
               
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Container>
  );
}

export default SingleProducts;
