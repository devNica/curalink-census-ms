import { ErrorPort } from "../ports/error";


export default class AppError extends Error implements ErrorPort {

    public readonly name: string;
    public readonly message: string;
    public readonly messages?: string[] | undefined;
    public readonly statusCode: number;

    constructor(message: string, statusCode: number, errorName: string) {
        super(message)
        this.message = message ?? this.name
        this.statusCode = statusCode
        this.name = errorName

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}