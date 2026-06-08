import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, Music, Headphones, Radio, Disc3, Users, ArrowRight, Play, Star, Sparkles, TrendingUp, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImg from "../assets/hero-studio.jpg";
import boothImg from "../assets/studio-booth.jpg";
import mixingImg from "../assets/mixing-session.jpg";
import artist1 from "../assets/artist-1.jpg";
import artist2 from "../assets/artist-2.jpg";
import artist3 from "../assets/artist-3.jpg";
import joel from "../assets/joel.jpeg";
import oscar from "../assets/oscar.jpeg";
import romix from "../assets/romix.jpeg";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <audio ref={audioRef}>
        <source src="/music/intro.mp3" type="audio/mpeg" />
      </audio>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background layers */}
        <div className="animated-bg">
          <div className="animated-bg-grid" />
          <img
            src={heroImg}
            alt="Estudio Dreamlikee Records"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity animate-float-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="animated-bg-noise" />
          <div className="scan-line" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
          <div className="max-w-5xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-foreground/80 mb-8 backdrop-blur">
              <Disc3 size={14} className="vinyl-spin" /> Sello discográfico · Santa Marta, Colombia
            </div>
            <h1 className="relative">
              <span className="block mega-title animate-reveal-clip">DREAMLIKEE</span>
              <span className="block mega-title-outline animate-reveal-clip" style={{ animationDelay: "0.2s" }}>RECORDS<span className="caret" /></span>
              <span className="absolute -inset-x-4 -inset-y-2 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Firmamos, producimos y distribuimos a la nueva generación de artistas latinos. Desarrollo artístico integral, distribución global y promoción en plataformas.
            </p>
            {/* Live equalizer accent */}
            <div className="mt-8 flex items-end h-8">
              {[0, 0.15, 0.3, 0.1, 0.4, 0.25, 0.05, 0.35, 0.2, 0.45, 0.1, 0.3].map((d, i) => (
                <span key={i} className="equalizer-bar" style={{ animationDelay: `${d}s` }} />
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contacto" className="btn-glow">
                Firma con nosotros <ArrowRight size={18} />
              </Link>


              <button
                onClick={() => {
                  if (audioRef.current) {
                    if (audioRef.current.paused) {
                      audioRef.current.play();
                    } else {
                      audioRef.current.pause();
                    }
                  }
                }}
                className="btn-outline-glow inline-flex items-center gap-2"
              >
                <Play size={18} />
                Ultimo Lanzamiento
              </button>


            </div>
          </div>
        </div>
        {/* Marquee at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 border-y border-white/5 bg-black/40 backdrop-blur py-4 overflow-hidden">
          <div className="marquee-track text-2xl md:text-3xl font-heading font-bold tracking-tight">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex items-center gap-8 pr-8">
                {["NEW MUSIC", "★", "DISTRIBUCIÓN GLOBAL", "★", "DOLBY ATMOS", "★", "ARTIST DEVELOPMENT", "★", "SYNC & LICENSING", "★", "SANTA MARTA · CO", "★"].map((t, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-foreground/80" : "text-foreground/30"}>{t}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
            {[
              { value: "500+", label: "Lanzamientos" },
              { value: "120+", label: "Artistas firmados" },
              { value: "50M+", label: "Streams globales" },
              { value: "8+", label: "Años de experiencia" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-heading font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="animated-bg opacity-60"><div className="animated-bg-grid" /></div>
        <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Servicios del sello</p>
            <h2 className="section-heading text-4xl md:text-5xl text-foreground">Desarrollo artístico<br /><span className="text-gradient">360°</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Firma de artistas", desc: "Contratos justos y transparentes. Desarrollamos tu carrera con un plan a 3 años: identidad, catálogo y fanbase." },
              { icon: Radio, title: "Distribución global", desc: "Tu música en Spotify, Apple Music, YouTube, Tidal y +150 plataformas con royalties claros y reportes mensuales." },
              { icon: TrendingUp, title: "Marketing & PR", desc: "Pitching editorial, playlists, prensa especializada y campañas de paid media para hacer crecer tu audiencia." },
              { icon: Music, title: "Producción musical", desc: "Beatmakers y productores residentes en reggaetón, pop urbano, afrobeat, vallenato y más." },
              { icon: Headphones, title: "Mezcla & mastering", desc: "Ingenieros certificados Dolby Atmos llevando tu sonido al estándar internacional." },
              { icon: Globe, title: "Sync & licencias", desc: "Colocamos tu catálogo en cine, series, publicidad y videojuegos a través de nuestra red global." },
            ].map((s, i) => (
              <div key={i} className="glass-card p-8 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servicios" className="btn-outline-glow text-sm">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Studio showcase */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute inset-0 gradient-pan opacity-10" />
        <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">El estudio del sello</p>
              <h2 className="section-heading text-4xl md:text-5xl text-foreground mb-6">
                Donde nacen<br /><span className="text-gradient">los hits</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada artista firmado tiene acceso ilimitado a nuestro estudio insignia: consolas analógicas, monitoreo de referencia y un equipo creativo residente para llevar tu visión a master final.
              </p>
              <div className="space-y-4">
                {["Consola SSL profesional", "Micrófonos Neumann & AKG", "Monitores Genelec 8351", "Pro Tools HDX & Logic Pro", "Cabinas con aislamiento clase A"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/estudio" className="btn-glow mt-10 inline-flex text-sm">
                Conoce el estudio <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={boothImg} alt="Cabina de grabación" width={800} height={600} loading="lazy" className="rounded-2xl object-cover w-full h-64 col-span-2" />
              <img src={mixingImg} alt="Sesión de mezcla" width={800} height={600} loading="lazy" className="rounded-2xl object-cover w-full h-48" />
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center h-48 animate-pulse-glow">
                <Disc3 size={48} className="text-primary vinyl-spin" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Artists preview */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="animated-bg opacity-70" />
        <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Roster oficial</p>
            <h2 className="section-heading text-4xl md:text-5xl text-foreground">Artistas <span className="text-gradient">del sello</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              { img: joel, name: "Joel Brown", genre: "Afrobeats", streams: "2M streams" },
              { img: romix, name: "Romix", genre: "Salsa", streams: "5M streams" },
              { img: oscar, name: "Oscar Molina", genre: "Popular", streams: "8M streams" },
              
            ].map((a, i) => (
              <div key={i} className="glass-card overflow-hidden group w-full max-w-sm">
                <div className="overflow-hidden relative">
                  <img src={a.img} alt={a.name} width={600} height={600} loading="lazy" className="w-full h-72 object-contain object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] font-medium text-primary border border-primary/30">
                    <Sparkles size={10} /> {a.streams}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{a.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.genre}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/artistas" className="btn-outline-glow text-sm">
              Ver todos los artistas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-pan opacity-20" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-card p-16 relative overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="section-heading text-4xl md:text-5xl text-foreground mb-4">
              ¿Listo para <span className="text-gradient">firmar</span> con nosotros?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Envíanos tu demo y conversemos. Buscamos a los próximos artistas que definirán el sonido latino de la nueva era.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-glow">
                Enviar demo <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/573104400955" target="_blank" rel="noopener noreferrer" className="btn-outline-glow">
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
