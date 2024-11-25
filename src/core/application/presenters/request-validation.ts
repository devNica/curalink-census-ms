import { HttpResponseCode } from "../models/http/http";
import AppError from "./app-error";


export default class RequestValidationPresenter extends AppError {
    constructor(message?: string) {
        super(
            message ?? 'Error en el cuerpo de la peticion',
            HttpResponseCode.badRequest,
            'Error en el cuerpo de la peticion'
        )
    }
}