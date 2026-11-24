import joel from "../assets/joel.jpeg";
import layno from "../assets/layno.jpeg";
import romix from "../assets/romix.jpeg";
import sanjuan from "../assets/sanjuan.jpeg";
import naar from "../assets/naar.jpeg";
import antony from "../assets/antony.jpeg";
import bracho from "../assets/bracho.jpeg";
import oscar from "../assets/oscar.jpeg";
import supremo from "../assets/supremo.jpeg";

export const artists = [
  { img: joel, portrait: "/artists/joel.webp", name: "Joel Brown", genre: "Afrobeats", bio: "Artista urbano de Santa Marta con millones de reproducciones. Su estilo fusiona ritmos caribeños con beats modernos.", tracks: ["El Acuerdo", "Plan A", "O'Mama"], spotify: "https://open.spotify.com/intl-es/artist/3gDO9U6A877KG5a40t6Fk7?si=8JD1_e80SAi_WBjJHwo04w", youtube: "https://www.youtube.com/@JoelBrown_tv" },
  { img: layno, portrait: "/artists/layno.webp", name: "Layno", genre: "Afrobeats", bio: "Cantautor con una voz única que mezcla sonidos tropicales. Su música ha llegado a playlists editoriales de Spotify.", tracks: ["¿Que Tal?", "Tucutu", "Ahora"], spotify: "https://open.spotify.com/intl-es/artist/2XtgRciCL8vFOaBqLAzMPI?si=Awu9jvBbT1232WZTIxpsjw", youtube:  "https://www.youtube.com/@Layno.o" },
  { img: sanjuan, portrait: "/artists/sanjuan.webp", name: "San Juan", genre: "Reggaetón / Dancehall", bio: "Cantautor con un estilo único que combina elementos del reggaetón y el dancehall. Su música ha sido destacada en plataformas de streaming internacionales.", tracks: ["La Chinita", "Recuerdame", "2 Veces Santa"], spotify: "https://open.spotify.com/intl-es/artist/7DYcGRiCfTdJT0zEvdFe7S?si=3daz4n2rRBSoGlj5ag4QuQ", youtube: "https://www.youtube.com/@SanjuanOfficial" },
  { img: naar, portrait: "/artists/naar.webp", name: "Naar", genre: "Trap", bio: "Rapper y productor emergente que ha ganado reconocimiento por su estilo auténtico y letras introspectivas. Su música ha resonado con una audiencia joven en toda América Latina.", tracks: ["Como Sería", "Dame LXZ", "La Real"], spotify: "https://open.spotify.com/intl-es/artist/2cPfw567WdgfmGNpKKKkFm?si=jT5YUVxiSCCIVF8vEo05WQ", youtube: "https://www.youtube.com/@ELNaaRMusic" },
  { img: romix, portrait: "/artists/romix.webp", name: "Romix", genre: "Salsa", bio: "Productor y DJ que ha llevado los sonidos del Caribe a la escena electrónica internacional.", tracks: ["Besame", "Ay Amor - Quedate Conmigo - Versión Salsa", "No Voy Más"], spotify: "https://open.spotify.com/intl-es/artist/3Lj4Qc3mpCoyA43Gz7DibF?si=4-nGvQIzTtaO3beiTZaYng", youtube: "https://www.youtube.com/@RomixOficial" },
  { img: antony, portrait: "/artists/antony.webp", name: "Antony LR", genre: "Salsa Urbana", bio: "Cantautor y productor que fusiona la salsa tradicional con elementos urbanos modernos. Su música ha sido reconocida por su innovación y autenticidad.", tracks: ["Insomnio", "Te Tengo que Soltar", "Así Lo Quieres"], spotify: "https://open.spotify.com/intl-es/artist/78ajOAUrHYnOybCQcVEeps?si=XLPbYE06SeeFOk9XEvpIRQ", youtube: "https://www.youtube.com/@antonylrbendecidoforever" },
  { img: bracho, portrait: "/artists/bracho.webp", name: "Bracho", genre: "Tropi-pop", bio: "Cantautor que mezcla ritmos tropicales con pop contemporáneo. Su música ha sido destacada por su frescura y autenticidad.", tracks: ["Soltero"], spotify: "https://open.spotify.com/intl-es/artist/4n7sxLeqBGZD3vWz5oD0DU?si=WBs_durvQ6KJTFhzrNa6ug", youtube: "https://www.youtube.com/@bernardobracho477" },
  { img: oscar, portrait: "/artists/oscar.webp", name: "Oscar  Molina", genre: "Popular", bio: "Cantautor de musica popular colombiana con una carrera consolidada. Su estilo combina elementos tradicionales con influencias contemporáneas.", tracks: [""], spotify: "#", youtube: "#" },
  { img: supremo, portrait: "/artists/supremo.webp", name: "Supremo", genre: "Electro-House", bio: "Productor y DJ que ha llevado los sonidos del Caribe a la escena electrónica internacional.", tracks: ["Ambar", "Victory", "Quédate Conmigo"], spotify: "https://open.spotify.com/intl-es/artist/6foPnBOhxrhLrd5Fg2TRI4?si=9ei9RgciQfifTwcHdHG-yA", youtube: "https://www.youtube.com/channel/UCtIZThpJFnpTUn5gWaIL-8Q" },

];

export type Artist = (typeof artists)[number];
