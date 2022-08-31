import { ApiTestSingletonTestSingleton } from "@starter-project/strapi"
import { Singleton } from "@starter-project/utils/strapi"
import { useQuery } from "react-query"
import { strapi } from "."

export const getTestSingleton = () =>
  strapi
    .get<Singleton<ApiTestSingletonTestSingleton>>("/api/test-singleton")
    .then((response) => response.data)

export const useTestSingleton = () =>
  useQuery("/api/test-singleton", getTestSingleton)
