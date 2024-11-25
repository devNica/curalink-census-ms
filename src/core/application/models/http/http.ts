export interface HttpRequestModel <
    Body = any,
    Params = any,
    Query = any,
    Headers = any,
    Data = any
> {
    body?: Body
    params?: Params
    query?: Query
    headers?: Headers
    data?: Data
}


export enum HttpResponseCode {
    success = 200,
    created = 201,
    temporaryRedirect=307,
    badRequest = 400,
    unAuthorized = 401,
    forbidden = 403,
    notFound = 404,
    payloadToLarge = 413,
    unprocessableEntity = 422,
    internalServerError = 500
}

export interface HttpResponseModel<T> {
    meta: T
    message: string
    statusCode: number
}