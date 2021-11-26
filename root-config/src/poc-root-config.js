import { registerApplication, start } from "single-spa";
import axios from 'axios'


// NOTE: Json used as response payload on mocky.io is avaliable in: ./public/applications.json
// fetch('https://run.mocky.io/v3/7f53a28a-3271-434f-bba6-0545d0b5eb7b')
//   .then(resp => resp.json())
//   .then(data => {
//     data.applications.forEach(app => {
//       registerApplication({
//         name: app.name,
//         app: () => System.import(app.package),
//         activeWhen: app.exact 
//           ? (location) => location.pathname === app.activeWhen 
//           : app.activeWhen
//       });
//     })
//   })
//   .finally(() => {
//     start({
//       urlRerouteOnly: true,
//     });
//   })

  axios('https://oseasjs.github.io/microfrontend-single-spa/root-config/applications.json')
  .then(resp => {
    resp.data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact 
          ? (location) => location.pathname === app.activeWhen 
          : app.activeWhen
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  })
