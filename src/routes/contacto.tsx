import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Dreamlikee Records" },
      { name: "description", content: "Contáctanos para reservar una sesión de grabación o solicitar información sobre nuestros servicios." },
      { property: "og:title", content: "Contacto — Dreamlikee Records" },
      { property: "og:description", content: "Reserva tu sesión de grabación en Santa Marta." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("Grabación");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const submitting = useRef(false);
  const whatsappUrl = "https://wa.me/573104400955?text=" + encodeURIComponent("Hola, vengo de la web de Dreamlikee Records y quisiera información para mi proyecto musical.");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting.current) return;
    if (!nombre.trim() || !mensaje.trim()) {
      setErrorMessage("Escribe tu nombre y cuéntanos sobre tu proyecto.");
      return;
    }
    submitting.current = true;
    setErrorMessage("");
    setLoading(true);

    try {
      await emailjs.send(
        "dreamlikee_service",
        "template_mmy400s",
        {
          name: nombre.trim(),
          email: email.trim(),
          phone: telefono.trim(),
          service: servicio,
          message: mensaje.trim(),
        },
        "Tz5ybhvyP5bDHOLjP"
      );

      setSent(true);

      setNombre("");
      setEmail("");
      setTelefono("");
      setServicio("Grabación");
      setMensaje("");
    } catch {
      setErrorMessage("No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.");
    } finally {
      submitting.current = false;
      setLoading(false);
   }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-10 px-5 md:pt-36 md:pb-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Contacto · Dreamlikee Records</p>
          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl text-foreground">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            ¿Quieres grabar, producir o distribuir tu música? Cuéntanos qué necesitas y conversemos sobre tu próximo lanzamiento.
          </p>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 items-start gap-6 lg:gap-8">
          {/* Info */}
          <aside className="lg:col-span-2 min-w-0 rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-white">Estamos en contacto</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">Desde Santa Marta, acompañamos tu próximo proyecto musical.</p>
            <div className="mt-6 divide-y divide-white/10">
            {[
              
              { icon: MapPin, label: "Ubicación", value: "Santa Marta, Magdalena, Colombia" },
              { icon: Mail, label: "Email", value: "gerencia@dreamlikee.com", href: "mailto:gerencia@dreamlikee.com" },
              { icon: Phone, label: "Teléfono", value: "+57 310 440 0955", href: "tel:+573104400955" },
              { icon: Clock, label: "Horario", value: "Lunes a Viernes: 8:00 AM — 12:00 PM  \n  & 2:00 PM - 6:00 PM \n Sábados: 8:00 AM — 12:00 PM"},
            
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4 py-5 first:pt-0">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-300 shrink-0">
                  <c.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">{c.label}</p>

                  {"href" in c && c.href ? (
                    <a href={c.href} className="mt-1 block break-words text-sm text-zinc-100 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">{c.value}</a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-zinc-100 whitespace-pre-line">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            </div>
            <div className="mt-1 border-t border-white/10 pt-6">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Redes Sociales</p>
              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/dreamlikeerecords_/" },
                  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/dreamlikeerecords" },
                  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@DreamlikeeRecords" },
                  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/573104400955?text=Hola,%20buen%20día.%20Me%20comunico%20desde%20la%20página%20web%20de%20Dreamlikee%20Records%20porque%20estoy%20interesado%20en%20recibir%20información%20sobre%20sus%20servicios%20y%20proyectos%20musicales.%20Quedo%20atento%20a%20su%20respuesta.%20Muchas%20gracias." },
                ].map((s, i) => (
                  <a key={i} aria-label={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zinc-200 hover:text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-colors">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
          
          {/* Form */}
          <div className="lg:col-span-3 min-w-0 rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:p-10">
            {sent ? (
              <div role="status" className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={28} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="text-sm text-zinc-400">Te responderemos lo antes posible.</p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-xl border border-white/20 px-5 py-3 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-busy={loading} className="space-y-5">
                <div className="pb-2">
                  <h2 className="font-heading text-2xl font-semibold text-white">Cuéntanos tu idea</h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">Dinos en qué estás trabajando y cómo podemos ayudarte.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm text-zinc-300 mb-2">Nombre</label>
                    <input
                    id="nombre" name="nombre" autoComplete="name"
                      required
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full rounded-xl bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-300 mb-2">Email</label>
                    <input
                    id="email" name="email" autoComplete="email"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm text-zinc-300 mb-2">Teléfono (opcional)</label>
                  <input
                    id="telefono" name="telefono" autoComplete="tel"
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full rounded-xl bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tu número de WhatsApp"
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-sm text-zinc-300 mb-2">Servicio de interés</label>
                  <select
                    id="servicio" name="servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full rounded-xl bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-base text-zinc-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option>Grabación</option>
                    <option>Mezcla & Mastering</option>
                    <option>Producción Musical</option>
                    <option>Distribución Digital</option>
                    <option>Sello Discográfico</option>
                    <option>Videoclip</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm text-zinc-300 mb-2">Mensaje</label>
                  <textarea
                    id="mensaje" name="mensaje"
                    required
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full rounded-xl bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-y min-h-[140px]"
                    placeholder="¿Qué quieres crear? Cuéntanos sobre tu música, el servicio que buscas y las fechas que tienes en mente."
                  />
                </div>
                {errorMessage && <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">{errorMessage}</p>}
                <button type="submit" disabled={loading} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60">
                  {loading ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : <>Enviar mensaje <Send size={16} /></>}
                </button>
                <p className="text-center text-sm text-zinc-400">
                  ¿Prefieres WhatsApp?{" "}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                    Escríbenos <span aria-hidden="true" className="ml-1">↗</span><span className="sr-only"> (abre en una nueva pestaña)</span>
                  </a>
                </p>
                <p className="text-center text-xs leading-relaxed text-zinc-400">Usaremos estos datos para responder a tu solicitud.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
