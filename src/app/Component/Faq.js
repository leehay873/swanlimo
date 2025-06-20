"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function LimousineFAQ() {
  const faqs = [
    {
      question: "Do you offer specialized transport for stretch limousines?",
      answer:
        "Yes, we provide custom transport solutions specifically designed for stretch limousines, party buses, and executive vehicles. Our equipment accommodates extra-long vehicles with special securing systems.",
    },
    {
      question: "What insurance coverage do you provide for luxury vehicles?",
      answer:
        "We offer premium bumper-to-bumper insurance coverage tailored for high-value limousines, including agreed value coverage that reflects your vehicle's true worth.",
    },
    {
      question: "Can I track my limousine during transport?",
      answer:
        "Absolutely. Our VIP tracking system provides real-time GPS monitoring with 24/7 access, plus regular updates from your dedicated transport coordinator.",
    },
    {
      question: "How do you handle limo transport to event venues?",
      answer:
        "For weddings, corporate events, or shows, we provide white-glove service including venue coordination, precise timing, and discreet delivery to maintain your vehicle's privacy.",
    },
    {
      question: "What payment methods do you accept for limousine transport?",
      answer:
        "We accept all major credit cards, wire transfers, and certified checks. For fleet owners, we offer customized billing solutions with net terms.",
    },
    {
      question: "Do you provide climate-controlled transport for limousines?",
      answer:
        "Yes, our premium enclosed trailers feature climate control to protect luxury interiors and sensitive electronics from temperature extremes during transit.",
    },
  ];

  return (
    <div className="py-16 sm:py-18 display">
      <div className="mx-auto max-w-7xl px-2 py-1 mb-12">
        <div className="mx-auto max-w-7xl px-6 py-1 divide-y divide-gray-900/10">
          <h2 className="custom-heading-all">
            Limousine Transport FAQs          </h2>

          <dl className="mt-10 space-y-3 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={index}
                className="pt-4"
                defaultOpen={index === 0}
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="updatedheading">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="updatedparapremu">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have more questions about our limousine transport services?
            </p>
            <a
              href="tel:+12013740018"
              className="mt-4 inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              Call Our Limo Specialists: +1 (201) 374-0018
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}