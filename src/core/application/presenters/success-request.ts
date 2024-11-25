import { HttpResponseCode, HttpResponseModel } from "../models/http/http";
import { PresenterPort } from "../ports/presenter";


export default class SuccessRequestPresenter<T> implements PresenterPort<T> {
    async handleResponse(meta: T, message: string): Promise<HttpResponseModel<T>> {
        return {
            statusCode: HttpResponseCode.success,
            meta,
            message
        }
    }

}