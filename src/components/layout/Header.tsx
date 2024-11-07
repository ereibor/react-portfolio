import { useState } from "react";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  

  return (
    <div>
      <nav className="h-[72px] flex items-center justify-between font-medium text-base">
        <h1 className="uppercase m-auto md:m-0">Tunere Ereibor</h1>

        <div>
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#home" onClick={() => setActiveNav("#home")}  className="pb-1 transition-colors duration-300 hover:border-b-2 hover:border-black"> 
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setActiveNav("#about")}  className="pb-1 transition-colors duration-300 hover:border-b-2 hover:border-black">
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setActiveNav("#skills")}  className="pb-1 transition-colors duration-300 hover:border-b-2 hover:border-black">
                Skills
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}  className="pb-1 transition-colors duration-300 hover:border-b-2 hover:border-black">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setActiveNav("#contact")}  className="pb-1 transition-colors duration-300 hover:border-b-2 hover:border-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
