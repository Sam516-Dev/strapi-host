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


// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   {
//     name: 'strapi::cors',
//   },
//   {
//     name: 'strapi::csp',
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
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'blob:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['*'], // replace with your frontend domain in production
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
