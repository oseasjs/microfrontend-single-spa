import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@poc/react-single",
  app: () => System.import("@poc/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@poc/react-multiples",
  app: () => System.import("@poc/react-multiples"),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@poc/react-parcel",
  app: () => System.import("@poc/react-parcel"),
  activeWhen: (location) => location.pathname === '/react-parcel',
});

registerApplication({
  name: "@poc/react-parcel-form",
  app: () => System.import("@poc/react-parcel-form"),
  activeWhen: (location) => location.pathname === '/react-parcel-form',
});

registerApplication({
  name: "@poc/react-utils",
  app: () => System.import("@poc/react-utils"),
  activeWhen: (location) => location.pathname === '/react-utils',
});

registerApplication({
  name: "@poc/react-lazy",
  app: () => System.import("@poc/react-lazy"),
  activeWhen: ['/react-lazy'],
});

registerApplication({
  name: "@poc/react-header",
  app: () => System.import("@poc/react-header"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
