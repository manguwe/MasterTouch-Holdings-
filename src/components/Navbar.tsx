import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setDivisionsOpen(false); }, [location]);

  const divisions = [
    { name: "Piano Pathway Academy", path: "/piano-academy" },
    { name: "Construction & Contracting", path: "/construction" },
    { name: "General Trading & Suppliers", path: "/trading" },
    { name: "Online Shop", path: "/online-shop" },
    { name: "Logistics & Mobility", path: "/logistics" },
  ];

  return (
    <>
      {/* Motto ribbon */}
      <div className="bg-purple-dark text-primary-foreground text-center py-1.5 text-xs tracking-widest uppercase font-sans">
        Driven by Excellence and Integrity
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-xl" : "bg-primary"}`}>
        {/* Scroll progress */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/images/logo-transparent.png" alt="MasterTouch Holdings" className="h-12 w-12 object-contain group-hover:drop-shadow-[0_0_8px_hsl(38,70%,50%)] transition-all" />
              <span className="font-heading text-xl text-primary-foreground font-bold">MasterTouch</span>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium">Home</Link>

              <div className="relative" onMouseEnter={() => setDivisionsOpen(true)} onMouseLeave={() => setDivisionsOpen(false)}>
                <button className="flex items-center gap-1 text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium">
                  Divisions <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {divisionsOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-2xl border border-border overflow-hidden">
                      {divisions.map((d) => (
                        <Link key={d.path} to={d.path} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">{d.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/projects" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium">Our Projects</Link>
              <Link to="/testimonials" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium">Testimonials</Link>
              <Link to="/about" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium">About Us</Link>
              <Link to="/contact" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium">Contact</Link>

              <Link to="/contact" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-secondary/30 transition-all gold-shimmer">
                Get Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden">
              <div className="px-4 py-4 space-y-2">
                <Link to="/" className="block py-2 text-primary-foreground/90 text-sm">Home</Link>
                <div className="py-2">
                  <button onClick={() => setDivisionsOpen(!divisionsOpen)} className="flex items-center gap-1 text-primary-foreground/90 text-sm w-full">
                    Divisions <ChevronDown className={`w-4 h-4 transition-transform ${divisionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {divisionsOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {divisions.map((d) => (
                        <Link key={d.path} to={d.path} className="block py-1.5 text-primary-foreground/70 text-sm">{d.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/projects" className="block py-2 text-primary-foreground/90 text-sm">Our Projects</Link>
                <Link to="/testimonials" className="block py-2 text-primary-foreground/90 text-sm">Testimonials</Link>
                <Link to="/about" className="block py-2 text-primary-foreground/90 text-sm">About Us</Link>
                <Link to="/contact" className="block py-2 text-primary-foreground/90 text-sm">Contact</Link>
                <Link to="/contact" className="block bg-secondary text-secondary-foreground text-center py-2.5 rounded-lg text-sm font-semibold mt-3">Get Quote</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
