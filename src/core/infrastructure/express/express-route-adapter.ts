import { ControllerPort } from "@core/application/ports/controller";
import AppError from "@core/application/presenters/app-error";
import { NextFunction, Request, Response } from "express";


export function expressRouteAdapter<T>(controller: ControllerPort<T>) {
    return async (request: Request, response: Response, next: NextFunction) => {
        await Promise.resolve(controller.handleRequest({
            body: request.body,
            params: request.params,
            query: request.query,
            headers: request.headers
        }))
            .then(ctrl => {
                response.status(ctrl.statusCode)
                    .json({ meta: ctrl.meta, message: ctrl.message })
                next()
            })
            .catch((err: AppError) => next(err))
    }
}