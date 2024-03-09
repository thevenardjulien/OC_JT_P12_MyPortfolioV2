import "./App.scss";
import Hero from "./components/Hero";
import Header from "./layouts/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./layouts/Footer";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <section className="about" id="about">
        <h2>À propos</h2>
        <Accordion />
      </section>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="contact" id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
