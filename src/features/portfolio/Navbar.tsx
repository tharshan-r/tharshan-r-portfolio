import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import EngineeringToggle from "./EngineeringToggle";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", ...navItems.map((i) => i.href.slice(1))];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Tharshan"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-mono font-semibold text-primary text-sm">
              Tharshan.dev
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);

              return (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition"
                >
                  {item.label}

                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-2 right-2 -bottom-1 h-[2px] bg-primary rounded-full"
                    />
                  )}
                </button>
              );
            })}

            {/* CTA BUTTON */}
            <a
              href="/tharshan-r-portfolio/Tharshan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              <Download size={14} />
              Resume
            </a>

            <EngineeringToggle />
            <ThemeToggle />
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-1">
            <EngineeringToggle />
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-2"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition"
                >
                  {item.label}
                </button>
              ))}

              {/* MOBILE CTA */}
              <a
                href="/tharshan-r-portfolio/Tharshan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;