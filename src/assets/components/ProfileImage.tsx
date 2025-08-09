
import { CiSaveDown2 } from "react-icons/ci";
import { personalInfo } from "../../constants";
import profileImg from "../Yenire.jpg";

const ProfileImage = () => {
  return (
    <div  className="pt-26 pb-4 flex flex-col items-center space-y-6 text-center overflow-hidden relative">
    

      {/* Contenido principal - encima del fondo */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Nombre */}
        <h1 className="text-xl text-[#d7b186] md:text-2xl font-Alice tracking-widest">
          {personalInfo.name}
        </h1>

        {/* Imagen de perfil */}
        <div className="w-65 h-65 rounded-full shadow-lg border-2 border-[#e4d5c2] hover:scale-105 transition-transform duration-300 overflow-hidden">
          <img
            src={profileImg}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Título y redes sociales */}
        <section className="space-y-2 max-w-xl m-5">
          <h2 className="text-3xl tracking-wide font-Inter text-[#d7b186]">
            {personalInfo.occupation}
          </h2>

          {/* Redes sociales */}
          <div className="flex justify-center gap-5 mt-5">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="text-[#e4d5c2] hover:text-[#a58c6f] transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-[#d7b186] font-Inter">{personalInfo.location}</p>

          {/* Botón descargar CV */}
          <div className="mt-3 justify-center flex gap-2">
            <a
              href="/Yenire-Rodriguez-CV.pdf"
              className="bg-[#e4d5c2] text-black font-semibold rounded-md flex gap-1.5 items-center justify-center px-5 font-Inter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar CV"
              title="Descargar CV"
              download
            >
              CURRICULUM VITAE <CiSaveDown2 />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileImage;
