import axios from "axios"
import { environment } from "../environments/environment"

export const api = axios.create({
  baseURL: `http://${environment.API_HOST}`,
})

export const strapi = axios.create({
  baseURL: `http://${environment.STRAPI_HOST}`,
})
