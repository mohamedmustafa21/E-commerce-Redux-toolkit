export default function Card({
  cardImg,
  cardTitle,
  cardPrice,
  cardDiscount,
  isRate,
  className,
  cardBrand,
  onClick
}) {
  return (
    <div className="relative max-md:p-4 col-span-4 max-md:col-span-12 bg-white px-4 flex justify-center items-center  flex-col text-center my-4 rounded-[20px]">
      <img src={cardImg} style={{ width: '250px', height: '200px' }} className="object-contain p-4 rounded-[50%]" />

    
      <div className="product-details mb-4 mt-2 ">
        {isRate && (
          <div className="rate text-[#EECA16]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
          </div>
        )}
        <h4 className="title text-xl text-gray-900">{cardTitle}</h4>
        <h4 className="title text-xl text-[#7373e9] font-[600]">{cardBrand}</h4>
        <p className="font-semibold text-gray-800">{cardPrice}</p>
        <button onClick={onClick}
                  className="bg-[#E8C851]  text-black font-bold py-2 px-4 rounded mt-3"
                  
                >
                  Buy <i className="fa-sharp fa-solid fa-cart-plus"></i>
                </button>
      </div>
      {cardDiscount && (
        <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-sm left-0 p-2 w-[4rem]">
          {cardDiscount}
        </span>
      )}
    </div>
  );
}
