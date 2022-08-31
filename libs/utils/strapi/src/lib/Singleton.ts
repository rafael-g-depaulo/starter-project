import { SingleTypeSchema } from "@strapi/strapi"
import { AxiosInstance } from "axios"
import { FetchOneConfig } from "./fetchConfig"
import { extractStrapiData } from "./parseData"

export interface Singleton<T extends SingleTypeSchema> {
  data: {
    id: number
    attributes: T["attributes"]
  }
  // i'm not sure what this is for yet. for now typing it as an empty object
  meta: Record<string, never>
}

const defaultConfig: FetchOneConfig = {
  populate: "all",
} as const

export const fetchSingleton = <T extends SingleTypeSchema>(
  strapi: AxiosInstance,
  route: T["info"]["singularName"],
  config: FetchOneConfig = defaultConfig
) => {
  const { populate }: FetchOneConfig = { ...defaultConfig, ...config }

  const populateStr = populate === "all" ? "populate=%2A" : ""

  return strapi
    .get<Singleton<T>>(`/api/${route}?${populateStr}`)
    .then(extractStrapiData)
}
