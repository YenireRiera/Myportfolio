import ProfileImage from "./assets/components/ProfileImage";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";

import Projects from "./assets/components/Projects";
import { Background } from "./assets/components/ui/Background";

function App() {
  return (
    <div className="relative min-h-screen font-light text-white scroll-smooth">
      {/* Fondo global */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <Background />
      </div>

      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main >
        <section id="home" className="grid place-items-center text-center">
          <ProfileImage />
        </section>

        <section id="projects" className="grid  place-items-center text-center">
          <Projects />
        </section>

        <section id="skills" className="grid  place-items-center text-center">
          <Skills />
        </section>

        <section id="about" className="grid  place-items-center text-center">
          <About />
        </section>


      </main>

      {/* Pie de página */}

    </div>
  );
}

export default App;
