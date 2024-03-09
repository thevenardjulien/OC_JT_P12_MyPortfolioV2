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
        <div className="about__content">
          <div className="about__section about__section-left">
            <Accordion />
          </div>
          <div className="about__section about__section-right">
            Possédant un fort attrait envers le{" "}
            <strong>design graphique</strong> et{" "}
            <strong>le développement web</strong>, je me suis naturellement{" "}
            tourné vers ces spécialités. Les formations que j'ai eu la chance de
            faire n’ont fait que renforcer mes convictions et mon appétence pour
            ce milieu. Je souhaite désormais <strong>apprendre</strong>,{" "}
            <strong>évoluer</strong> et être le plus <strong>épanoui</strong>{" "}
            possible possible dans ce domaine.
          </div>
        </div>
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
