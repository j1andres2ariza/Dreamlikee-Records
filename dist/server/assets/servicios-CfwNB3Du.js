import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Mic, Headphones, Music, Radio, Users, Video, Palette, Star, ScrollTextIcon, Check, ArrowRight } from "lucide-react";
import { H as Header, F as Footer } from "./Footer-nMFhx-AF.js";
import "react";
import "react-icons/fa";
const services = [{
  icon: Mic,
  title: "Grabación Profesional",
  desc: "Sesiones de grabación en cabinas aisladas acústicamente con micrófonos de alta gama y pre-amplificadores profesionales.",
  features: ["Cabina vocal aislada", "Grabación multipista", "Ingeniero de sonido dedicado", "Sesiones flexibles"]
}, {
  icon: Headphones,
  title: "Mezcla & Mastering",
  desc: "Ingenieros certificados llevan tu sonido al nivel de las grandes producciones con plugins y hardware profesional.",
  features: ["Mezcla en Pro Tools HDX", "Mastering para streaming", "Revisiones ilimitadas", "Entrega en múltiples formatos"]
}, {
  icon: Music,
  title: "Producción Musical",
  desc: "Creación de beats, arreglos musicales y composición en géneros urbanos, pop, reggaetón, vallenato y más.",
  features: ["Beats exclusivos", "Arreglos a medida", "Composición colaborativa", "Instrumentación real"]
}, {
  icon: Radio,
  title: "Distribución Digital",
  desc: "Tu música en +150 plataformas digitales incluyendo Spotify, Apple Music, YouTube Music, Amazon y más.",
  features: ["Spotify, Apple Music, YouTube", "+150 plataformas", "Reportes de regalías", "Conservas tus derechos"]
}, {
  icon: Users,
  title: "Sello Discográfico",
  desc: "Desarrollo artístico integral con estrategia de branding, lanzamiento y promoción a nivel global.",
  features: ["Estrategia de lanzamiento", "Branding artístico", "Relaciones con medios", "Networking industria"]
}, {
  icon: Video,
  title: "Producción Audiovisual",
  desc: "Videoclips, lyric videos, visualizers y contenido para redes sociales con calidad cinematográfica.",
  features: ["Videoclips profesionales", "Lyric videos", "Content para redes", "Dirección creativa"]
}, {
  icon: Palette,
  title: "Diseño & Branding",
  desc: "Identidad visual para artistas: covers de álbum, logos, material promocional y presencia de marca.",
  features: ["Covers de álbum", "Identidad visual", "Material promocional", "Social media kits"]
}, {
  icon: Star,
  title: "Consultoría Musical",
  desc: "Asesoría personalizada en carrera musical, estrategia de lanzamientos y crecimiento en plataformas digitales.",
  features: ["Plan de carrera", "Estrategia digital", "Análisis de mercado", "Mentoría personalizada"]
}, {
  icon: ScrollTextIcon,
  title: "Publishing",
  desc: "Administración editorial y monetización de composiciones musicales a nivel global. Protegemos tus obras y maximizamos tus regalías.",
  features: ["Registro de obras", "Recaudo internacional", "Licencias y sincronización", "Youtube Content ID", "Gestión de catálogo", "Protección de composiciones"]
}];
function ServiciosPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl text-center pt-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Servicios" }),
      /* @__PURE__ */ jsxs("h1", { className: "section-heading text-5xl md:text-6xl text-foreground", children: [
        "Soluciones ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "completas" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Desde la grabación hasta la distribución, ofrecemos todo lo que necesitas para llevar tu música al mundo." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-28 px-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsx("div", { className: "glass-card p-8 group", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(s.icon, { size: 28 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: s.desc }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: s.features.map((f, j) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-surface-foreground", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-primary shrink-0" }),
          f
        ] }, j)) })
      ] })
    ] }) }, i)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-card/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "section-heading text-3xl md:text-4xl text-foreground mb-4", children: [
        "¿Necesitas un paquete ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "personalizado" }),
        "?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Cada proyecto es único. Contáctanos y diseñaremos un plan que se ajuste a tus necesidades y presupuesto." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contacto", className: "btn-glow", children: [
        "Solicita una cotización ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ServiciosPage as component
};
