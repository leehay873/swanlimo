import Image from "next/image"
import Corporate from "../../../public/services/Corporate Vehicle.svg"
import feet from "../../../public/services/feet.svg"

const posts = [
    {
      id: 1,
      title: 'Corporate Limousine Fleet Services',
      href: '#',
      description:
        'Professional relocation for executive limousine fleets with white-glove service. We ensure secure, discreet transportation with full insurance coverage.',
      imageUrl: Corporate,
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Limo Transport & Relocation',
        href: '#',
        description:
          'Specialized transport for luxury limousines including stretch models. Our extended carriers accommodate oversized vehicles with custom securing.',
        imageUrl: feet,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
]

export default function BusinessServices() {
    return (
      <div className="bg-white py-24 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"> {/* Changed to max-w-3xl and text-center */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Premium <span className="MainColor">Limousine Transport Services</span>
            </h2>
            <p className="custom-paragraph mt-6">
              Swanlimo provides specialized B2B transportation solutions for limousine companies, 
              luxury fleet operators, and executive transport services nationwide.
            </p>
          </div>
          
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts?.map((service) => (
              <article
                key={service.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-40"
              >
                <Image
                  src={service.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
               
                <h3 className="leading-6 text-white deals_card_h3">
                  <a href={service.title}>
                    <span className="absolute inset-0" />
                    {service.title}
                  </a>
                </h3>
                <p className="text-sm text-white mb-4">{service.description}</p>
                <button type="button" className="getdealBtn">
                 Learn More
                </button>
              </article>
            ))}
          </ul>
        </div>
      </div>
    )
}