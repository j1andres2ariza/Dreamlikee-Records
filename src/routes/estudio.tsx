import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Mic2, Speaker, Cpu, Music, Disc3 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImg from "../assets/hero-studio.jpg";
import boothImg from "../assets/studio-booth.jpg";
import mixingImg from "../assets/mixing-session.jpg";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Nuestro Estudio — Dreamlikee Records" },
      { name: "description", content: "Conoce nuestro estudio de grabación profesional en Santa Marta con equipamiento de clase mundial." },
      { property: "og:title", content: "Nuestro Estudio — Dreamlikee Records" },
      { property: "og:description", content: "Equipamiento de clase mundial para tu música." },
    ],
  }),
  component: EstudioPage,
});

function EstudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Estudio Dreamlikee" width={1920} height={1080} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center pt-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Nuestro Estudio</p>
          <h1 className="section-heading text-5xl md:text-6xl text-foreground">
            Donde la <span className="text-gradient">magia</span> sucede
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un espacio diseñado para la creatividad, equipado con tecnología de vanguardia y un ambiente que inspira a los artistas.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src={heroImg} alt="Sala de control" width={1920} height={1080} loading="lazy" className="rounded-2xl object-cover w-full h-72 lg:col-span-2" />
            <img src={boothImg} alt="Cabina vocal" width={800} height={600} loading="lazy" className="rounded-2xl object-cover w-full h-72" />
            <img src={mixingImg} alt="Mezcla" width={800} height={600} loading="lazy" className="rounded-2xl object-cover w-full h-64" />
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 h-64 flex flex-col items-center justify-center gap-4 lg:col-span-2">
              <Disc3 size={64} className="text-primary animate-spin" style={{ animationDuration: '5s' }} />
              <p className="font-heading text-xl font-semibold text-foreground">+500 canciones producidas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Equipamiento</p>
            <h2 className="section-heading text-4xl md:text-5xl text-foreground">Tecnología <span className="text-gradient">profesional</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Sala de Control", items: ["Consola SSL Duality", "Monitores Genelec 8351B", "Procesadores Neve & API", "Convertidores Apogee Symphony"] },
              { icon: Mic2, title: "Micrófonos", items: ["Neumann U87 Ai", "AKG C414 XLII", "Shure SM7B", "Rode NTK Tube"] },
              { icon: Speaker, title: "Cabina de Grabación", items: ["Aislamiento acústico total", "Tratamiento con paneles RPG", "Iluminación ambiental LED", "Capacidad para banda completa"] },
              { icon: Cpu, title: "Software DAW", items: ["Pro Tools HDX", "Logic Pro X", "Ableton Live Suite", "Plugins UAD & Waves"] },
              { icon: Music, title: "Instrumentos", items: ["Piano Yamaha C3", "Guitarras Gibson & Fender", "Batería Pearl Masters", "Sintetizadores Moog & Roland"] },
              { icon: Disc3, title: "Post-Producción", items: ["Suite de mastering dedicada", "Monitoreo en surround 5.1", "Medición calibrada SPL", "Entrega en todos los formatos"] },
            ].map((e, i) => (
              <div key={i} className="glass-card p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <e.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{e.title}</h3>
                <ul className="space-y-2">
                  {e.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
