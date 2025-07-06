import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (id) => {
    setActive(id);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0f0f1a]/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-pink-600">Ashok.dev</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={item.id === "contact" ? -200 : -70} // ✅ Fix for contact
              className={`cursor-pointer text-sm font-medium transition hover:text-pink-600 ${
                active === item.id
                  ? "text-pink-600"
                  : "text-gray-800 dark:text-gray-300"
              }`}
              onSetActive={() => handleSetActive(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#0f0f1a] flex flex-col items-center justify-center gap-6 z-40 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={item.id === "contact" ? -200 : -70} // ✅ Fix for contact here too
              onClick={() => handleSetActive(item.id)}
              className={`cursor-pointer font-medium transition hover:text-pink-600 ${
                active === item.id
                  ? "text-pink-600"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
