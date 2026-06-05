import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Disc3, ArrowRight, Play, Users, Radio, TrendingUp, Music, Headphones, Globe, Sparkles } from "lucide-react";
import { H as Header, F as Footer } from "./Footer-nMFhx-AF.js";
import { h as heroImg, b as boothImg, m as mixingImg } from "./mixing-session-BbVu4024.js";
import { j as joel, r as romix, o as oscar } from "./oscar-BjVJW5sQ.js";
import { useRef } from "react";
import "react-icons/fa";
function Index() {
  const audioRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("audio", { ref: audioRef, children: /* @__PURE__ */ jsx("source", { src: "/music/intro.mp3", type: "audio/mpeg" }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "animated-bg", children: [
        /* @__PURE__ */ jsx("div", { className: "animated-bg-grid" }),
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Estudio Dreamlikee Records", width: 1920, height: 1080, className: "absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity animate-float-slow" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "animated-bg-noise" }),
        /* @__PURE__ */ jsx("div", { className: "scan-line" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl animate-fade-in-up", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-foreground/80 mb-8 backdrop-blur", children: [
          /* @__PURE__ */ jsx(Disc3, { size: 14, className: "vinyl-spin" }),
          " Sello discográfico · Santa Marta, Colombia"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "relative", children: [
          /* @__PURE__ */ jsx("span", { className: "block mega-title animate-reveal-clip", children: "DREAMLIKEE" }),
          /* @__PURE__ */ jsxs("span", { className: "block mega-title-outline animate-reveal-clip", style: {
            animationDelay: "0.2s"
          }, children: [
            "RECORDS",
            /* @__PURE__ */ jsx("span", { className: "caret" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "absolute -inset-x-4 -inset-y-2 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-white/10 via-white/5 to-transparent" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Firmamos, producimos y distribuimos a la nueva generación de artistas latinos. Desarrollo artístico integral, distribución global y promoción en plataformas." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex items-end h-8", children: [0, 0.15, 0.3, 0.1, 0.4, 0.25, 0.05, 0.35, 0.2, 0.45, 0.1, 0.3].map((d, i) => /* @__PURE__ */ jsx("span", { className: "equalizer-bar", style: {
          animationDelay: `${d}s`
        } }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contacto", className: "btn-glow", children: [
            "Firma con nosotros ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            if (audioRef.current) {
              if (audioRef.current.paused) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
              }
            }
          }, className: "btn-outline-glow inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Play, { size: 18 }),
            "Escucha el roster"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 border-y border-white/5 bg-black/40 backdrop-blur py-4 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "marquee-track text-2xl md:text-3xl font-heading font-bold tracking-tight", children: Array.from({
        length: 2
      }).map((_, k) => /* @__PURE__ */ jsx("span", { className: "flex items-center gap-8 pr-8", children: ["NEW MUSIC", "★", "DISTRIBUCIÓN GLOBAL", "★", "DOLBY ATMOS", "★", "ARTIST DEVELOPMENT", "★", "SYNC & LICENSING", "★", "SANTA MARTA · CO", "★"].map((t, i) => /* @__PURE__ */ jsx("span", { className: i % 2 === 0 ? "text-foreground/80" : "text-foreground/30", children: t }, i)) }, k)) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative z-10 -mt-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsx("div", { className: "glass-card grid grid-cols-2 md:grid-cols-4 gap-6 p-8", children: [{
      value: "500+",
      label: "Lanzamientos"
    }, {
      value: "120+",
      label: "Artistas firmados"
    }, {
      value: "50M+",
      label: "Streams globales"
    }, {
      value: "8+",
      label: "Años de experiencia"
    }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-3xl font-heading font-bold text-gradient", children: s.value }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
    ] }, i)) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-28 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "animated-bg opacity-60", children: /* @__PURE__ */ jsx("div", { className: "animated-bg-grid" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Servicios del sello" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-heading text-4xl md:text-5xl text-foreground", children: [
            "Desarrollo artístico",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "360°" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [{
          icon: Users,
          title: "Firma de artistas",
          desc: "Contratos justos y transparentes. Desarrollamos tu carrera con un plan a 3 años: identidad, catálogo y fanbase."
        }, {
          icon: Radio,
          title: "Distribución global",
          desc: "Tu música en Spotify, Apple Music, YouTube, Tidal y +150 plataformas con royalties claros y reportes mensuales."
        }, {
          icon: TrendingUp,
          title: "Marketing & PR",
          desc: "Pitching editorial, playlists, prensa especializada y campañas de paid media para hacer crecer tu audiencia."
        }, {
          icon: Music,
          title: "Producción musical",
          desc: "Beatmakers y productores residentes en reggaetón, pop urbano, afrobeat, vallenato y más."
        }, {
          icon: Headphones,
          title: "Mezcla & mastering",
          desc: "Ingenieros certificados Dolby Atmos llevando tu sonido al estándar internacional."
        }, {
          icon: Globe,
          title: "Sync & licencias",
          desc: "Colocamos tu catálogo en cine, series, publicidad y videojuegos a través de nuestra red global."
        }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card p-8 group cursor-pointer", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(s.icon, { size: 24 }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground mb-2", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxs(Link, { to: "/servicios", className: "btn-outline-glow text-sm", children: [
          "Ver todos los servicios ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-28 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-card/30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-pan opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "El estudio del sello" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-heading text-4xl md:text-5xl text-foreground mb-6", children: [
            "Donde nacen",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "los hits" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: "Cada artista firmado tiene acceso ilimitado a nuestro estudio insignia: consolas analógicas, monitoreo de referencia y un equipo creativo residente para llevar tu visión a master final." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: ["Consola SSL profesional", "Micrófonos Neumann & AKG", "Monitores Genelec 8351", "Pro Tools HDX & Logic Pro", "Cabinas con aislamiento clase A"].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: item })
          ] }, i)) }),
          /* @__PURE__ */ jsxs(Link, { to: "/estudio", className: "btn-glow mt-10 inline-flex text-sm", children: [
            "Conoce el estudio ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: boothImg, alt: "Cabina de grabación", width: 800, height: 600, loading: "lazy", className: "rounded-2xl object-cover w-full h-64 col-span-2" }),
          /* @__PURE__ */ jsx("img", { src: mixingImg, alt: "Sesión de mezcla", width: 800, height: 600, loading: "lazy", className: "rounded-2xl object-cover w-full h-48" }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center h-48 animate-pulse-glow", children: /* @__PURE__ */ jsx(Disc3, { size: 48, className: "text-primary vinyl-spin" }) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-28 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "animated-bg opacity-70" }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Roster oficial" }),
          /* @__PURE__ */ jsxs("h2", { className: "section-heading text-4xl md:text-5xl text-foreground", children: [
            "Artistas ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "del sello" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center", children: [{
          img: joel,
          name: "Joel Brown",
          genre: "Afrobeats",
          streams: "2M streams"
        }, {
          img: romix,
          name: "Romix",
          genre: "Salsa",
          streams: "5M streams"
        }, {
          img: oscar,
          name: "Oscar Molina",
          genre: "Popular",
          streams: "8M streams"
        }].map((a, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card overflow-hidden group w-full max-w-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("img", { src: a.img, alt: a.name, width: 600, height: 600, loading: "lazy", className: "w-full h-72 object-contain object-center group-hover:scale-105 transition-transform duration-500" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxs("span", { className: "absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] font-medium text-primary border border-primary/30", children: [
              /* @__PURE__ */ jsx(Sparkles, { size: 10 }),
              " ",
              a.streams
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground", children: a.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: a.genre })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxs(Link, { to: "/artistas", className: "btn-outline-glow text-sm", children: [
          "Ver todos los artistas ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-28 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-pan opacity-20" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs("div", { className: "glass-card p-16 relative overflow-hidden backdrop-blur-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" }),
        /* @__PURE__ */ jsxs("h2", { className: "section-heading text-4xl md:text-5xl text-foreground mb-4", children: [
          "¿Listo para ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "firmar" }),
          " con nosotros?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10 max-w-lg mx-auto", children: "Envíanos tu demo y conversemos. Buscamos a los próximos artistas que definirán el sonido latino de la nueva era." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contacto", className: "btn-glow", children: [
            "Enviar demo ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/573104400955", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-glow", children: "WhatsApp directo" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
