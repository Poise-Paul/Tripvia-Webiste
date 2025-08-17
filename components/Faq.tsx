"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Can I pay with local methods or mobile wallets?",
    answer:
      "Absolutely, Trivia supports multiple payment options including local bank transfers, mobile wallets and card payments.",
  },
  {
    question: "What happens if my booking fails?",
    answer:
      "we've built Tripvia to minimize failures. In rare cases, our support team resolves issues within minutes.",
  },
  {
    question: "Can I change my flight after booking?",
    answer:
      "Yes! Tripvia offers post booking tools to modify, cancel or upgrade your flight.",
  },
  {
    question: "Is Tripvia available on desktop?",
    answer:
      "Yes, but our mobile app is optimized for best experience- and we're shifting all bookings to mobile",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="px-4 md:mx-16 bg-white mt-6 py-12 w-[100%]]"
      id="faq"
      data-aos="fade-up"
    >
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-2"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h2>
      <p
        className="text-gray-600 text-center mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Here are some questions you might haven for us
      </p>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-4"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h4
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium text-[#E85D04] focus:outline-none"
            >
              {faq.question}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#E85D04]" : ""
                }`}
              />
            </h4>
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
