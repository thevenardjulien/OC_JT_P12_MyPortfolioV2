import "./App.scss";
import Header from "./layouts/Header";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./layouts/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <section className="about" id="about">
        <h2 tabIndex="1">À propos</h2>
        <div className="about__content">
          <div className="about__section about__section-left">
            <Accordion />
          </div>
          <div className="about__section about__section-right">
            <span>
              Après sept années dévouées au sein en commerce alimentaire au sein
              d'une entreprise de surgelés renommée en France, le destin a
              malheureusement pris une tournure inattendue suite à une blessure.
              Cette incapacité à poursuivre mon rôle de responsable de magasin
              s'est rapidement métamorphosée en une{" "}
              <strong>opportunité inattendue</strong>. Désormais, une porte
              s'est ouverte pour suivre une formation dans le domaine de mon
              choix, offrant ainsi la possibilité de{" "}
              <strong>redéfinir ma trajectoire professionnelle</strong> vers
              quelque chose qui correspondrait véritablement à mes aspirations.
            </span>
            <span>
              Possédant un fort attrait envers le{" "}
              <strong>design graphique</strong> et{" "}
              <strong>le développement web</strong>, je me suis naturellement
              tourné vers ces spécialités. Les formations que j'ai eu la chance
              de réaliser n’ont fait que renforcer mes convictions et mon
              appétence pour ce milieu. Je souhaite désormais{" "}
              <strong>apprendre</strong>, <strong>évoluer</strong> et{" "}
              <strong>m'épanouir</strong> dans ces domaines.
            </span>
          </div>
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <Testimonials />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="contact" id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
