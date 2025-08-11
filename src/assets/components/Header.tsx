import { FaHome, FaProjectDiagram, FaUser, FaCogs, } from "react-icons/fa";
import { personalInfo } from "../../constants";
import { FloatingDock } from "./ui/nav-redes";

const Header = () => {
  // Ítems para el FloatingDock (navegación interna + redes)
  const dockItems = [
    { title: "Home", icon: <FaHome size={20} />, href: "#home" },
    { title: "Projects", icon: <FaProjectDiagram size={20} />, href: "#projects" },
    { title: "Skills", icon: <FaCogs size={20} />, href: "#skills" },
    { title: "About", icon: <FaUser size={20} />, href: "#about" },
    
    
    ...personalInfo.socialLinks.map((link) => ({
      title: link.name,
      icon: link.icon,
      href: link.url,
    })),
  ];

  return (
    <header className="bg-black text-white w-full shadow relative">
      {/* Dock escritorio - centrado arriba */}
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          items={dockItems}
          desktopClassName="hidden md:flex"
        />
      </div>

      {/* Dock móvil - arriba a la izquierda */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <FloatingDock
          items={dockItems}
          mobileClassName="block md:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
