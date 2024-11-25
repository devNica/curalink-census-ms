import { ControllerModel } from "@core/domain/models/api/controller";
import { expressGlobalMiddleware } from "@core/framework/express/express-global-middleware";
import { expressHandleError } from "@core/framework/express/express-handle-error";
import { expressHandleRoutes } from "@core/framework/express/express-handle-routes";
import { expressPrintRoutes } from "@core/framework/express/express-print-routes";
import { expressSetupConfig } from "@core/framework/express/express-setup-config";
import { Application } from "express";
import { Server } from "http";


export class ExpressServerAdapter {

    private readonly controllers: ControllerModel[] = []


    constructor(
        private readonly serverPort: number,
        private readonly prefix: string,
        private readonly expressApp: Application,
        private readonly server: Server
    ) { }

    private controllerRegister(): void {

    }

    public async start(): Promise<void> {
        this.controllerRegister()
        await expressGlobalMiddleware(this.expressApp)
        await expressSetupConfig(this.expressApp)
        await expressHandleRoutes(this.expressApp, this.controllers)
        await expressPrintRoutes(this.expressApp, false)

        await expressHandleError(this.expressApp)

        this.server.listen(this.serverPort, () => {
            console.log(`Server is running on port: ${this.serverPort}`)
        })
    }
}