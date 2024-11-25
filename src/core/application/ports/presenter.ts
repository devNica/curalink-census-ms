import { HttpResponseModel } from "../models/http/http";


export interface PresenterPort<T> {
    handleResponse: (meta: T, message: string) => Promise<HttpResponseModel<T>>
}