"use client";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <div className="bg-black lg:block md:block hidden">
      <div className="mx-auto max-w-7xl py-2 lg:space-y-0 space-y-2 flex flex-wrap justify-between">
        <div className="text-white text-sm lg:text-start text-center text-base">
Enjoy 15% Off Your First Ride with Return!

        </div>
        <div className="lg:text-start text-center flex lg:justify-start justify-center lg:w-auto w-full">
          <a
        
            href="tel:+12015274332"
            style={{ fontFamily: "sans-serif" }}
            className="text-white flex items-center justify-between"
          >
            <FiPhone className="mr-2" />
            <p className="text-base ">+1 ‪(201) 374-0018‬</p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
