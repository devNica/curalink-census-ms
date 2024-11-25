import { expressErrorAdapter } from "@core/infrastructure/express/express-error-adapter";
import { Application } from "express";


export async function expressHandleError(app: Application): Promise<void> {
    app.use(expressErrorAdapter)
}
