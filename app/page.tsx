import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/Hero";
import WhyBuiid from "@/components/WhyBuiid";
import KeyFeatures from "@/components/KeyFeatures";
import Faq from "@/components/Faq";
import BookSmarter from "@/components/BookSmarter";
import TripVia from "@/components/TripVia";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyBuiid />
      <TripVia />
      <KeyFeatures />
      <Faq />
      <BookSmarter />
    </section>
  );
}
