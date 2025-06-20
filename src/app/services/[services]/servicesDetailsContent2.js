/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import CTA from "../../Component/Cta";
const features = [
  {
    name: '<span class="MainColor"> What is door-to-door </span> auto transport?',
    description:
      'Door-to-door auto transport is exactly what it sounds like. One of our car carriers will pick up your car directly from your door and drop it off directly to your end destination. There is no need for additional pick up or drop off terminals and the associated hassle. It is the most convenient way to ship a car. All you have to do is let the transportation company know the exact address for the pick-up and delivery of your vehicle. They’ll make sure your vehicle is picked up and delivered as close as possible to your preferred address. Door-to-door transport services are great for people who have a busy schedule or live in a remote area. Or, for snowbirds who want their car transported to their winter home without having to worry about driving it there themselves. Unlock cost savings, time, and convenience by choosing door-to-door transportation for your next car shipment.',
    imageSrc: 'https://sgtautotransport.com/sites/default/files/styles/webp_image_original/public/storage/fjk9ippvsruc538zo6tyuieawyjjl7on9sn6l8bf.png.webp?itok=01jog-Ih',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
       name: '<span class="MainColor"> What is door-to-door </span> auto transport?',
    description: 'Door-to-door auto transport is exactly what it sounds like. One of our car carriers will pick up your car directly from your door and drop it off directly to your end destination. There is no need for additional pick up or drop off terminals and the associated hassle. It is the most convenient way to ship a car. All you have to do is let the transportation company know the exact address for the pick-up and delivery of your vehicle. They’ll make sure your vehicle is picked up and delivered as close as possible to your preferred address. Door-to-door transport services are great for people who have a busy schedule or live in a remote area. Or, for snowbirds who want their car transported to their winter home without having to worry about driving it there themselves. Unlock cost savings, time, and convenience by choosing door-to-door transportation for your next car shipment.',
   
    imageSrc: 'https://sgtautotransport.com/sites/default/files/styles/webp_image_original/public/storage/fjk9ippvsruc538zo6tyuieawyjjl7on9sn6l8bf.png.webp?itok=01jog-Ih',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  }

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
        {/* <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protect your device</h2>
          <p className="mt-4 text-gray-500">
            As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
            fabric sleeve that matches in quality and looks.
          </p>
        </div> */}

        <div className="mt-10 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                )}
              >
                {/* <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3> */}
                <h2 class="custom-heading-all" style={{textAlign:"start"}} dangerouslySetInnerHTML={{__html:feature.name}}></h2>
                <p className="mt-2 text-md text-gray-500">{feature.description}</p>
              </div>
              
              <div
                

                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
