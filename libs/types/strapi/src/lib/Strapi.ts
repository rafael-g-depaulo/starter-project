import { SingleTypeSchema } from "@strapi/strapi"

export interface Singleton<T extends SingleTypeSchema> {
  data: {
    id: number
    attributes: T["attributes"]
  }
  // i'm not sure what this is for yet. for now typing it as an empty object
  meta: Record<string, never>
}
