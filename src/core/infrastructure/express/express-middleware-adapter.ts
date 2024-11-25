import { MiddlewarePort } from "@core/application/ports/middleware";
import AppError from "@core/application/presenters/app-error";
import { NextFunction, Request, Response } from "express";


export function expressMiddlewareAdapter(middleware: MiddlewarePort) {
    return async (request: Request, _res: Response, next: NextFunction) => {
        await Promise.resolve(
            middleware.handleRequest({
                body: request.body,
                params: request.params,
                query: request.query,
                headers: request.headers,
                method: request.method
            })
                .then(() => next())
                .catch((err: AppError) => next(err))
        )
    }
}