import { ControllerModel } from "@core/domain/models/api/controller";
import { Application } from "express";


export async function expressHandleRoutes(
    app: Application,
    routes: ControllerModel[]
): Promise<void> {

    routes.forEach(route => {
        app.use(route.prefix, route.controller)
    })
}