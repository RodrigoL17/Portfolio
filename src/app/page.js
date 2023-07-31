import ContactSection from "@/components/contactSection";
import IntroSection from "@/components/introSection";
import LandingHeader from "@/components/landingHeader";
import ProjectsSection from "@/components/projectsSection";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <IntroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
