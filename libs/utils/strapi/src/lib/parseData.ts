import { Data } from "@starter-project/types/api-response"
import { AxiosResponse } from "axios"

export const extractStrapiData = <T extends Data = object>(
  response: AxiosResponse<T>
) => response.data
