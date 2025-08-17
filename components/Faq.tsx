"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { question: "Can I pay with local methods or mobile wallets?", answer: "Yes, you can pay with a variety of local payment methods and mobile wallets depending on your region." },
  { question: "What happens if my booking fails?", answer: "If your booking fails, you won’t be charged. You can retry the booking or contact support for help." },
  { question: "Can I change my flight after booking?", answer: "Yes, you can change your flight depending on airline policies. Additional charges may apply." },
  { question: "Is Tripvia available on desktop?", answer: "Absolutely! Tripvia works seamlessly across desktop and mobile devices." },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-8 bg-white mt-6 py-12 max-w-4xl mx-auto" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Here are some questions you might haven for us
      </p>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium text-[#E85D04] focus:outline-none"
            >
              {faq.question}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#E85D04]" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
