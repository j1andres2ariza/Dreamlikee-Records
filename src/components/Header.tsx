import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logod.png";

const navLinks = [
  { to: "/" as const, label: "Inicio" },
  { to: "/estudio" as const, label: "Estudio" },
  { to: "/servicios" as const, label: "Servicios" },
  { to: "/artistas" as const, label: "Artistas" },
  { to: "/contacto" as const, label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
       <Link to="/" className="flex items-center h-12 ml-9">
        <img
          src={logo}
          alt="Dreamlikee Records"
          className="h-12 w-12 object-contain scale-245"
        />
        </Link>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-medium text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contacto" className="btn-glow hidden md:inline-flex text-sm py-2 px-5">
          Reserva tu sesión
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block text-sm font-medium text-muted-foreground py-2"
              activeProps={{ className: "block text-sm font-medium text-foreground py-2" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn-glow block text-center text-sm py-2" onClick={() => setOpen(false)}>
            Reserva tu sesión
          </Link>
        </div>
      )}
    </header>
  );
}
