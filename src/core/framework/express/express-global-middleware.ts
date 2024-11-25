import { Application, json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";


export async function expressGlobalMiddleware(app: Application): Promise<void> {
    app.use(json())
    app.use(urlencoded({ extended: true }))

    app.use(helmet())
    app.use(morgan('dev'))
}