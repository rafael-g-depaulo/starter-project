// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  API_HOST: process.env["NX_API_HOST"] ?? `localhost:3333`,
  STRAPI_HOST: process.env["NX_STRAPI_HOST"] ?? `localhost:1337`,
}
