import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience <span className="text-black">Premium Limo Service</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Thank you for considering <span className="text-black font-semibold">Swan Limo Services</span> for your luxury transportation needs. We specialize in providing <span className="text-[#a2384d] font-semibold">white-glove chauffeur services</span> for weddings, corporate events, and special occasions.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you need <span className="text-black font-semibold">airport transfers</span>, night out transportation, or bespoke luxury experiences, our professional team is dedicated to making your journey exceptional.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Luxury fleet of late-model vehicles</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional, licensed chauffeurs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 concierge service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-black p-8 shadow-xl rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Request Your Ride</h3>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4">
                        <path fillRule="evenodd" d="M4 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM1.667 11.38a5.5 5.5 0 0 1 10.666 0 .5.5 0 0 1-.292.465A12.011 12.011 0 0 1 8 13c-1.786 0-3.483-.39-5.001-1.09a.5.5 0 0 1-.292-.465Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="first-name"
                      className="block w-full pl-10 rounded-md border-0 bg-gray-900 py-3 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4">
                        <path fillRule="evenodd" d="M4 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM1.667 11.38a5.5 5.5 0 0 1 10.666 0 .5.5 0 0 1-.292.465A12.011 12.011 0 0 1 8 13c-1.786 0-3.483-.39-5.001-1.09a.5.5 0 0 1-.292-.465Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="last-name"
                      className="block w-full pl-10 rounded-md border-0 bg-gray-900 py-3 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4">
                      <path d="M1 5.8v6.864a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.8l-7.928 4.894a2 2 0 0 1-2.144 0L1 5.8Z" />
                      <path d="M16 4.072V4a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v.072l7.714 4.748a1 1 0 0 0 1.072 0L16 4.072Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-10 rounded-md border-0 bg-gray-900 py-3 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4">
                      <path fillRule="evenodd" d="M1 3a2 2 0 0 1 2-2h.875c.688 0 1.287.469 1.455 1.135l.879 3.516a1.25 1.25 0 0 1-.462 1.307l-1.096.822c-.094.07-.114.174-.088.246a7.52 7.52 0 0 0 4.465 4.465c.088.032.213.007.299-.088l.822-1.096a1.25 1.25 0 0 1 1.307-.462l3.516.879c.633.158 1.135.725 1.135 1.375V13a2 2 0 0 1-2 2h-1.5C7.552 15 1 8.448 1 4.5V3Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full pl-10 rounded-md border-0 bg-gray-900 py-3 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-gray-900 px-4 py-3 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm"
                  placeholder="Tell us about your transportation needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 px-6 rounded-md transition duration-300 text-lg"
                >
                  Book Your Limo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm