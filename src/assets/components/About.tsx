import { FaCalendar, FaRegBuilding, FaGraduationCap } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { experience, education } from "../../constants";
import { TextHoverEffect } from "./ui/Hover";

const About = () => {
  return (
    <section id="about" className="py-10 max-w-6xl mx-auto px-4">
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12 tracking-widest">
        <TextHoverEffect text="ABOUT ME" />
      </h2>

      {/* Presentación */}
      <div className="bg-black/80 border border-[#d7b186] rounded-xl p-6 mb-10 shadow-lg hover:shadow-2xl transition-all duration-300">
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a passionate{" "}
          <span className="text-[#d7b186] font-semibold">
            Full Stack Developer
          </span>{" "}
          with experience building modern, scalable web applications. My focus
          is on creating intuitive interfaces, optimizing backend performance,
          and delivering clean, maintainable code. I enjoy working with
          technologies like JavaScript, Node.js, Express, and MySQL, and I’m
          always eager to learn and adapt to new challenges.
        </p>
      </div>

      {/* Grid de Experiencia y Educación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* EXPERIENCIA */}
        <div>
          <h3 className="bg-black text-2xl font-light text-white mb-6 border-b border-[#d7b186] pb-2">
            Professional Experience
          </h3>
          <div className="flex flex-col gap-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-black/80 p-5 rounded-xl shadow-lg border border-[#80DEEA] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold font-Inter text-amber-50 flex items-center gap-2">
                  <FaRegBuilding className="text-[#d7b186]" />
                  {exp.position}
                </h4>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-2">
                  <p className="flex items-center gap-2 text-amber-100 text-sm">
                    <FaCalendar className="text-[#d7b186]" />
                    {exp.timeRange}
                  </p>
                  <div className="text-sm text-amber-50">
                    <p className="flex items-center gap-2">
                      <IoLocationOutline className="text-[#d7b186]" />
                      {exp.companyLocation}
                    </p>
                    <p className="mt-1 font-medium">{exp.companyName}</p>
                  </div>
                </div>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-4">
                  {exp.technologiesUsed.map((t, index) => (
                    <li
                      key={index}
                      className="border border-[#d7b186] rounded-full px-3 py-1 text-xs font-medium text-[#d7b186] hover:bg-[#d7b186] hover:text-black transition-colors"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCACIÓN */}
        <div>
          <h3 className="bg-black text-2xl font-light text-white mb-6 border-b border-[#d7b186] pb-2">
            Education
          </h3>
          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-black/80 p-5 rounded-xl shadow-lg border border-[#90EF9] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-amber-50 flex items-center gap-2">
                  <FaGraduationCap className="text-[#d7b186]" />
                  {edu.degree}
                </h4>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-2">
                  <p className="flex items-center gap-2 text-gray-100 text-sm">
                    <FaCalendar className="text-[#d7b186]" />
                    {edu.timeRange}
                  </p>
                  <div className="text-sm text-amber-100">
                    <p className="flex items-center gap-2">
                      <IoLocationOutline className="text-[#d7b186]" />
                      {edu.location}
                    </p>
                    <p className="mt-1 font-medium">{edu.institution}</p>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-amber-50 mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                )}

                {edu.technologiesUsed?.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {edu.technologiesUsed.map((t, index) => (
                      <li
                        key={index}
                        className="border border-[#d7b186] rounded-full px-3 py-1 text-xs font-medium text-[#d7b186] hover:bg-[#d7b186] hover:text-black transition-colors"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
              <h2 className="relative inline-block mt-10 px-6 py-2 font-Alice text-2xl md:text-3xl text-[#5ee07d] tracking-wider border border-[#d7b186] rounded-full shadow-lg bg-black/80 overflow-hidden group">
            {/* Brillo animado */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></span>

            {/* Texto */}
            <span className="relative z-10">Disponibilidad Inmediata</span>

            {/* Línea decorativa inferior */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#80DEEA] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          

        </div>
      </div>

      {/* Botones finales */}
      <div className="mt-10 justify-center pb-20 pt-10 flex flex-wrap gap-4">
        {/* Botón Contáctame */}
        <a
          href="mailto:yenire86@gmail.com"
          className="relative bg-gradient-to-r from-[#e4d5c2] via-[#d9c2a6] to-[#e4d5c2] text-black font-semibold rounded-full flex gap-2 items-center justify-center px-6 py-3 font-Inter shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
          aria-label="Enviar correo a Yenire"
          title="Enviar correo a Yenire"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
          📩
          <span className="group-hover:tracking-wider transition-all duration-300">
            Contáctame
          </span>
        </a>

        {/* Botón CV */}
        <a
          href="/Yenire-Rodriguez-CV.pdf"
          className="relative bg-gradient-to-r from-[#e4d5c2] via-[#d9c2a6] to-[#e4d5c2] text-black font-semibold rounded-full flex gap-2 items-center justify-center px-6 py-3 font-Inter shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Descargar CV de Yenire"
          title="Descargar CV"
          download
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
          📄
          <span className="group-hover:tracking-wider transition-all duration-300">
            Curriculum Vitae
          </span>
        </a>
      </div>
    </section>
  );
};

export default About;
