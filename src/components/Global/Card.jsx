export default function Card({
  cardImg,
  cardTitle,
  cardPrice,
  cardDiscount,
  isRate,
}) {
  return (
    <div className="relative max-md:p-4 col-span-4 max-md:col-span-12 bg-white px-4 flex justify-center flex-col text-center my-4 rounded-sm">
      {cardImg && <img src={cardImg} className="object-cover" />}
      <div className="product-details mb-4 mt-2">
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
        <p className="font-semibold text-gray-800">{cardPrice}</p>
      </div>
      {cardDiscount && (
        <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-sm left-0 p-2 w-[4rem]">
          {cardDiscount}
        </span>
      )}
    </div>
  );
}
