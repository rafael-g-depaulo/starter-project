import { ErrorObject } from "@starter-project/types/api-response"
import { AxiosError } from "axios"
import { QueryFunction, useQuery, UseQueryOptions } from "react-query"

type erroredFetch<T> = {
  error: T
  data: undefined
  isLoading: false
  status: "error"
}

type loadingFetch = {
  error: null
  data: undefined
  isLoading: true
  status: "loading"
}

type sucessfulFetch<T> = {
  error: null
  data: T
  isLoading: false
  status: "success"
}

export type fetchHookReturn<D, E> =
  | erroredFetch<E>
  | loadingFetch
  | sucessfulFetch<D>
type DefaultError = AxiosError<ErrorObject>

export const useFetchApi = <D, E = DefaultError>(
  key: string,
  fetcher: QueryFunction<D, string>,
  options?: UseQueryOptions<D, E, D, typeof key>
) =>
  useQuery<D, E, D, typeof key>(key, fetcher, options) as fetchHookReturn<D, E>
