import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArtistShowcase from "../components/ArtistShowcase";

export const Route = createFileRoute("/artistas")({
  head: () => ({
    meta: [
      { title: "Artistas — Dreamlikee Records" },
      { name: "description", content: "Conoce a los artistas del roster de Dreamlikee Records. Talento latino que trasciende fronteras." },
      { property: "og:title", content: "Artistas — Dreamlikee Records" },
      { property: "og:description", content: "Talento latino que trasciende fronteras." },
    ],
  }),
  component: ArtistasPage,
});

function ArtistasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="artist-page-section" aria-labelledby="artists-title">
          <div className="mx-auto max-w-7xl text-center px-6">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Nuestros artistas</p>
            <h1 id="artists-title" className="section-heading text-4xl md:text-6xl text-foreground">
              Talento que <span className="text-gradient">trasciende</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Artistas latinos con visión global. Descubre el sonido y la historia de cada uno.
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <ArtistShowcase />
          </div>
        </section>

        <section className="py-20 px-6 bg-card/30">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-heading text-3xl md:text-4xl text-foreground mb-4">
              ¿Quieres ser parte del <span className="text-gradient">Sello</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Buscamos mentes creadoras que marquen la diferencia. Si tienes un proyecto único y apasionante, queremos escucharte. Envía tu demo y únete a nuestra familia de artistas.
            </p>
            <Link to="/contacto" className="btn-glow">Envía tu demo</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
