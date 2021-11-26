import { registerApplication, start } from "single-spa";

// NOTE: Json used as response payload on mocky.io is avaliable in: ./mocky-io-sample/applications.json
fetch('https://run.mocky.io/v3/7f53a28a-3271-434f-bba6-0545d0b5eb7b')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(d => {
      registerApplication({
        name: d.name,
        app: () => System.import(d.package),
        activeWhen: d.exact ? (location) => location.pathname === d.activeWhen : d.activeWhen
      });
    })
  })

start({
  urlRerouteOnly: true,
});
