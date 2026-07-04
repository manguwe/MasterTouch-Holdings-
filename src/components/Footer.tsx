import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <img src="/images/logo-transparent.png" alt="MasterTouch" className="h-14 w-14 object-contain mb-4" />
          <h3 className="font-heading text-xl font-bold mb-2">MasterTouch Holdings</h3>
          <p className="text-primary-foreground/70 text-sm">Driven by Excellence and Integrity</p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <Link to="/" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Home</Link>
            <Link to="/projects" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Our Projects</Link>
            <Link to="/testimonials" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Testimonials</Link>
            <Link to="/about" className="block text-primary-foreground/70 hover:text-secondary transition-colors">About Us</Link>
            <Link to="/contact" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Divisions</h4>
          <div className="space-y-2 text-sm">
            <Link to="/piano-academy" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Piano Pathway Academy</Link>
            <Link to="/construction" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Construction & Contracting</Link>
            <Link to="/trading" className="block text-primary-foreground/70 hover:text-secondary transition-colors">General Trading & Suppliers</Link>
            <Link to="/online-shop" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Online Shop</Link>
            <Link to="/logistics" className="block text-primary-foreground/70 hover:text-secondary transition-colors">Logistics & Mobility</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+263785286435" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"><Phone className="w-4 h-4" />+263 785 286 435</a>
            <a href="mailto:takundakusakadza25@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"><Mail className="w-4 h-4" />takundakusakadza25@gmail.com</a>
            <p className="flex items-center gap-2 text-primary-foreground/70"><MapPin className="w-4 h-4" />Harare, Zimbabwe</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} MasterTouch Holdings. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
