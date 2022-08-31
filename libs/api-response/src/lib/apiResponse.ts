import { AxiosError, AxiosResponse } from "axios"
import { Data, ErrorObject, SuccessObject } from "./types"

export const throwApiError = <ErrorData extends Data = object>(
  err: unknown
) => {
  throw (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((err as any).isAxiosError &&
      (err as AxiosError<ErrorObject<ErrorData>>).response?.data) ?? {
      code: 520,
      status: "error",
      message: "unknown error",
    }
  )
}

export const extractApiData = <T extends Data = object>(
  response: AxiosResponse<SuccessObject<T>>
) => response.data.data
