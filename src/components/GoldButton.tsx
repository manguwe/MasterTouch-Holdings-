import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const GoldButton = ({ children, to, href, onClick, className = "", type = "button" }: Props) => {
  const base = `inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 gold-shimmer ${className}`;

  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{children}</a>;
  return <button type={type} onClick={onClick} className={base}>{children}</button>;
};

export default GoldButton;
