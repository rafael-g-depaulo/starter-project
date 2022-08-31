import { ApiTestSingletonTestSingleton } from "@starter-project/strapi"
import { fetchSingleton } from "@starter-project/utils/strapi"
import { useQuery } from "react-query"
import { strapi } from "."

export const getTestSingleton = () =>
  fetchSingleton<ApiTestSingletonTestSingleton>(strapi, "test-singleton")

export const useTestSingleton = () =>
  useQuery("test-singleton", getTestSingleton)
