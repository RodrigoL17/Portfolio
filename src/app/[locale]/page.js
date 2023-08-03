import ContactSection from "@/components/contactSection";
import IntroSection from "@/components/introSection";
import LandingHeader from "@/components/landingHeader";
import ProjectsSection from "@/components/projectsSection";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <LandingHeader
        home={t("home")}
        projects={t("projects")}
        contact={t("contact")}
        locale={getLocale()}
      />
      <main>
        <IntroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
