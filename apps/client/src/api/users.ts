import { useFetchApi } from "@hooks/useApi"
import { extractApiData, throwApiError } from "@starter-project/api-response"
import { api } from "."

export const getUsers = () =>
  api.get("/users").then(extractApiData).catch(throwApiError)

export const useUsers = () => useFetchApi("/users", getUsers)
