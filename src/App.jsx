import "./App.scss";
import Hero from "./components/Hero";
import Header from "./layouts/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;
