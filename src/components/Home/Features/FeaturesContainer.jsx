import FeatureCard from "./FeatureCard";
import ClockImage from "../../../assets/imgs/Home/Features/clock.svg";
import LikeImage from "../../../assets/imgs/Home/Features/like.svg";
import TruckImage from "../../../assets/imgs/Home/Features/truck.svg";
export default function FeaturesContainer() {
  return (
    <div className="flex  sm:flex-row flex-col gap-12 items-center justify-center mt-5 mb-8">
      <FeatureCard
        text={"FREE SHIPPING US"}
        desc={"on all order over 1000EGP"}
        imgSrc={TruckImage}
      />
      <FeatureCard
        text={"SAVE 20% WHEN"}
        desc={"you use credit card"}
        imgSrc={LikeImage}
      />
      <FeatureCard
        text={"30-DAYS RETURNS"}
        desc={"money back guarantee"}
        imgSrc={ClockImage}
      />
    </div>
  );
}
