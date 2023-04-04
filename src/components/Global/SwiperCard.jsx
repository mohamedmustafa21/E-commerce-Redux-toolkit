export default function Card({
  cardImg,
  cardTitle,
  cardPrice,
  rating,
  cardBrand,
  ButtonText,
  onClickBtn,
  onClickCaedCategory,
  layer,
  btnClassName,
  OnClickCardCategory,
}) {
  const imageWidth = "150px";
  const imageHeight = "200px";
  const className = "object-contain rounded-[50%] relative";

  return (
    <div onClick={OnClickCardCategory} className="flex cursor-pointer flex-col items-center text-center ">
      <div className="relative">
        <img
          src={cardImg}
          style={{ width: imageWidth, height: imageHeight }}
          className={className}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="bg-black  bg-opacity-50 rounded-[10%] font-[800] text-white w-full h-full flex items-center justify-center"
            style={{ backdropFilter: "blur(.5px)" }}
          >
            {layer}
          </div>
        </div>
      </div>
      <>
        {cardTitle ? (
          <>
            {" "}
            <p className="text-1xl font-medium select-none">{cardTitle}</p>
          </>
        ) : (
          <></>
        )}
      </>
      {cardBrand ? (
        <>
          <p className="text-1xl font-medium select-none">
            {"''" + cardBrand + "''"}
          </p>
        </>
      ) : (
        <></>
      )}

      <p className="text-1xl font-medium text-[green]">{cardPrice}</p>
      {rating ? (
        <>
          <p
            className={`text-1xl font-medium text-${
              rating > 3 ? "green" : "red"
            }`}
          >
            <i
              className="fa-solid fa-star"
              style={{ color: rating > 3 ? "green" : "red" }}
            ></i>
            {rating}
          </p>
        </>
      ) : (
        <></>
      )}
      {ButtonText ? (
        <>
          <button onClick={onClickBtn} className={btnClassName}>
            {ButtonText}
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
