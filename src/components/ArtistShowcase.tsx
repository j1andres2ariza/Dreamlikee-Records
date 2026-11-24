import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Music2, Pause, Play } from "lucide-react";
import { artists } from "../data/artists";
import { nearestPosition, orbitStyle, wrapIndex } from "../lib/artist-orbit";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

const ROTATION_DELAY = 5000;
const TRANSITION_DURATION = 950;

export default function ArtistShowcase() {
  const [position, setPosition] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const portraits = useRef<(HTMLButtonElement | null)[]>([]);
  const currentPosition = useRef(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const profileTrigger = useRef<HTMLElement | null>(null);
  const profileButton = useRef<HTMLButtonElement>(null);
  const id = useId();
  const activeIndex = wrapIndex(position, artists.length);
  const active = artists[activeIndex];
  const canRotate = playing && !reducedMotion && inView && pageVisible && !hovered && !profileOpen;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) setPlaying(false);
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!canRotate) return;
    const timer = window.setInterval(() => setPosition((value) => value + 1), ROTATION_DELAY);
    return () => window.clearInterval(timer);
  }, [canRotate, position]);

  useEffect(() => {
    const startPosition = currentPosition.current;
    let frame = 0;
    let startedAt: number | undefined;
    const render = (value: number) => {
      currentPosition.current = value;
      portraits.current.forEach((portrait, index) => {
        if (!portrait) return;
        const style = orbitStyle(index, value, artists.length);
        portrait.style.transform = style.transform;
        portrait.style.opacity = String(style.opacity);
        portrait.style.filter = style.filter;
        portrait.style.zIndex = String(style.zIndex);
      });
    };
    if (reducedMotion || startPosition === position) {
      render(position);
      return;
    }
    const animate = (now: number) => {
      startedAt ??= now;
      const progress = Math.min((now - startedAt) / TRANSITION_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      render(startPosition + (position - startPosition) * eased);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [position, reducedMotion]);

  function select(index: number) {
    setPlaying(false);
    setPosition((value) => nearestPosition(value, index, artists.length));
  }

  function step(direction: number) {
    setPlaying(false);
    setPosition((value) => value + direction);
  }

  function openProfile() {
    profileTrigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setPlaying(false);
    setProfileOpen(true);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    // Keep keyboard navigation local to the gallery, away from the profile dialog.
    if (profileOpen) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      step(event.key === "ArrowRight" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      select(event.key === "Home" ? 0 : artists.length - 1);
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!pointerStart.current) return;
    const x = event.clientX - pointerStart.current.x;
    const y = event.clientY - pointerStart.current.y;
    pointerStart.current = null;
    if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y)) {
      swiped.current = true;
      step(x < 0 ? 1 : -1);
    }
  }

  return (
    <div
      ref={root}
      className="artist-showcase"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Artistas de Dreamlikee Records"
      onKeyDown={onKeyDown}
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPlaying(false);
      }}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => { setHovered(false); pointerStart.current = null; }}
    >
      <div className="artist-orbit-stage"
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          pointerStart.current = { x: event.clientX, y: event.clientY };
          swiped.current = false;
        }}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pointerStart.current = null; }}
        onClickCapture={(event) => {
          if (swiped.current) { event.preventDefault(); event.stopPropagation(); swiped.current = false; }
        }}
      >
        <div className="artist-orbit-glow" aria-hidden="true" />
        <div className="artist-orbit-ring" aria-hidden="true" />
        {artists.map((artist, index) => (
          <button
            key={artist.name}
            ref={(element) => { portraits.current[index] = element; }}
            type="button"
            className="artist-portrait"
            style={orbitStyle(index, 0, artists.length)}
            data-active={index === activeIndex}
            aria-label={index === activeIndex ? `Conocer a ${artist.name}` : `Seleccionar a ${artist.name}`}
            aria-pressed={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => index === activeIndex ? openProfile() : select(index)}
          >
            <span className="artist-portrait-image">
              <img src={artist.portrait} alt="" width={400} height={500} loading="lazy" decoding="async" draggable={false} />
            </span>
            <span className="artist-portrait-name" aria-hidden="true">{artist.name}</span>
          </button>
        ))}
      </div>

      <div className="artist-spotlight" id={`${id}-selection`} aria-live={playing ? "off" : "polite"} aria-atomic="true">
        <div key={active.name} className="artist-spotlight-copy">
          <p className="artist-genre">{active.genre}</p>
          <h2>{active.name}</h2>
        </div>
        <button ref={profileButton} type="button" className="btn-outline-glow artist-profile-button" onClick={openProfile}>
          Conocer artista
        </button>
      </div>

      <div className="artist-controls">
        <button type="button" className="artist-control" aria-label="Artista anterior" onClick={() => step(-1)}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <p className="artist-counter" aria-label={`Artista ${activeIndex + 1} de ${artists.length}`}>
          <span>{String(activeIndex + 1).padStart(2, "0")}</span> / {String(artists.length).padStart(2, "0")}
        </p>
        <button type="button" className="artist-control" aria-label="Siguiente artista" onClick={() => step(1)}>
          <ChevronRight size={20} aria-hidden="true" />
        </button>
        <span className="artist-control-divider" aria-hidden="true" />
        <button type="button" className="artist-control" aria-label={playing ? "Pausar rotación" : "Activar rotación"}
          aria-pressed={playing} onClick={() => setPlaying((value) => !value)} disabled={reducedMotion}>
          {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        </button>
      </div>
      <p className="artist-hint">Desliza o selecciona un artista para descubrirlo</p>

      <div className="artist-roster" aria-label="Seleccionar artista">
        {artists.map((artist, index) => (
          <button key={artist.name} type="button" aria-pressed={index === activeIndex}
            aria-controls={`${id}-selection`} onClick={() => select(index)}>{artist.name}</button>
        ))}
      </div>

      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className="artist-profile" closeLabel="Cerrar perfil" onCloseAutoFocus={(event) => {
          event.preventDefault();
          const trigger = profileTrigger.current;
          if (trigger?.isConnected) trigger.focus();
          else profileButton.current?.focus();
        }}>
          <div className="artist-profile-photo">
            <img src={active.img} alt={active.name} width={600} height={750} />
          </div>
          <div className="artist-profile-copy">
            <p className="artist-genre">{active.genre}</p>
            <DialogTitle className="artist-profile-title">{active.name}</DialogTitle>
            <DialogDescription className="artist-profile-bio">{active.bio}</DialogDescription>
            {active.tracks.some((track) => track.trim()) && (
              <div className="artist-tracks">
                <h3>Canciones destacadas</h3>
                <ul>{active.tracks.filter((track) => track.trim()).map((track) => (
                  <li key={track}><Music2 size={16} aria-hidden="true" /><span>{track}</span></li>
                ))}</ul>
              </div>
            )}
            <div className="artist-platforms">
              {[["Spotify", active.spotify], ["YouTube", active.youtube]].filter(([, url]) => url.startsWith("https://")).map(([label, url]) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="btn-outline-glow">
                  <ExternalLink size={16} aria-hidden="true" /> {label}
                  <span className="sr-only"> (abre en otra pestaña)</span>
                </a>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
