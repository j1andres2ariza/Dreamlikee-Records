import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock, Send, Music } from "lucide-react";
import { useState } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "dreamlikee_service",
        "template_mmy400s",
        {
          name: nombre,
          email: email,
          phone: telefono,
          service: servicio,
          message: mensaje,
        },
        "Tz5ybhvyP5bDHOLjP"
      );

      setSent(true);

      setNombre("");
      setEmail("");
      setTelefono("");
      setServicio("Grabación");
      setMensaje("");
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      alert(
        `Error: ${error?.text || error?.message || "Error desconocido"}`
      );
    } finally {
      setLoading(false);
   }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl text-center pt-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Contacto</p>
          <h1 className="section-heading text-5xl md:text-6xl text-foreground">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea? ¿Quieres grabar? Escríbenos y hagamos realidad tu visión musical.
          </p>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              
              { icon: MapPin, label: "Ubicación", value: "Santa Marta, Magdalena, Colombia" },
              { icon: Mail, label: "Email", value: "gerencia@dreamlikee.com" },
              { icon: Phone, label: "Teléfono", value: "+57 310 440 0955" },
              { icon: Clock, label: "Horario", value: "Lunes a Viernes: 8:00 AM — 12:00 PM \n Sábados: 8:00 AM — 12:00 PM"},
            
            ].map((c, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{c.label}</p>

                  <p className="text-sm text-foreground mt-1 whitespace-pre-line">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="glass-card p-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Redes Sociales</p>
              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/dreamlikeerecords/" },
                  { icon: FaFacebook, href: "https://www.facebook.com/dreamlikeerecords" },
                  { icon: FaYoutube, href: "https://www.youtube.com/@DreamlikeeRecords" },
                  { icon: FaWhatsapp, href: "https://wa.me/573104400955?text=Hola,%20buen%20día.%20Me%20comunico%20desde%20la%20página%20web%20de%20Dreamlikee%20Records%20porque%20estoy%20interesado%20en%20recibir%20información%20sobre%20sus%20servicios%20y%20proyectos%20musicales.%20Quedo%20atento%20a%20su%20respuesta.%20Muchas%20gracias." },
                  { icon: Music, href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:col-span-3 glass-card p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow">
                  <Send size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="text-sm text-muted-foreground">Te responderemos lo antes posible.</p>
                <button onClick={() => setSent(false)} className="btn-outline-glow mt-6 text-sm">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Envíanos un mensaje</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Nombre</label>
                    <input
                      required
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="gerencia@dreamlikee.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="+57 310 4400955"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Servicio de interés</label>
                  <select
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                  <label className="block text-xs text-muted-foreground mb-1.5">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button type="submit" className="btn-glow w-full text-sm">
                  Enviar mensaje <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
