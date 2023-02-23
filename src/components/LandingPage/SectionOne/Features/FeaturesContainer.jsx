import FeatureCard from "./FeatureCard";

export default function FeaturesContainer() {
  return (
    <div className="flex gap-12 items-center justify-center mt-16">
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>
  );
}
