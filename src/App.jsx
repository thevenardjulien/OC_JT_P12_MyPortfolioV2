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
            <span>
              Après 7 années de bons et loyaux services dans le commerce
              alimentaire au sein d'une entreprise de surgelés très connu en
              France, je me suis malheureusement blessé. Cette blessure,
              m'empêchant de continuer à exercer mon activité de responsable de
              magasin, c'est rapidement transformé en une opportunité. En effet,
              il m'etait désormais possible d'entreprendre une formation dans le
              domaine de mon choix. Une chance unique qui me permettrait
              peut-être de me réorienter dans ce que j'apprécierais réellement
              faire.
            </span>
            <br />
            <br />
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
