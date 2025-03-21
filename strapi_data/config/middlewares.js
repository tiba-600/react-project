// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

// module.exports = [
//   {
//     name: 'strapi::errors',
//   },
//   {
//     name: 'strapi::security',
//   },
//   {
//     name: 'strapi::cors',
//     config: {
//       enabled: true,
//       origin: ['http://localhost:1337'], // Je frontend domein toevoegen
//       methods: ['GET', 'POST', 'PUT', 'DELETE'], // De toegestane HTTP-methoden
//       headers: ['Content-Type', 'Authorization', 'X-Requested-With'], // Toegestane headers
//     },
//   },
//   {
//     name: 'strapi::poweredBy',
//   },
//   {
//     name: 'strapi::logger',
//   },
//   {
//     name: 'strapi::query',
//   },
//   {
//     name: 'strapi::body',
//   },
//   {
//     name: 'strapi::session',
//   },
//   {
//     name: 'strapi::favicon',
//   },
//   {
//     name: 'strapi::public',
//   },
// ];


module.exports = [
  {
    name: 'strapi::errors',
  },
  {
    name: 'strapi::security',
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:5173'], // Voeg je frontend domein toe
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization', 'X-Requested-With'],
    },
  },
  {
    name: 'strapi::poweredBy',
  },
  {
    name: 'strapi::logger',
  },
  {
    name: 'strapi::query',
  },
  {
    name: 'strapi::body',
  },
  {
    name: 'strapi::session',
  },
  {
    name: 'strapi::favicon',
  },
  {
    name: 'strapi::public',
  },
];