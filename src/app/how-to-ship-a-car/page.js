import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Navbar from "../Component/navbar";
import Head from "next/head";
import ServerSection from "../../../public/services/serviceHero.svg";
import Image from "next/image";
import Step1 from "../../../public/bookingStep/get-a-quote.svg";
import Step2 from "../../../public/bookingStep/pick-up-vehicel.svg";
import Step3 from "../../../public/bookingStep/recvied-vehicel.svg";
import Steps from "../how-to-ship-a-car/steps";
import BookingForm from "../Component/BookingForm";
import HeaderAll from "../Component/HeaderAll";
const posts = [
  {
    id: 1,
    title: "Get a FREE  quote and book your order.",
    href: "#",
    description: `Use our online auto transport calculator to get your free instant car shipping quote. Provide a few simple details, and you’ll know how much our car shipping services cost in just a few seconds ...`,
    imageUrl: Step1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "STEP 1 ", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "We pick up your vehicle",
    href: "#",
    description: `Your assigned car shipping agent will contact you a few hours before your scheduled pick-up. They will confirm the details of your pick-up. `,
    imageUrl: Step2,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "STEP 2", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: `You receive your vehicle`,
    href: "#",
    description: `The car transport carrier will get in touch a few hours before they make their delivery. They like to give you a few hour’s notice so you can make sure you’re available. If you’re not, it’s not ...`,
    imageUrl: Step3,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "STEP 3 ", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Example() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How to Ship a Car?",
    description:
      "Learn the simple process of shipping your car nationwide with USA Best Car Shipping. Get a free quote, safe delivery, and reliable service today.",
    url: "https://www.usabestcarshipping.com/how-to-ship-a-car",
  };
  return (
    <>
      <head>
        <link
          rel="canonical"
          href="https://www.usabestcarshipping.com/how-to-ship-a-car"
          key="canonical"
        />
        <title>How to Ship a Car? | USA Best Car Shipping</title>
        <meta
          name="description"
          content="Learn the simple process of shipping your car nationwide with USA Best Car Shipping. Get a free quote, safe delivery, and reliable service today!"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph and Twitter tags */}
        <meta
          property="og:title"
          content="How to Ship a Car? | USA Best Car Shipping"
        />
        <meta
          property="og:description"
          content="Learn the simple process of shipping your car nationwide with USA Best Car Shipping. Get a free quote, safe delivery, and reliable service today!"
        />
        <meta
          property="og:url"
          content="https://www.usabestcarshipping.com/how-to-ship-a-car"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.usabestcarshipping.com/path/to/image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Ship a Car? | USA Best Car Shipping"
        />
        <meta
          name="twitter:description"
          content="Learn the simple process of shipping your car nationwide with USA Best Car Shipping. Get a free quote, safe delivery, and reliable service today!"
        />
        <meta
          name="twitter:image"
          content="https://www.usabestcarshipping.com/path/to/image.jpg"
        />

        <meta
          name="keywords"
          content="car shipping, auto transport, car delivery, USA Best Car Shipping"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <Navbar />

      <HeaderAll />
      <div className="bg-white  py-14 sm:py-18">
        <div className="mx-auto max-w-7xl  px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="custom-heading-all">
              Reliable auto transport services in{" "}
              <span className="MainColor">3 easy steps</span>
            </h2>
            <p className="custom-paragraph">
              Get a FREE quote and book your order. We handle the rest.
            </p>
          </div>

          <div className="mx-auto text-center mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={post.imageUrl}
                    alt="How to Ship a Car? | USA Best Car Shipping"
                    className="mx-auto h-275 w-275 object-cover "
                  />
                  {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> */}
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex justify-center    gap-x-4 text-xs">
                    <a
                      href={post.category.href}
                      className="relative z-10  MainColor-bg  rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 "
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>

                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Steps />
    </>
  );
}
