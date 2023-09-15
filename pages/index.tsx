import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import Credits from "@/components/sections/Credits";
import Discord from "@/components/sections/Discord";
import Hiring from "@/components/sections/Hiring";
import Landing from "@/components/sections/Landing";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start">
      <Landing />
      <AboutUs />
      <Skills />
      <Services />
      <Portfolio />
      <Credits />
      <Hiring />
      <Discord />
      <Contact />
    </main>
  );
}
