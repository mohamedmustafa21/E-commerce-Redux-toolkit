export default function Card({ cardImg, cardTitle, isRounded }) {
  return (
    <div className="flex flex-col text-center mt-4 mb-8">
      <img
        src={cardImg}
        className={isRounded ? "rounded-sm" : "rounded-full"}
      />
      <p className="text-2xl font-medium select-none">{cardTitle}</p>
    </div>
  );
}
