import AppError from "@core/application/presenters/app-error";
import { NextFunction, Request, Response } from "express";


export function expressErrorAdapter
    (error: Error, _req: Request, res: Response, next: NextFunction): void {

    if (!error) return next()

    if ((error instanceof AppError)) {
        res.status(error.statusCode).json({
            meta: {
                errorName: error.name,
                messages: error.message.split(',')
            },
            message: error.message
        })
    }
}