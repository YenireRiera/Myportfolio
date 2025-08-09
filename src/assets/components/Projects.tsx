import { AnimatedProjects } from "./ui/Projects-Cards";
import { TextHoverEffect } from "./ui/Hover";


const Projects = () => {
  const projects = [
    {
      title: "SICOT - Sistema Integral de Seguridad",
      description:
        "Aplicación web para el control y operación de seguridad en el trabajo. Permite reportes, inspecciones y notificaciones según el rol del usuario.",
      image: "../../../public/img/SicotImg.png",
      link: "https://yenireriera.github.io/SICOT/",
    },
    {
      title: "Portafolio Profesional",
      description:
        "Sitio web personal creado con React, Tailwind y TypeScript para presentar proyectos, habilidades y experiencia profesional.",
      image: "../../../public/img/PortafolioYenire.png",
      link: "https://yeniredev.netlify.app",
    },
    {
      title: "Sistema de Gestión Escolar",
      description:
        "Aplicación de gestión de notas, asistencia y comunicación entre docentes, estudiantes y padres.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="w-full py-5  ">
      {/* Título visual antes del carrusel */}
      <h2 className="text-2xl md:text-3xl font-light font-Inter text-white text-center mb-1 tracking-widest">
      <TextHoverEffect text="MY PROJECTS" />
      </h2>
      <div className="py-5">
      {/* Carrusel / animación de proyectos */}
      <AnimatedProjects projects={projects} autoplay />
      </div>
    </section>
  );
};

export default Projects;
