import { useQuery } from "react-query"
import { api } from "."

export const getUsers = () => api.get("/users").then(({ data }) => data)

export const useUsers = () => useQuery("/users", getUsers)
