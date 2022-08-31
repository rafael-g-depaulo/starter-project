import { useFetchApi } from "@hooks/useApi"
import { ApiTestSingletonTestSingleton } from "@starter-project/strapi"
import { fetchSingleton } from "@starter-project/utils/strapi"
import { strapi } from "."

export const getTestSingleton = () =>
  fetchSingleton<ApiTestSingletonTestSingleton>(strapi, "test-singleton")

export const useTestSingleton = () =>
  useFetchApi("test-singleton", getTestSingleton)
