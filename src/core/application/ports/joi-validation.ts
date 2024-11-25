import { HttpRequestModel } from "../models/http/http";
import { JoiSchemaModel, JoiValidationResultModel } from "../models/validators/joi";

export interface JoiValidationPort {
    validate: <T>(schema: JoiSchemaModel<T>, request: HttpRequestModel) => Promise<JoiValidationResultModel<T>>
}