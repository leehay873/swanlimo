import { InboxIcon, ShieldCheckIcon, TruckIcon, ClockIcon } from "@heroicons/react/24/outline";
import HeaderCard from "../Component/HeaderCard";

const features = [
  {
    title: "Limousine Size and Type",
    description:
      "Stretch limousines, SUVs, and specialty vehicles require custom transport solutions. The length and luxury features impact pricing and equipment needed.",
    href: "#",
    icon: TruckIcon,
  },
  {
    title: "Premium Protection Requirements",
    description:
      "White-glove service includes climate-controlled transport, custom securing, and full insurance coverage to protect your luxury investment during transit.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    title: "Transport Class Selection",
    description:
      "Choose between standard enclosed transport or our premium VIP service with dedicated carriers, real-time tracking, and personal transport coordinators.",
    href: "#",
    icon: InboxIcon,
  },
  {
    title: "Expedited Shipping Options",
    description:
      "Priority scheduling for events and shows available. The faster you need your limousine delivered, the higher the premium for guaranteed on-time arrival.",
    href: "#",
    icon: ClockIcon,
  },
];

export default function LimousineShippingPricing() {
  return (
    <div className="footer_bg py-16 sm:py-18 border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="custom-heading-all">
            Premium Limousine Transport{" "}
            <span className="MainColor">Pricing Factors</span>
          </h2>
          <p className="custom-paragraph">
            USA Best Car Shipping specializes in luxury vehicle transportation with 
            tailored solutions for limousine owners and fleet managers. Our pricing 
            reflects the exceptional care required for high-end vehicles, including 
            custom securing systems, climate control options, and dedicated transport 
            specialists. The final quote depends on the limousine specifications, 
            transport timeline, protection level required, and any special handling 
            needs for your prestigious vehicle.
          </p>
        </div>
        <div className="mx-auto max-w-7xl mt-10 lg:max-w-none">
          <HeaderCard actions={features} />
        </div>
      </div>
    </div>
  );
}