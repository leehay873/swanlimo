import Link from "next/link";
import Image from "next/image";

import WeddingLimo from "../../../public/fleets/Mercedes-Sedan-1.webp";
import SportLimo from "../../../public/fleets/Mercedes-Sedan-1.webp";
import ConcertLimo from "../../../public/fleets/Mercedes-Sedan-1.webp";
import GraduationLimo from "../../../public/fleets/Mercedes-Sedan-1.webp";
import AirportLimo from "../../../public/fleets/Mercedes-Sedan-1.webp";

const posts = [
  {
    id: 1,
    title: "Wedding Limo Service",
    description: "Luxury transportation for your special day",
    imageUrl: WeddingLimo,
    link: "/fleets/wedding-limo",
  },
  {
    id: 2,
    title: "Sport Event Limo Service",
    description: "Premium transportation for sports events",
    imageUrl: SportLimo,
    link: "/fleets/sport-limo",
  },
  {
    id: 3,
    title: "Concert Limo Service",
    description: "Style and comfort for music events",
    imageUrl: ConcertLimo,
    link: "/fleets/concert-limo",
  },
  {
    id: 4,
    title: "Graduation Limo Service",
    description: "Celebrate your achievement in style",
    imageUrl: GraduationLimo,
    link: "/fleets/graduation-limo",
  },
  {
    id: 5,
    title: "Airport Limo Service",
    description: "Executive airport transfers",
    imageUrl: AirportLimo,
    link: "/fleets/airport-limo",
  },
];

export default function FleetServices() {
  return (
    <div className="footer_bg py-16 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 text-start">
          <h2 className="custom-heading-all">
            Premium Limo Services for All Occasions{" "}
            <br className="lg:block hidden" /> with{" "}
            <span className="MainColor">Luxury Transportation</span>
          </h2>
          <p className="custom-paragraph">
            <span className="MainColor">Our limousine services</span> can
            accommodate any event type with style and comfort.
          </p>
        </div>
        
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-48 lg:pt-40"
            >
              <Link href={post.link}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0" />
                  {post.title}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </h3>
              </Link>
            </article>
          ))}

          <article
            key="view-all"
            className="relative flex flex-col justify-center items-center rounded-2xl bg-gray-900 px-8 py-12"
          >
            <Link
              href="/services"
              className="flex MainColor-bg justify-center rounded-2xl items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5"
            >
              <p className="text-lg text-white">
                Discover all our services
                <span aria-hidden="true"> &rarr;</span>
              </p>
            </Link>
          </article>
        </ul>
      </div>
    </div>
  );
}