import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  singleProducts,
  addToCart,
  addToFav,
} from "./../../store/api.slice";
import Container from "../../components/Global/Container";
import { useLocation } from "react-router-dom";
import "./single.css";
//

// Hover Images

function useMagnify({ magnifyTimes = 1.1, animationDuration = "0.2s" }) {
  const ref = useRef(null);
  //
  useEffect(() => {
    if (!ref.current) return;

    const state = { src: undefined, ratio: undefined, imgWidth: undefined };
    const el = ref.current;

    Object.assign(el.style, {
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
    });

    const handleEndEvent = () => {
      Object.assign(el.style, {
        backgroundPosition: "center",
        backgroundSize: "100%",
        transition: `background-size ${animationDuration} ease-out, background-position ${animationDuration} ease-out`,
      });
    };

    const handleMoveEvent = (e) => {
      e.preventDefault();

      const boxWidth = el.clientWidth,
        xPos = e.changedTouches
          ? e.changedTouches[0].pageX
          : e.pageX - el.offsetLeft,
        yPos = e.changedTouches
          ? e.changedTouches[0].pageY
          : e.pageY - el.offsetTop;

      const xPercent = `${xPos / (boxWidth / 100)}%`,
        yPercent = `${yPos / ((boxWidth * state.ratio) / 100)}%`;

      Object.assign(el.style, {
        backgroundPosition: `${xPercent} ${yPercent}`,
        transition: `background-size ${animationDuration} ease-out`,
        backgroundSize: `${state.imgWidth * magnifyTimes}px`,
      });
    };

    const getImageRatio = () => {
      if (!el || state.src) return;
      state.src = window
        .getComputedStyle(el, false)
        .backgroundImage.slice(4, -1)
        .replace(/"/g, "");
      const img = new Image();
      img.src = state.src;

      img.onload = () => {
        state.ratio = img.naturalHeight / img.naturalWidth;
        state.imgWidth = img.naturalWidth;

        el.addEventListener("mousemove", handleMoveEvent);
        el.addEventListener("mouseleave", handleEndEvent);
        el.addEventListener("touchmove", handleMoveEvent);
        el.addEventListener("touchend", handleEndEvent);
      };
    };

    getImageRatio();

    return () => {
      el.removeEventListener("mousemove", handleMoveEvent);
      el.removeEventListener("mouseleave", handleEndEvent);
      el.removeEventListener("touchmove", handleMoveEvent);
      el.removeEventListener("touchend", handleEndEvent);
    };
  }, [magnifyTimes, animationDuration]);

  return ref;
}

const MagnifyImage = ({
  imageUrl,
  imageWrapperWidth,
  imageWrapperHeight,
  magnifyTimes = 1.1,
  animationDuration = "0.2s",
}) => {
  const ref = useMagnify({ magnifyTimes, animationDuration });

  return (
    <div
      className="zoom"
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: imageWrapperWidth,
        height: imageWrapperHeight,
      }}
      ref={ref}
    />
  );
};

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

  const { categoryFilter, userPath, productInfo, products, buyCart, favCart } =
    useSelector((state) => state.products);
  const location = useLocation();
    // const productDaitls = productInfo || localStorage.get
  const userselect = location.pathname;
  const lastPart = userselect.split("/").pop();
  const lastNumber = parseInt(lastPart);

  const [selectedImage, setSelectedImage] = useState(null);
  const [addFav, setAddFav] = useState(false);
  const [addDone, setAddDone] = useState(false);

  function checkProductCode(productCode, cartItems) {
    return cartItems.some((item) => item.id === productCode);
  }

  useEffect(() => {
    if (productInfo && favCart) {
      setAddFav(checkProductCode(productInfo.id, favCart.cartItems));
    }
    if (productInfo && buyCart) {
      setAddDone(checkProductCode(productInfo.id, buyCart.cartItems));
    }
    // if(localStorage.getItem('CartItems')){
    //   setAddDone(checkProductCode())
    // }
  }, [productInfo, favCart, buyCart]);
  useEffect(() => {
    dispatch(singleProducts(lastNumber));
    dispatch(getData());
  }, [dispatch, lastNumber]);

  const handleProductClick = () => {
    handleAddToFav(productInfo);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddDone(true);
  };
  const handleAddToFav = (product) => {
    dispatch(addToFav(product));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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

  if (!productInfo) {
    return <h1 className="text-center">Loading ....</h1>;
  }

  const thumbnail = productInfo.thumbnail || productInfo.images[0];
  return (
    <Container>
      {/* <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[20px] mr-auto">{productInfo.title}</h1>
      </div> */}
      <div className="grid grid-cols-2  md:grid-cols-2 gap-4 max-md: mb-4 mt-4 max-md:flex max-md:flex-col">
        <div className=" justify-center items-center">
          <div className="flex mt-2 items-center justify-center">
            {/* Small Image */}
            <div className="flex-col zoom mr-3">
              {productInfo.images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className="w-20 h-20 cursor-pointer m-2 object-fill"
                  src={image}
                  alt={`image${index}`}
                />
              ))}
            </div>
            {/* Bid Image */}
            <MagnifyImage
              magnifyTimes={1.1} //specify how much you want to magnify your image (default: 1.1)
              imageUrl={selectedImage || thumbnail} //set image URL (required)
              imageWrapperWidth={350} //specify the width of the wrapper (required, make sure that it is smaller than image width to not loos image quality)
              imageWrapperHeight={350} //specify the height of the wrapper (required, make sure that it is smaller than image height to not loos image quality)
            />
          </div>
        </div>
        <div className=" mt-2 box-border zoom p-2 ">
          <div>
            <div className="">
              <div className="flex justify-around items-center">
                <h1 className="  font-[700] text-[35px]">
                  {productInfo.title}
                </h1>
                <i
                  onClick={() => {
                    handleProductClick(productInfo.id);
                    setAddFav(!addFav);
                  }}
                  className={` ${
                    addFav
                      ? "fa-solid fa-heart text-[#f00001]"
                      : "fa-regular fa-heart text-black"
                  }  font-[700] text-[30px] ml-5  cursor-pointer`}
                ></i>
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
                {/* <div className="p-3 bg-[#D9D9D9] rounded-lg mt-3 text-black">
                  <button onClick={decrement}>
                    <i className="fa-solid fa-trash-can mr-2 cursor-pointer"></i>
                  </button>
                  <span className="mr-2">{count}</span>
                  <button onClick={increment}>
                    <i className="fa-sharp fa-solid fa-plus cursor-pointer"></i>
                  </button>
                </div> */}
                <button
                  onClick={() => {
                    handleAddToCart(productInfo);
                    setAddDone(!addDone);
                  }}
                  className={` bg-[${addDone ? "#3bb214" : "#E8C851"}] ${
                    addDone ? "text-white" : "text-black"
                  }  font-bold py-2 px-4 rounded mt-3`}
                >
                  {addDone ? <>Done{addDone}</> : "Add To Cart"}{" "}
                  <i
                    className={`  ${
                      addDone ? "fa-solid fa-check" : "fa-solid fa-cart-plus"
                    }`}
                  ></i>
                </button>

                <p>
                  {/* {cartMassege ? (
                    <>
                      <div
                        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                        role="alert"
                      >
                        <span className="font-medium">Success alert!</span>{" "}
                        {cartMassege}
                      </div>
                    </>
                  ) : (
                    <></>
                  )} */}
                </p>
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
