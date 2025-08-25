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
//   'strapi::errors',
//   'strapi::security',
//   {
//     name: 'strapi::cors',
//   },
//   {
//     name: 'strapi::content-security-policy',
//     config: {
//       directives: {
//         'script-src': ["'self'", "'unsafe-inline'", 'blob:'],
//       },
//     },
//   },
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::favicon',
//   'strapi::public',
// ];


module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
  },
  {
    name: 'strapi::csp',
    config: {
      directives: {
        'script-src': ["'self'", "'unsafe-inline'", 'blob:'],
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
