import { jsx, jsxs } from "react/jsx-runtime";
import { createRootRoute, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
const appCss = "/dreamlikee/assets/styles-D-3pQr8w.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground font-heading", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página no encontrada" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "La página que buscas no existe o ha sido movida." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-glow text-sm", children: "Ir al inicio" }) })
  ] }) });
}
const Route$5 = createRootRoute({
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
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "es", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const $$splitComponentImporter$4 = () => import("./servicios-CfwNB3Du.js");
const Route$4 = createFileRoute("/servicios")({
  head: () => ({
    meta: [{
      title: "Servicios — Dreamlikee Records"
    }, {
      name: "description",
      content: "Grabación, mezcla, mastering, producción, distribución y más servicios profesionales para artistas."
    }, {
      property: "og:title",
      content: "Servicios — Dreamlikee Records"
    }, {
      property: "og:description",
      content: "Servicios profesionales de producción musical."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./estudio-DGlKJhKR.js");
const Route$3 = createFileRoute("/estudio")({
  head: () => ({
    meta: [{
      title: "Nuestro Estudio — Dreamlikee Records"
    }, {
      name: "description",
      content: "Conoce nuestro estudio de grabación profesional en Santa Marta con equipamiento de clase mundial."
    }, {
      property: "og:title",
      content: "Nuestro Estudio — Dreamlikee Records"
    }, {
      property: "og:description",
      content: "Equipamiento de clase mundial para tu música."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contacto-mXlOTVLU.js");
const Route$2 = createFileRoute("/contacto")({
  head: () => ({
    meta: [{
      title: "Contacto — Dreamlikee Records"
    }, {
      name: "description",
      content: "Contáctanos para reservar una sesión de grabación o solicitar información sobre nuestros servicios."
    }, {
      property: "og:title",
      content: "Contacto — Dreamlikee Records"
    }, {
      property: "og:description",
      content: "Reserva tu sesión de grabación en Santa Marta."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./artistas-BECXTS80.js");
const Route$1 = createFileRoute("/artistas")({
  head: () => ({
    meta: [{
      title: "Artistas — Dreamlikee Records"
    }, {
      name: "description",
      content: "Conoce a los artistas del roster de Dreamlikee Records. Talento latino que trasciende fronteras."
    }, {
      property: "og:title",
      content: "Artistas — Dreamlikee Records"
    }, {
      property: "og:description",
      content: "Talento latino que trasciende fronteras."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dk521bup.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServiciosRoute = Route$4.update({
  id: "/servicios",
  path: "/servicios",
  getParentRoute: () => Route$5
});
const EstudioRoute = Route$3.update({
  id: "/estudio",
  path: "/estudio",
  getParentRoute: () => Route$5
});
const ContactoRoute = Route$2.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => Route$5
});
const ArtistasRoute = Route$1.update({
  id: "/artistas",
  path: "/artistas",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ArtistasRoute,
  ContactoRoute,
  EstudioRoute,
  ServiciosRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
