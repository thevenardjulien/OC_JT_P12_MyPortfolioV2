import "./App.scss";
import Hero from "./components/Hero";
import Header from "./layouts/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <section className="about" id="about">
        <h2>À propos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam
          ex consequuntur! Quae et fuga ad officia earum labore voluptate
          molestiae nesciunt veniam ipsam at possimus magnam, enim expedita
          laudantium nostrum ab provident odit. Modi odit neque, deserunt fuga
          placeat sit labore, corporis quisquam earum vitae, maxime dolorem
          velit sunt sint nemo ex animi eos dicta est totam. Placeat eos
          cupiditate officiis corrupti eaque nihil blanditiis repellat molestias
          voluptates atque harum distinctio laborum fugiat ipsa eligendi,
          quaerat, rem maiores commodi dolor nam non beatae neque. Quos amet
          obcaecati sunt reiciendis praesentium eligendi distinctio molestias
          ducimus, cumque libero quam maxime nihil consequuntur sit porro!
          Accusamus expedita rerum suscipit nobis, eaque, sequi voluptas eveniet
          distinctio amet excepturi a architecto aliquam magni similique odio
          inventore deleniti cumque. Soluta nam facere harum voluptatem placeat
          beatae repudiandae, laboriosam ab necessitatibus ex veniam maxime,
          natus laborum exercitationem nulla saepe at, et enim accusamus
          distinctio quia! Nobis!
        </p>
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
    </>
  );
}

export default App;
