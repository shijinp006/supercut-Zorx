import { Contact } from "../../components/Contact";
import { ContactForm } from "../../components/ContactForm";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <ContactForm />
      <Contact />
    </>
  );
}
