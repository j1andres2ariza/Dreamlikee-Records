import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Menu, Music } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
const logo = "/dreamlikee/assets/logod-DfEq9MhS.png";
const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/estudio", label: "Estudio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/artistas", label: "Artistas" },
  { to: "/contacto", label: "Contacto" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center h-12 ml-9", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: logo,
          alt: "Dreamlikee Records",
          className: "h-12 w-12 object-contain scale-245"
        }
      ) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8 flex-1 justify-center", children: navLinks.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          activeProps: { className: "text-sm font-medium text-foreground" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsx(Link, { to: "/contacto", className: "btn-glow hidden md:inline-flex text-sm py-2 px-5", children: "Reserva tu sesión" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setOpen(!open), className: "md:hidden text-foreground", children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { className: "md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-3", children: [
      navLinks.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "block text-sm font-medium text-muted-foreground py-2",
          activeProps: { className: "block text-sm font-medium text-foreground py-2" },
          onClick: () => setOpen(false),
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsx(Link, { to: "/contacto", className: "btn-glow block text-center text-sm py-2", onClick: () => setOpen(false), children: "Reserva tu sesión" })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-bold text-foreground", children: "Dreamlikee Records" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Estudio de grabación y sello discográfico en Santa Marta, Colombia. Producción, mezcla y distribución global para artistas latinos." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-6", children: [
          { icon: FaInstagram, href: "https://www.instagram.com/dreamlikeerecords/", label: "IG" },
          { icon: FaFacebook, href: "https://www.facebook.com/dreamlikeerecords", label: "FB" },
          { icon: FaYoutube, href: "https://www.youtube.com/@DreamlikeeRecords", label: "YT" },
          { icon: Music, href: "#", label: "SP" }
        ].map((s, i) => /* @__PURE__ */ jsx("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(s.icon, { size: 18 }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-heading font-semibold text-foreground mb-4", children: "Navegación" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
          { to: "/", label: "Inicio" },
          { to: "/estudio", label: "Estudio" },
          { to: "/servicios", label: "Servicios" },
          { to: "/artistas", label: "Artistas" },
          { to: "/contacto", label: "Contacto" }
        ].map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, className: "block text-sm text-muted-foreground hover:text-foreground transition-colors", children: l.label }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-heading font-semibold text-foreground mb-4", children: "Contacto" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "Santa Marta, Colombia" }),
          /* @__PURE__ */ jsx("p", { children: "gerencia@dreamlikee.com" }),
          /* @__PURE__ */ jsx("p", { children: "+57 310 440 0955" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "glow-line mt-12 mb-6" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-muted-foreground", children: "© 2026 Dreamlikee Records. Todos los derechos reservados." })
  ] }) });
}
export {
  Footer as F,
  Header as H
};
