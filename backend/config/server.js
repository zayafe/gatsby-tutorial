module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e0facf4e96dc5cd18bc06fc3138ad484'),
    },
  },
});
