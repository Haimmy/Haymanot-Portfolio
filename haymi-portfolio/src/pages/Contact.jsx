import ContactForm from "../components/ContactForm";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-10 py-32">

      <h1 className="text-6xl font-bold gradient-text mb-10">
        Contact Me
      </h1>

      <p className="text-gray-300 mb-10 text-center max-w-2xl">
        Let's create something amazing together.
      </p>

      <div className="flex gap-8 text-4xl mb-10">

        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaYoutube />
        </a>

        <a href="#">
          <FaLinkedin />
        </a>

      </div>

      <ContactForm />

    </section>
  );
}