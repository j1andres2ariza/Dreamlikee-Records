import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-heading">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-glow text-sm">Ir al inicio</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dreamlikee Records — Estudio de Grabación en Santa Marta" },
      { name: "description", content: "Estudio de grabación y sello discográfico en Santa Marta. Producción, mezcla y distribución global para artistas latinos." },
      { property: "og:title", content: "Dreamlikee Records — Estudio de Grabación en Santa Marta" },
      { property: "og:description", content: "Estudio de grabación y sello discográfico en Santa Marta. Producción, mezcla y distribución global para artistas latinos." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Dreamlikee Records — Estudio de Grabación en Santa Marta" },
      { name: "twitter:description", content: "Estudio de grabación y sello discográfico en Santa Marta. Producción, mezcla y distribución global para artistas latinos." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
