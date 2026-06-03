import { Link } from "@tanstack/react-router";
import { Music } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube, } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-heading text-xl font-bold text-foreground">Dreamlikee Records</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Estudio de grabación y sello discográfico en Santa Marta, Colombia. Producción, mezcla y distribución global para artistas latinos.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: FaInstagram, href: "https://www.instagram.com/dreamlikeerecords/", label: "IG" },
                { icon: FaFacebook, href: "https://www.facebook.com/dreamlikeerecords", label: "FB" },
                { icon: FaYoutube, href: "https://www.youtube.com/@DreamlikeeRecords", label: "YT" },
                { icon: Music, href: "#", label: "SP" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Navegación</h4>
            <div className="space-y-2">
              {[
                { to: "/" as const, label: "Inicio" },
                { to: "/estudio" as const, label: "Estudio" },
                { to: "/servicios" as const, label: "Servicios" },
                { to: "/artistas" as const, label: "Artistas" },
                { to: "/contacto" as const, label: "Contacto" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Santa Marta, Colombia</p>
              <p>gerencia@dreamlikee.com</p>
              <p>+57 310 440 0955</p>
            </div>
          </div>
        </div>

        <div className="glow-line mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground">© 2026 Dreamlikee Records. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
