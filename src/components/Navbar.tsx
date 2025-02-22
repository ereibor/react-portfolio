import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-gray-300 ">
            {" "}
            Tunere
          </a>

          <div
            className="w-7 h-5 relative text-white cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white border-b-2 border-transparent pb-1 hover:border-b-blue-800 transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white border-b-2 border-transparent pb-1 hover:border-b-blue-800 transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white border-b-2 border-transparent pb-1 hover:border-b-blue-800 transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white border-b-2 border-transparent pb-1 hover:border-b-blue-800 transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
