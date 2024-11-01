import { Helmet } from "react-helmet-async";
import { SectionShowcase } from "../components/SectionShowcase/SectionShowcase";
import { SectionShop } from "../components/SectionShop/SectionShop";
import { SectionTestimonies } from "../components/SectionTestimonies/SectionTestimonies";
import { SectionDivider } from "../components/SectionDivider/SectionDivider";

export function Home() {
  return (
    <>
      <section>
        <SectionDivider />
        <SectionShowcase />
        <SectionDivider />
        <SectionShop />
        <SectionDivider />
        <SectionTestimonies />
      </section>
    </>
  );
}
