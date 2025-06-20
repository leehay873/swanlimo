"use client";
import Navbar from "./navbar";
import Hero from "./HeaderLeft";
import HeaderCard from "./HeaderCard";

const data = [
  {
    title: "Seamless Online Reservation System",
    href: "#",
    description:
      "Book your luxury Swanlimo car service effortlessly with our user-friendly online booking system. Secure your executive sedan, SUV limo, or premium chauffeur service 24/7 with just a few clicks.",

    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: " Elite Professional Chauffeurs  ",
    href: "#",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    description:
      "Experience first-class travel with our highly trained, background-checked chauffeurs. Whether for corporate travel, airport transfers, or special occasions, our drivers ensure a safe, punctual, and VIP experience.",
  },
  {
    title: "Eco-Friendly & Executive-Class Fleets    ",
    href: "#",
    description:
      "We believe in luxury with sustainability. Our hybrid and fuel-efficient black car fleet ensures a premium, eco-conscious travel experience without compromising on comfort or performance.",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "24/7 customer support",
    href: "#",

    description:
      "Swanlimo offers a comprehensive and highly professional customer support to each transporter through its highly trained customer support crew",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

export default function Example() {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden header_image">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <Hero />
          <HeaderCard actions={data} />
        </div>
      </div>
    </div>
  );
}
