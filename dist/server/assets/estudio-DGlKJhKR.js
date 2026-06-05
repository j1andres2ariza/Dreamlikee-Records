import { jsxs, jsx } from "react/jsx-runtime";
import { Disc3, Monitor, Mic2, Speaker, Cpu, Music } from "lucide-react";
import { H as Header, F as Footer } from "./Footer-nMFhx-AF.js";
import { h as heroImg, b as boothImg, m as mixingImg } from "./mixing-session-BbVu4024.js";
import "@tanstack/react-router";
import "react";
import "react-icons/fa";
function EstudioPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Estudio Dreamlikee", width: 1920, height: 1080, className: "w-full h-full object-cover opacity-30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl text-center pt-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Nuestro Estudio" }),
        /* @__PURE__ */ jsxs("h1", { className: "section-heading text-5xl md:text-6xl text-foreground", children: [
          "Donde la ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "magia" }),
          " sucede"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Un espacio diseñado para la creatividad, equipado con tecnología de vanguardia y un ambiente que inspira a los artistas." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Sala de control", width: 1920, height: 1080, loading: "lazy", className: "rounded-2xl object-cover w-full h-72 lg:col-span-2" }),
      /* @__PURE__ */ jsx("img", { src: boothImg, alt: "Cabina vocal", width: 800, height: 600, loading: "lazy", className: "rounded-2xl object-cover w-full h-72" }),
      /* @__PURE__ */ jsx("img", { src: mixingImg, alt: "Mezcla", width: 800, height: 600, loading: "lazy", className: "rounded-2xl object-cover w-full h-64" }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 h-64 flex flex-col items-center justify-center gap-4 lg:col-span-2", children: [
        /* @__PURE__ */ jsx(Disc3, { size: 64, className: "text-primary animate-spin", style: {
          animationDuration: "5s"
        } }),
        /* @__PURE__ */ jsx("p", { className: "font-heading text-xl font-semibold text-foreground", children: "+500 canciones producidas" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-card/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Equipamiento" }),
        /* @__PURE__ */ jsxs("h2", { className: "section-heading text-4xl md:text-5xl text-foreground", children: [
          "Tecnología ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "profesional" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [{
        icon: Monitor,
        title: "Sala de Control",
        items: ["Consola SSL Duality", "Monitores Genelec 8351B", "Procesadores Neve & API", "Convertidores Apogee Symphony"]
      }, {
        icon: Mic2,
        title: "Micrófonos",
        items: ["Neumann U87 Ai", "AKG C414 XLII", "Shure SM7B", "Rode NTK Tube"]
      }, {
        icon: Speaker,
        title: "Cabina de Grabación",
        items: ["Aislamiento acústico total", "Tratamiento con paneles RPG", "Iluminación ambiental LED", "Capacidad para banda completa"]
      }, {
        icon: Cpu,
        title: "Software DAW",
        items: ["Pro Tools HDX", "Logic Pro X", "Ableton Live Suite", "Plugins UAD & Waves"]
      }, {
        icon: Music,
        title: "Instrumentos",
        items: ["Piano Yamaha C3", "Guitarras Gibson & Fender", "Batería Pearl Masters", "Sintetizadores Moog & Roland"]
      }, {
        icon: Disc3,
        title: "Post-Producción",
        items: ["Suite de mastering dedicada", "Monitoreo en surround 5.1", "Medición calibrada SPL", "Entrega en todos los formatos"]
      }].map((e, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5", children: /* @__PURE__ */ jsx(e.icon, { size: 24 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground mb-4", children: e.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: e.items.map((item, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/60" }),
          item
        ] }, j)) })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  EstudioPage as component
};
