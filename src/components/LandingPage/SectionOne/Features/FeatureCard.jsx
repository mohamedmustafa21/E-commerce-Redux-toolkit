export default function FeatureCard() {
  return (
    <div className="bg-[#94E8A7] flex items-center px-6 py-3">
      <div className="img mr-4">
        <img src="https://img.icons8.com/wired/64/null/checkmark.png" />
      </div>
      <div className="text flex flex-col">
        <h4 className="text-center">FREE SHIPPING US</h4>
        <p>on all order over 1000EGP</p>
      </div>
    </div>
  );
}
