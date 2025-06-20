import Image from "next/image";
import Step1 from "../../../../public/bookingStep/get-a-quote.svg";
import Step2 from "../../../../public/bookingStep/pick-up-vehicel.svg";
import Step3 from "../../../../public/bookingStep/recvied-vehicel.svg";
import Link from "next/link";
const posts = [
  {
    id: 1,
    title: "Get a quote and book your order",
    href: "#",
    description: `Fill out the online auto transport calculator or call   <a className="MainColor" href="tel:+1201527-4332">
                      <a className="MainColor" href="tel:+1201527-4332">
                    +1 ‪(201) 374-0018‬
                  </a>{" "}
                  </a>{" "} to get your free instant quote. Our car shipping expert will help you know about the car shipping cost. You book your order.`,
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
    id: 2,
    title: "Our Carrier Will Pick up Your Vehicle",
    href: "#",
    description: ` Your assigned car shipping driver will contact to confirm the details of your pick-up. Your vehicle gets picked up from your mentioned location.  `,
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
    title: `You will Receive Your Vehicle`,
    href: "#",
    description: `The car transport driver will contact you a few hours before the delivery time. You will Get a FREE Quote few hours notice so that you can make arrangements for receiving your car.
`,
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

export default function Example({ data }) {
  return (
    <div className=" py-8 sm:py-16">
      <div className="mx-auto max-w-7xl  px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 class="custom-heading-all">
            {data?.title} in <span className="MainColor">3 Easy Steps</span>
          </h2>

          <p className="custom-paragraph">
            <Link href="/get-a-quote" className="MainColor">
              Get a FREE Quote
            </Link>{" "}
            and Book Your Order. We Will Handle the Rest.
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
                  alt=""
                  className="mx-auto h-245 w-245 object-cover"
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
                  <h3 className="mt-3 headerCard_heading">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>

                  <p className="mt-md-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-10 flex justify-center  ">
        <Link href="/how-to-ship-a-car">
          <button type="button" className="rounded-md  text-sm  getAllButton">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
