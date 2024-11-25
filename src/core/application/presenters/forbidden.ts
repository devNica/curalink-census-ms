import { HttpResponseCode } from "../models/http/http";
import AppError from "./app-error";


export default class ForbiddenRequestPresenter extends AppError{
    constructor(message?: string) {
        super(
            message ?? 'Acceso al recurso no autorizado',
            HttpResponseCode.badRequest,
            'Acceso al recurso no autorizado'
        )
    }

}