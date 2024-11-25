import { Router } from "express"


export interface ControllerModel {
    prefix: string
    controller: Router
}

export type EmptyResponseModel = Record<string, unknown>
export type EmptyRequestModel = Record<string, unknown>