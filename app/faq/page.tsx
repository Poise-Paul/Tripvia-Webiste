import React from "react";
import Hero from "../how-it-works/Hero";
import Faq from "@/components/Faq";

function page() {
  return (
    <div>
      <Hero text="Faqs" />
      <Faq />
    </div>
  );
}

export default page;
