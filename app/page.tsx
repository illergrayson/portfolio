import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudyVue from "@/components/CaseStudyVue";
import CaseStudyZephyr from "@/components/CaseStudyZephyr";
import CaseStudySkydio from "@/components/CaseStudySkydio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Design Engineer",
  address: {
    "@type": "PostalPlace",
    addressLocality: "Redwood City",
    addressRegion: "CA",
  },
  email: site.email,
  url: "https://vueniverse.com",
  sameAs: [site.links.linkedin, site.links.vue],
  worksFor: { "@type": "Organization", name: "Skydio" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Embry-Riddle Aeronautical University",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudyVue />
        <CaseStudyZephyr />
        <CaseStudySkydio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
