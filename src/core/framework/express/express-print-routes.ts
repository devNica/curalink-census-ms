import { Application, NextFunction, Request, Response } from "express";
const listEndpoints = require('express-list-endpoints')

export async function expressPrintRoutes(app: Application, allow = true): Promise<void> {
    if (allow) {
        app.use((_req: Request, _res: Response, next: NextFunction) => {
            console.log('Rutas Registradas:')
            console.log(listEndpoints(app))
            next()
        })
    }
}