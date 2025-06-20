import Image from "next/image";
import ServicesData from "../data/services.json";
import Link from "next/link";

export default function Example() {
  const ServicesDataFilter = ServicesData.filter(
    (post) => post.id === 3 || post.id === 4
  );
  const ServicesDataFilterTwo = ServicesData.filter(
    (post) => post.id !== 3 && post.id !== 4
  );
  return (
    <div className="bg-white  py-14 sm:py-18">
      <div className="mx-auto max-w-7xl  px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-cente mt-10 mb-10">
          <h2 className="custom-heading-all">
            Individual{" "}
            <span className="MainColor">Auto Transport Services</span>
          </h2>
          <p className="custom-paragraph m-4">
            All B2C services, tailored on a case by case basis, to meet and
            exceed customer expectations via education on the shipment process
            and holding their hand through the entire shipment process to make
            it as easy and simple as possible.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-7xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4 ">
          {ServicesDataFilter.map((service, index) => (
            <div
              className="relative w-full h-[380px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${service?.imageUrl})` }}
            >
              {/* Popular Tag with Custom Color */}
              {service?.tag && (
                <div className="absolute top-4 left-4 bg-[#a2384d] text-white text-sm px-3 py-1 rounded-lg">
                  {service?.tag}
                </div>
              )}

              {/* Gradient Overlay with Custom Shade and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent rounded-xl flex flex-col justify-end items-center text-center text-white p-6">
                {/* Title */}
                <h2
                  className="custom-heading-all text-white"
                  style={{ color: "white" }}
                >
                  {service?.title}
                </h2>

                {/* Description */}
                <p className="mt-2">{service?.description}</p>

                {/* Learn More Button with Custom Color */}

                <Link
                  href={service?.link}
                  className="mt-4 text-[#a2384d] font-bold"
                  style={{ fontWeight: "400" }}
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl  mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-hidden">
          {ServicesDataFilterTwo.map((service, index) => (
            <div
              className="mt-10 relative w-full h-[380px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            >
              {service?.tag && (
                <div className="absolute top-4 left-4 bg-[#a2384d] text-white text-sm px-3 py-1 rounded-lg">
                  {service?.tag}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[black] via-black/50 to-transparent rounded-xl flex flex-col justify-end items-center text-center text-white p-6">
                <h2
                  className="custom-heading-all text-white"
                  style={{ color: "white" }}
                >
                  {service?.title}
                </h2>

                <p className="mt-2">{service?.description}</p>

                <Link
                  href={service?.link}
                  className="mt-4 text-[#a2384d] font-bold"
                  style={{ fontWeight: "400" }}
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {ServicesDataFilter?.map((post) => (

            <article
              key={post.id}
              className="custom-service-card relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-40"
            >
              <Image
                src={post.imageUrl}
                width={300}
                height={300}
                alt={post?.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t  from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 bg-black opacity-20 ring-inset ring-gray-900/10" />

              <h4 class="conv-card-ribbon">{post?.tag}</h4>
              <h3 className="leading-6 text-white  deals_card_h3">
                <Link href={post.link}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-white mb-4 ">{post.description}</p>
              <button type="button" className="  getdealBtn">
                Learn More
              </button>
            </article>

          ))}
        </ul>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {ServicesDataFilterTwo.map((post) => (
    
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-0 sm:pt-0 lg:pt-20"
            >
             
              <Image
                src={post.cardImage}
                width={300}
                height={300}
                alt={post?.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
             
            

              <div className="absolute inset-0 -z-10 bg-gradient-to-t  from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 bg-black opacity-35 ring-inset ring-gray-900/10" />

              {post?.tag ? <h4 class="conv-card-ribbon">{post?.tag}</h4> : null}

              <h6 className="leading-6 text-white  services_card_h3">
                <Link href={post.link}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h6>
              <p className="text-sm text-white mb-4 ">{post.description}</p>
              
              <button type="button" className="getdealBtn">
               Learn More
              </button>
             
            </article>
            // <article
            //   key={post.id}
            //   className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-40"
            // >
            //   <Image
            //     src={post.imageUrl}
            //     alt=""
            //     className="absolute inset-0  -z-10 h-full w-full object-cover"
            //   />
            //   <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            //   <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            //   <h3 className="serviceItem_card_title  mt-3 text-lg font-semibold leading-6 text-white">
            //     <a href={post.href}>
            //       <span className="absolute inset-0" />
            //       {post.title}
            //     </a>
            //   </h3>
            //   <p className="mt-5  mb-2 text-sm leading-6 text-white">
            //     {post.description}
            //   </p>
            //   <button type="button" className="  getdealBtn">
            //     Learn More
            //   </button>
            // </article>
          ))}
        </div> */}

        {/* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">


                </div>
                <div className="group text-center relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>

              </div>
            </article>
          ))}
        </div> */}

        {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="service_item_main relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900  pb-8 pt-80 sm:pt-48 lg:pt-60"
            >
              <Image src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-80 w-full object-cover " />

              
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="service_item_CardBanner p-4  absolute">
            <h3 className="serviceItem_card_title  mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p  className="serviceItem_card_p text-white">{post.description}</p>
              <button type="button" className="mt-4  getdealBtn">
                Learn More
              </button>
            </div>


  
            </article>
          ))}
          </div> */}
      </div>
    </div>
  );
}
