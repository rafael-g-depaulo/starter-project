import { useFetchApi } from "@hooks/useApi"
import { api } from "."

export const getUsers = () => api.get("/users").then(({ data }) => data)

export const useUsers = () => useFetchApi("/users", getUsers)
