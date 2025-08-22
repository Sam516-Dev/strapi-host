// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

// module.exports = ({ env }) => ({
//   host: env("HOST", "0.0.0.0"),
//   port: env.int("PORT", 1337),
//   app: {
//     keys: env.array("APP_KEYS", ["yourKey1", "yourKey2"]),
//   },
//   admin: {
//     watchIgnoreFiles: [
//       "**/node_modules/**",
//       "**/.cache/**",
//       "**/build/**",
//       "**/.tmp/**",
//       "**/config/server.js", // ignore this file
//     ],
//   },
// });


module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://beta.ratin.net"),
  app: {
    keys: env.array("APP_KEYS"), 
  },
  admin: {
    url: env("ADMIN_URL", "/admin"),
    watchIgnoreFiles: [
      "**/node_modules/**",
      "**/.cache/**",
      "**/build/**",
      "**/.tmp/**",
      "**/config/server.js",
    ],
  },
});

