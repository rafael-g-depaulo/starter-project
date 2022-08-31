import { errorReturn, successReturn } from "./apiReturn"

// sucessful returns
export const updatedSuccessfully = successReturn(200)
export const fetchedSuccessfully = successReturn(200)
export const loggedInSuccessfully = successReturn(200)
export const actionSuccessful = successReturn(200)
export const createdSuccessfully = successReturn(201)

// error returns
export const badRequestError = errorReturn(400)
export const fileParseError = errorReturn(400)
export const failedLoginError = errorReturn(401)
export const unauthenticatedError = errorReturn(401)
export const unauthorizedError = errorReturn(401)
export const notFoundError = errorReturn(404)
export const databaseError = errorReturn(500)
export const unidentifiedError = errorReturn(500)
