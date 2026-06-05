import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Play, ExternalLink, ArrowRight } from "lucide-react";
import { H as Header, F as Footer } from "./Footer-nMFhx-AF.js";
import { j as joel, r as romix, o as oscar } from "./oscar-BjVJW5sQ.js";
import "react";
import "react-icons/fa";
const layno = "/dreamlikee/assets/layno-DoBorsY7.jpeg";
const sanjuan = "/dreamlikee/assets/sanjuan-BGFCPgwO.jpeg";
const naar = "/dreamlikee/assets/naar-4U4_-K-k.jpeg";
const antony = "/dreamlikee/assets/antony-C5aklJFy.jpeg";
const bracho = "/dreamlikee/assets/bracho-Ob8Kly9v.jpeg";
const supremo = "/dreamlikee/assets/supremo-CfhDPWep.jpeg";
const artists = [{
  img: joel,
  name: "Joel Brown",
  genre: "Afrobeats",
  bio: "Artista urbano de Santa Marta con millones de reproducciones. Su estilo fusiona ritmos caribeños con beats modernos.",
  tracks: ["O'Mama", "Plan A", "Ahee"],
  spotify: "https://open.spotify.com/intl-es/artist/3gDO9U6A877KG5a40t6Fk7?si=8JD1_e80SAi_WBjJHwo04w",
  youtube: "https://www.youtube.com/@JoelBrown_tv"
}, {
  img: layno,
  name: "Layno",
  genre: "Afrobeats",
  bio: "Cantautor con una voz única que mezcla sonidos tropicales. Su música ha llegado a playlists editoriales de Spotify.",
  tracks: ["Tucutu", "Ahora", "Dime"],
  spotify: "https://open.spotify.com/intl-es/artist/2XtgRciCL8vFOaBqLAzMPI?si=Awu9jvBbT1232WZTIxpsjw",
  youtube: "https://www.youtube.com/@Layno.o"
}, {
  img: sanjuan,
  name: "San Juan",
  genre: "Reggaetón / Dancehall",
  bio: "Cantautor con un estilo único que combina elementos del reggaetón y el dancehall. Su música ha sido destacada en plataformas de streaming internacionales.",
  tracks: ["Biri Biri", "Recuerdame", "2 veces santa"],
  spotify: "https://open.spotify.com/intl-es/artist/7DYcGRiCfTdJT0zEvdFe7S?si=3daz4n2rRBSoGlj5ag4QuQ",
  youtube: "https://www.youtube.com/@SanjuanOfficial"
}, {
  img: naar,
  name: "Naar",
  genre: "Trap",
  bio: "Rapper y productor emergente que ha ganado reconocimiento por su estilo auténtico y letras introspectivas. Su música ha resonado con una audiencia joven en toda América Latina.",
  tracks: ["Como Sería", "Dame LXZ", "Toy Botao"],
  spotify: "https://open.spotify.com/intl-es/artist/2cPfw567WdgfmGNpKKKkFm?si=jT5YUVxiSCCIVF8vEo05WQ",
  youtube: "https://www.youtube.com/@ELNaaRMusic"
}, {
  img: romix,
  name: "Romix",
  genre: "Salsa",
  bio: "Productor y DJ que ha llevado los sonidos del Caribe a la escena electrónica internacional.",
  tracks: ["Besame", "Enamorate", "No voy más"],
  spotify: "https://open.spotify.com/intl-es/artist/3Lj4Qc3mpCoyA43Gz7DibF?si=4-nGvQIzTtaO3beiTZaYng",
  youtube: "https://www.youtube.com/@RomixOficial"
}, {
  img: antony,
  name: "Antony LR",
  genre: "Salsa Urbana",
  bio: "Cantautor y productor que fusiona la salsa tradicional con elementos urbanos modernos. Su música ha sido reconocida por su innovación y autenticidad.",
  tracks: ["Te tengo que soltare", "Así lo quieres", "ya me cansé"],
  spotify: "https://open.spotify.com/intl-es/artist/78ajOAUrHYnOybCQcVEeps?si=XLPbYE06SeeFOk9XEvpIRQ",
  youtube: "https://www.youtube.com/@antonylrbendecidoforever"
}, {
  img: bracho,
  name: "Bracho",
  genre: "Tropi-pop",
  bio: "Cantautor que mezcla ritmos tropicales con pop contemporáneo. Su música ha sido destacada por su frescura y autenticidad.",
  tracks: ["Soltero"],
  spotify: "https://open.spotify.com/intl-es/artist/4n7sxLeqBGZD3vWz5oD0DU?si=WBs_durvQ6KJTFhzrNa6ug",
  youtube: "https://www.youtube.com/@bernardobracho477"
}, {
  img: oscar,
  name: "Oscar Molina",
  genre: "Popular",
  bio: "Cantautor de musica popular colombiana con una carrera consolidada. Su estilo combina elementos tradicionales con influencias contemporáneas.",
  tracks: [""],
  spotify: "#",
  youtube: "#"
}, {
  img: supremo,
  name: "Supremo",
  genre: "Electro-House",
  bio: "Productor y DJ que ha llevado los sonidos del Caribe a la escena electrónica internacional.",
  tracks: ["Ambar", "OG", "Victory"],
  spotify: "https://open.spotify.com/intl-es/artist/6foPnBOhxrhLrd5Fg2TRI4?si=9ei9RgciQfifTwcHdHG-yA",
  youtube: "https://www.youtube.com/channel/UCtIZThpJFnpTUn5gWaIL-8Q"
}];
function ArtistasPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl text-center pt-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest mb-3", children: "Nuestros Artistas" }),
      /* @__PURE__ */ jsxs("h1", { className: "section-heading text-5xl md:text-6xl text-foreground", children: [
        "Talento que ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "trasciende" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Artistas latinos con visión global. Cada uno con un sonido único que representa lo mejor de la música latina." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-28 px-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl space-y-8", children: artists.map((a, i) => /* @__PURE__ */ jsx("div", { className: "glass-card overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`, children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: a.img, alt: a.name, width: 600, height: 600, loading: "lazy", className: "w-full h-80 lg:h-full object-contain" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 lg:p-12 flex flex-col justify-center", style: {
        direction: "ltr"
      }, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-primary uppercase tracking-widest mb-2", children: a.genre }),
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-3xl font-bold text-foreground mb-3", children: a.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: a.bio }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest mb-3", children: "Canciones destacadas" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: a.tracks.map((t, j) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer", children: [
            /* @__PURE__ */ jsx(Play, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: t })
          ] }, j)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: a.spotify, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-glow text-xs py-2 px-4", children: [
            /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
            " Spotify"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: a.youtube, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-glow text-xs py-2 px-4", children: [
            /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
            " YouTube"
          ] })
        ] })
      ] })
    ] }) }, i)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-card/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "section-heading text-3xl md:text-4xl text-foreground mb-4", children: [
        "¿Quieres ser parte del ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "roster" }),
        "?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Estamos buscando nuevos talentos. Envíanos tu música y cuéntanos tu historia." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contacto", className: "btn-glow", children: [
        "Envía tu demo ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ArtistasPage as component
};
