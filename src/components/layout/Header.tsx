import { useState } from "react";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  

  return (
    <div>
      <nav className="h-[72px] flex items-center justify-between font-medium text-base">
        <h1 className="uppercase">Tunere Ereibor</h1>

        <div>
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#home" onClick={() => setActiveNav("#home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setActiveNav("#about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setActiveNav("#skills")}>
                Skills
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setActiveNav("#contact")}>
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
