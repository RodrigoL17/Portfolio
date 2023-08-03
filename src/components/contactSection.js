import ContactForm from "./contactForm";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("ContactSection");

  return (
    <section
      id="contact"
      className="landing-section min-h-screen  bg-slate-100 flex items-center justify-center p-[4rem]"
    >
      <ContactForm
        title={t("title")}
        paragraph={t("paragraph")}
        name={t("name")}
        email={t("email")}
        tel={t("tel")}
        subject={t("subject")}
        subjectPlaceHolder={t("subjectPlaceHolder")}
        message={t("message")}
        messagePlaceHolder={t("messagePlaceHolder")}
        sendMessage={t("sendMessage")}
      />
    </section>
  );
}
