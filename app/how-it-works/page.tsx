import React from "react";
import Hero from "./Hero";
import Operation from "./Operation";

function page() {
  return (
    <div>
      <Hero
        text="How we Operate"
        subtext="Tripvia is simple, fast, and reliable. Just follow these three steps."
      />
      <Operation />
    </div>
  );
}

export default page;
