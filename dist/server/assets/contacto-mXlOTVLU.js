import { jsxs, jsx } from "react/jsx-runtime";
import { MapPin, Mail, Phone, Clock, Music, Send } from "lucide-react";
import { useState } from "react";
import { H as Header, F as Footer } from "./Footer-nMFhx-AF.js";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "@tanstack/react-router";
function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("Grabación");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("dreamlikee_service", "template_mmy400s", {
        nombre,
        email,
        telefono,
        servicio,
        mensaje
      }, "Tz5ybhvyP5bDHOLjP");
      setSent(true);
      setNombre("");
      setEmail("");
      setTelefono("");
      setServicio("Grabación");
      setMensaje("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Error: ${error?.text || error?.message || "Error desconocido"}`);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl text-center pt-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Contacto" }),
      /* @__PURE__ */ jsxs("h1", { className: "section-heading text-5xl md:text-6xl text-foreground", children: [
        "Hablemos de tu ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "proyecto" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "¿Tienes una idea? ¿Quieres grabar? Escríbenos y hagamos realidad tu visión musical." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-28 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
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
        }].map((c, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsx(c.icon, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: c.label }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground mt-1 whitespace-pre-line", children: c.value })
          ] })
        ] }, i)),
        /* @__PURE__ */ jsxs("div", { className: "glass-card p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest mb-4", children: "Redes Sociales" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: [{
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
          }].map((s, i) => /* @__PURE__ */ jsx("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(s.icon, { size: 18 }) }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 glass-card p-8", children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full py-16 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow", children: /* @__PURE__ */ jsx(Send, { size: 28, className: "text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-2xl font-bold text-foreground mb-2", children: "¡Mensaje enviado!" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Te responderemos lo antes posible." }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSent(false), className: "btn-outline-glow mt-6 text-sm", children: "Enviar otro mensaje" })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Envíanos un mensaje" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Nombre" }),
            /* @__PURE__ */ jsx("input", { required: true, type: "text", value: nombre, onChange: (e) => setNombre(e.target.value), className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", placeholder: "Tu nombre" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Email" }),
            /* @__PURE__ */ jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", placeholder: "gerencia@dreamlikee.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Teléfono" }),
          /* @__PURE__ */ jsx("input", { type: "tel", value: telefono, onChange: (e) => setTelefono(e.target.value), className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", placeholder: "+57 310 4400955" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Servicio de interés" }),
          /* @__PURE__ */ jsxs("select", { value: servicio, onChange: (e) => setServicio(e.target.value), className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50", children: [
            /* @__PURE__ */ jsx("option", { children: "Grabación" }),
            /* @__PURE__ */ jsx("option", { children: "Mezcla & Mastering" }),
            /* @__PURE__ */ jsx("option", { children: "Producción Musical" }),
            /* @__PURE__ */ jsx("option", { children: "Distribución Digital" }),
            /* @__PURE__ */ jsx("option", { children: "Sello Discográfico" }),
            /* @__PURE__ */ jsx("option", { children: "Videoclip" }),
            /* @__PURE__ */ jsx("option", { children: "Otro" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1.5", children: "Mensaje" }),
          /* @__PURE__ */ jsx("textarea", { required: true, rows: 4, value: mensaje, onChange: (e) => setMensaje(e.target.value), className: "w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none", placeholder: "Cuéntanos sobre tu proyecto..." })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-glow w-full text-sm", children: [
          "Enviar mensaje ",
          /* @__PURE__ */ jsx(Send, { size: 16 })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ContactoPage as component
};
