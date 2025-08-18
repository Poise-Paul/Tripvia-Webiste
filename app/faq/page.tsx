import React from "react";
import Hero from "../how-it-works/Hero";
import Faq from "@/components/Faq";

function page() {
  return (
    <div>
      <Hero
        text="Faqs"
        subtext="We've got answers. Our FAQ section covers everything from payment methods and booking changes to app features and support. Whether you're a first-time flyer or a frequent traveler, Tripvia's help center is built to guide you throgh every step."
      />
      <Faq />
    </div>
  );
}

export default page;
