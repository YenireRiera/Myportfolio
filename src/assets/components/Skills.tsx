import { skills, softSkills } from "../../constants";
import { TextHoverEffect } from "./ui/Hover";
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-4 max-w-7xl mx-auto flex flex-col items-center gap-5 scroll-mt-20"
    >
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-light font-Inter text-white text-center mb-1 tracking-widest">
      <TextHoverEffect text="SKILLS" />
      </h2>

      {/* Skills técnicas */}
      <div className="w-full">
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="hover:bg-black flex flex-col items-center justify-center p-4 rounded-lg shadow-md border transition-transform hover:scale-105"
              style={{
                
                borderColor: skill.borderColor,
              }}
            >
              <img
                src={skill.imageSrc}
                alt={skill.technologyName}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-base font-semibold">{skill.technologyName}</p>
              <span className="text-xs text-gray-300">{skill.context}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="w-full">
        
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full text-sm font-medium border border-[#d7b186] text-[#d7b186] bg-black bg-opacity-20 hover:bg-opacity-40 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
