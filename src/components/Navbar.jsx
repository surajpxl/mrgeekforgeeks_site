import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { to: "home", label: "Home", type: "scroll" },
  { to: "about", label: "About", type: "scroll" },
  { to: "services", label: "Services", type: "scroll" },
];

const dropdownItems = [
  { to: "team", label: "Team", type: "scroll" },
  { to: "company-roles", label: "Company Roles", type: "scroll" },
  { to: "collaborate", label: "Collaborate", type: "scroll" },
  { to: "socials", label: "Socials", type: "scroll" },
];

const contactLink = { to: "/contact", label: "Contact", type: "route" };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Simulate loading on mount
    const timer = setTimeout(() => setLoading(false), 500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (link) => {
    setIsOpen(false);
    setIsDropdownOpen(false);

    if (link.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.to)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(link.to)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.to);
    }
  };

  if (loading) {
    return (
      <header className="glass-effect sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-16 w-16 bg-gray-700 animate-pulse rounded-full" />
            <div className="h-6 w-48 bg-gray-700 animate-pulse rounded" />
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-20 bg-gray-700 animate-pulse rounded" />
            ))}
          </div>
          <div className="md:hidden">
            <div className="h-6 w-6 bg-gray-700 animate-pulse rounded" />
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="glass-effect sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleClick({ to: "home", type: "scroll" })}
        >
          <img src="/logo-removebg-preview.png" alt="logo" className="h-16 md:h-20" />
          <span className="text-2xl font-bold text-cyan-400 text-glow">
            MR GEEK FOR GEEKS
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link)}
              className="font-bold text-gray-200 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="font-bold text-gray-200 hover:text-cyan-400 transition-colors duration-300">
              More
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 w-48 bg-gray-800 text-gray-200 rounded shadow-lg flex flex-col">
                {dropdownItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item)}
                    className="px-4 py-2 text-left hover:bg-cyan-500 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <button
            onClick={() => handleClick(contactLink)}
            className="font-bold text-gray-200 hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 px-4 py-6 space-y-4 flex flex-col items-start">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link)}
              className="font-bold hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="font-bold hover:text-cyan-400 transition-colors duration-300 flex items-center justify-between w-full"
            >
              More
              <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {dropdownItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item)}
                    className="font-bold hover:text-cyan-400 transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <button
            onClick={() => handleClick(contactLink)}
            className="font-bold hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
