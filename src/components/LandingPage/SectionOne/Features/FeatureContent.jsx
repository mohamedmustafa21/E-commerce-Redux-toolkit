export default function FeatureCard({ text, desc, imgSrc }) {
  return (
    <div className="bg-[#94E8A7] flex items-center justify-evenly px-6 py-3 w-80">
      <div className="mr-1">
        <img src={imgSrc} className="max-w-fit min-w-fit" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-center font-bold">{text}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
