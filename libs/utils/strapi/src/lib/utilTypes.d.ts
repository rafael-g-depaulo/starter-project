import {
  CollectionTypeSchema,
  // ComponentAttribute,
  SingleTypeSchema,
} from "@strapi/strapi"

export type TypeSchema = SingleTypeSchema | CollectionTypeSchema

type IsComponentKey<
  T extends TypeSchema,
  key extends string
> = key extends keyof T["attributes"]
  ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
    T["attributes"][key] extends ComponentAttribute<infer type>
    ? key
    : never
  : never

export type GetComponentKeys<T extends TypeSchema> = IsComponentKey<
  T,
  keyof T["attributes"]
>
