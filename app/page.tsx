import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudyVue from "@/components/CaseStudyVue";
import CaseStudySkydio from "@/components/CaseStudySkydio";
import AlsoSection from "@/components/AlsoSection";
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
    addressLocality: "San Mateo",
    addressRegion: "CA",
  },
  email: site.email,
  url: "https://grayson-iller.vercel.app",
  sameAs: [site.links.linkedin, site.links.vue],
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
        <CaseStudySkydio />
        <AlsoSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
