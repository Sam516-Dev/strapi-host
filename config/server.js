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

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["yourKey1", "yourKey2"]),
  },
  admin: {
    watchIgnoreFiles: [
      "**/node_modules/**",
      "**/.cache/**",
      "**/build/**",
      "**/.tmp/**",
      "**/config/server.js", // ignore this file
    ],
  },
});
