import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import HeaderCard from "../Component/HeaderCard";
const features = [
  {
    title: "Vehicle Type",
    description:
      "The specific kind of vehicle you are shipping will affect how much you pay for shipping. As compared to larger vehicles like SUVs and trucks, smaller cars are less costly to ship. Moreover, luxury cars will be relatively costly to ship because they require special care and handling during shipping.",
    href: "#",
    icon: InboxIcon,
  },
  {
    title: "Pick-Up and Delivery Locations",
    description:
      "The locations where your vehicle is picked up and delivered at will determine the shipping cost. Some areas are harder to reach in time while certain places may have additional rules or fees that may affect the shipping cost.",
    href: "#",
    icon: UsersIcon,
  },
  {
    title: "Size and Condition of the Vehicle",
    description:
      "If your vehicle is heavier or it cannot be driven it may need special arrangements and tools for transport which will lead to additional shipping cost..",
    href: "#",
    icon: TrashIcon,
  },
  {
    title: "Transport Type",
    description:
      "Shipping costs vary on the basis of the trailer type. Open transport is the most common and cost saving option while enclosed transport costs more as it offers extra protection from the road debris and weather conditions making it a preferable choic ",
    href: "#",
    icon: TrashIcon,
  },
];

export default function Example() {
  return (
    <div className="footer_bg py-16 sm:py-18 border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="custom-heading-all">
            How Much Do Car Transport{" "}
            <span className="MainColor"> Companies Charge?</span>
          </h2>
          <p className="custom-paragraph">
            USA Best Car Shipping offers car shipping charges that are estimated
            in accordance with the current market trends for nationwide auto
            transportation. The total cost provided by our company will depend
            on several factors, including the type of car you need to move, the
            pickup and delivery locality, the size and condition of the vehicle,
            the total transport distance, the transport type (open or enclosed
            trailer shipment), and the specific time of year when the booking is
            made.
          </p>
        </div>
        <div className="mx-auto  max-w-7xl mt-10 lg:max-w-none">
          <HeaderCard actions={features} />
          {/* {features.map((feature) => (
              <div key={feature.name} className="flex flex-col rounded-2xl  border bg-white border-gray-200 p-6">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
              
                </dd>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}
