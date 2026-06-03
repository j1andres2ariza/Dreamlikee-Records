import { P as reactExports, H as jsxRuntimeExports } from "./worker-entry-IREokZ-G.js";
import { e as createLucideIcon, H as Header, a as FaInstagram, F as FaFacebook, c as FaYoutube, b as FaWhatsapp, M as Music, d as Footer } from "./Footer-C7ei6h7g.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D5LhbiaQ.js";
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactoPage() {
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl text-center pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Contacto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "section-heading text-5xl md:text-6xl text-foreground", children: [
        "Hablemos de tu ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "proyecto" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "¿Tienes una idea? ¿Quieres grabar? Escríbenos y hagamos realidad tu visión musical." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        [{
          icon: MapPin,
          label: "Ubicación",
          value: "Santa Marta, Magdalena, Colombia"
        }, {
          icon: Mail,
          label: "Email",
          value: "gerencia@dreamlikee.com"
        }, {
          icon: Phone,
          label: "Teléfono",
          value: "+57 310 440 0955"
        }, {
          icon: Clock,
          label: "Horario",
          value: "Lunes a Viernes: 8:00 AM — 12:00 PM \n Sábados: 8:00 AM — 12:00 PM"
        }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-1", children: c.value })
          ] })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest mb-4", children: "Redes Sociales" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [{
            icon: FaInstagram,
            href: "https://www.instagram.com/dreamlikeerecords/"
          }, {
            icon: FaFacebook,
            href: "https://www.facebook.com/dreamlikeerecords"
          }, {
            icon: FaYoutube,
            href: "https://www.youtube.com/@DreamlikeeRecords"
          }, {
            icon: FaWhatsapp,
            href: "https://wa.me/573104400955?text=Hola,%20buen%20día.%20Me%20comunico%20desde%20la%20página%20web%20de%20Dreamlikee%20Records%20porque%20estoy%20interesado%20en%20recibir%20información%20sobre%20sus%20servicios%20y%20proyectos%20musicales.%20Quedo%20atento%20a%20su%20respuesta.%20Muchas%20gracias."
          }, {
            icon: Music,
            href: "#"
          }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 18 }) }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 glass-card p-8", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 28, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl font-bold text-foreground mb-2", children: "¡Mensaje enviado!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Te responderemos lo antes posible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSent(false), className: "btn-outline-glow mt-6 text-sm", children: "Enviar otro mensaje" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Envíanos un mensaje" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Nombre" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", placeholder: "Tu nombre" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", placeholder: "tu@email.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Teléfono" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", placeholder: "+57 310 4400955" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Servicio de interés" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grabación" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Mezcla & Mastering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Producción Musical" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Distribución Digital" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sello Discográfico" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Videoclip" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Otro" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Mensaje" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none", placeholder: "Cuéntanos sobre tu proyecto..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-glow w-full text-sm", children: [
          "Enviar mensaje ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactoPage as component
};
