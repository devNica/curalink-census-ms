import { Application } from "express";


export async function expressSetupConfig(app: Application): Promise<void> {
    app.set('trust proxy', true)
    app.disabled('x-powered-by')
}