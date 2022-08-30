export const environment = {
  production: true,
  API_HOST: process.env["NX_API_HOST"] ?? `localhost:3333`,
  STRAPI_HOST: process.env["NX_STRAPI_HOST"] ?? `localhost:1337`,
}
