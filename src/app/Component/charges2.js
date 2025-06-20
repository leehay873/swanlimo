const incentives = [
  {
    name: 'Limousine Size & Type',
    imageSrc: '/icons/limo-size.svg', // Replace with your icon path
    description: "Stretch limos, party buses, and executive vehicles require specialized transport equipment. Longer vehicles need custom trailers and careful routing planning.",
  },
  {
    name: 'Premium Protection Level',
    imageSrc: '/icons/premium-protection.svg', // Replace with your icon path
    description: "White-glove service includes climate-controlled transport, custom securing, and full coverage insurance for your luxury vehicle during transit.",
  },
  {
    name: 'Transport Service Tier',
    imageSrc: '/icons/service-tier.svg', // Replace with your icon path
    description: "Choose between standard enclosed transport or VIP service with dedicated carriers, real-time tracking, and personal transport coordinators.",
  },
  {
    name: 'Expedited Delivery',
    imageSrc: '/icons/fast-delivery.svg', // Replace with your icon path
    description: "Priority scheduling for events and shows available at premium rates. Guaranteed on-time delivery with 24/7 monitoring.",
  },
]

export default function LimousinePricing() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Luxury Limousine Transport <span className='text-[#A2384D]'>Pricing Factors</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Our limousine shipping services are tailored for high-end vehicle owners. Pricing reflects the exceptional care required for luxury vehicles, including custom securing systems, climate control options, and dedicated transport specialists. Costs vary based on vehicle specifications, transport timeline, and protection level.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/images/limo-transport-hero.jpg" // Replace with your limo transport image
                alt="Professional limousine transport service"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-gray-600">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}