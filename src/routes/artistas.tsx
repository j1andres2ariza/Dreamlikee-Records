import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ExternalLink, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import artist1 from "../assets/artist-1.jpg";
import artist2 from "../assets/artist-2.jpg";
import artist3 from "../assets/artist-3.jpg";
import joel from "../assets/JoelBrown.jpeg";
import layno from "../assets/layno.jpeg";
import romix from "../assets/romix.jpeg";
import sanjuan from "../assets/sanjuan.jpeg";
import naar from "../assets/naar.jpeg";
import antony from "../assets/antony.jpeg";
import bracho from "../assets/bracho.jpeg";
import oscar from "../assets/oscar.jpeg";
import supremo from "../assets/supremo.jpeg";
import boothImg from "../assets/studio-booth.jpg";

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

const artists = [
  { img: joel, name: "Joel Brown", genre: "Afrobeats", bio: "Artista urbano de Santa Marta con millones de reproducciones. Su estilo fusiona ritmos caribeños con beats modernos.", tracks: ["O'Mama", "Plan A", "Ahee"], spotify: "https://open.spotify.com/intl-es/artist/3gDO9U6A877KG5a40t6Fk7?si=8JD1_e80SAi_WBjJHwo04w", youtube: "https://www.youtube.com/@JoelBrown_tv" },
  { img: layno, name: "Layno", genre: "Afrobeats", bio: "Cantautor con una voz única que mezcla sonidos tropicales. Su música ha llegado a playlists editoriales de Spotify.", tracks: ["Tucutu", "Ahora", "Dime"], spotify: "https://open.spotify.com/intl-es/artist/2XtgRciCL8vFOaBqLAzMPI?si=Awu9jvBbT1232WZTIxpsjw", youtube:  "https://www.youtube.com/@Layno.o" },
  { img:sanjuan, name: "San Juan", genre: "Reggaetón / Dancehall", bio: "Cantautor con un estilo único que combina elementos del reggaetón y el dancehall. Su música ha sido destacada en plataformas de streaming internacionales.", tracks: ["Biri Biri", "Recuerdame", "2 veces santa"], spotify: "https://open.spotify.com/intl-es/artist/7DYcGRiCfTdJT0zEvdFe7S?si=3daz4n2rRBSoGlj5ag4QuQ", youtube: "https://www.youtube.com/@SanjuanOfficial" },
  { img: naar, name: "Naar", genre: "Trap", bio: "Rapper y productor emergente que ha ganado reconocimiento por su estilo auténtico y letras introspectivas. Su música ha resonado con una audiencia joven en toda América Latina.", tracks: ["Como Sería", "Dame LXZ", "Toy Botao"], spotify: "https://open.spotify.com/intl-es/artist/2cPfw567WdgfmGNpKKKkFm?si=jT5YUVxiSCCIVF8vEo05WQ", youtube: "https://www.youtube.com/@ELNaaRMusic" },
  { img: romix, name: "Romix", genre: "Salsa", bio: "Productor y DJ que ha llevado los sonidos del Caribe a la escena electrónica internacional.", tracks: ["Besame", "Enamorate", "No voy más"], spotify: "https://open.spotify.com/intl-es/artist/3Lj4Qc3mpCoyA43Gz7DibF?si=4-nGvQIzTtaO3beiTZaYng", youtube: "https://www.youtube.com/@RomixOficial" },
  { img: antony, name: "Antony LR", genre: "Salsa Urbana", bio: "Cantautor y productor que fusiona la salsa tradicional con elementos urbanos modernos. Su música ha sido reconocida por su innovación y autenticidad.", tracks: ["Te tengo que soltare", "Así lo quieres", "ya me cansé"], spotify: "https://open.spotify.com/intl-es/artist/78ajOAUrHYnOybCQcVEeps?si=XLPbYE06SeeFOk9XEvpIRQ", youtube: "https://www.youtube.com/@antonylrbendecidoforever" },
  { img: bracho, name: "Bracho", genre: "Tropi-pop", bio: "Cantautor que mezcla ritmos tropicales con pop contemporáneo. Su música ha sido destacada por su frescura y autenticidad.", tracks: ["Soltero"], spotify: "https://open.spotify.com/intl-es/artist/4n7sxLeqBGZD3vWz5oD0DU?si=WBs_durvQ6KJTFhzrNa6ug", youtube: "https://www.youtube.com/@bernardobracho477" },
  { img: oscar, name: "Oscar Molina", genre: "Popular", bio: "Cantautor de musica popular colombiana con una carrera consolidada. Su estilo combina elementos tradicionales con influencias contemporáneas.", tracks: [""], spotify: "#", youtube: "#" },
  { img: supremo, name: "Supremo", genre: "Electro-House", bio: "Productor y DJ que ha llevado los sonidos del Caribe a la escena electrónica internacional.", tracks: ["Ambar", "OG", "Victory"], spotify: "https://open.spotify.com/intl-es/artist/6foPnBOhxrhLrd5Fg2TRI4?si=9ei9RgciQfifTwcHdHG-yA", youtube: "https://www.youtube.com/channel/UCtIZThpJFnpTUn5gWaIL-8Q" },

];

function ArtistasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl text-center pt-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Nuestros Artistas</p>
          <h1 className="section-heading text-5xl md:text-6xl text-foreground">
            Talento que <span className="text-gradient">trasciende</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Artistas latinos con visión global. Cada uno con un sonido único que representa lo mejor de la música latina.
          </p>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          {artists.map((a, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className="overflow-hidden">
                  <img src={a.img} alt={a.name} width={600} height={600} loading="lazy" className="w-full h-80 lg:h-full object-contain" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ direction: 'ltr' }}>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">{a.genre}</p>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-3">{a.name}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{a.bio}</p>
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Canciones destacadas</p>
                    <div className="space-y-2">
                      {a.tracks.map((t, j) => (
                        <div key={j} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                          <Play size={14} className="text-primary" />
                          <span className="text-sm text-foreground">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={a.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-glow text-xs py-2 px-4"
                    >
                      <ExternalLink size={14} /> Spotify
                    </a>
                    <a
                      href={a.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-glow text-xs py-2 px-4"
                    >
                      <ExternalLink size={14} /> YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-heading text-3xl md:text-4xl text-foreground mb-4">
            ¿Quieres ser parte del <span className="text-gradient">roster</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Estamos buscando nuevos talentos. Envíanos tu música y cuéntanos tu historia.
          </p>
          <Link to="/contacto" className="btn-glow">
            Envía tu demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
