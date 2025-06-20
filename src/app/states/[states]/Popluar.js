import Image from "next/image";
import ServicesData from "../../data/services.json";
import Link from "next/link";

export default function Example() {
  const ServicesDataFilter = ServicesData.filter(
    (post) => post.id === 3 || post.id === 4
  );
 
  let requiredIds = [2, 5, 9];

  let ServicesDataFilterTwo = ServicesData.filter(service => requiredIds.includes(service.id));
  
  return (
    <div className="bg-white py-24 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Individual{" "}
            <span className="MainColor">Auto Transport Services</span>
          </h2>
          <p className="custom-paragraph">
            All B2C services, tailored on a case by case basis, to meet and
            exceed customer expectations via education on the shipment process
            and holding their hand through the entire shipment process to make
            it as easy and simple as possible.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {ServicesDataFilter?.map((post) => (

            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-40"
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
   
          ))}
        </div>

  
      </div>
    </div>
  );
}
