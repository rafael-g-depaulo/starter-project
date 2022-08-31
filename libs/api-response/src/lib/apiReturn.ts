import { Data, ErrorObject, SuccessObject } from "@starter-project/api-response"
import { Response } from "express"

export const ErrorObj = <T extends Data>(
  code: number,
  message: string,
  data?: T
): ErrorObject<T> => {
  const baseErrorObj: ErrorObject<T> = {
    code,
    status: "error",
    message,
  }

  if (!data) return baseErrorObj
  return { ...baseErrorObj, data }
}

export const SuccessObj = <T extends Data>(
  code: number,
  data: T
): SuccessObject<T> => {
  const returnVal: SuccessObject<T> = {
    code,
    status: "success",
    data,
  }
  return returnVal
}

export type errorReturnFn = (
  res: Response,
  message: string,
  data?: object
) => Response
export const errorReturn =
  (errorCode: number): errorReturnFn =>
  (res, message, data) => {
    return res.status(errorCode).json(ErrorObj(errorCode, message, data))
  }

export type successReturnFn = (res: Response, data: Data) => Response
export const successReturn =
  (status: number) => (res: Response, data: Data) => {
    return res.status(status).json(SuccessObj(status, data))
  }
